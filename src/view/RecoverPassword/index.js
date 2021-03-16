import React, { useState } from 'react'

import NavBar from '../../components/NavBar'

import firebase from '../../config/firebase'

import './styles.css'
const RecoverPassword = () => {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const recoverPass = () => {
    setLoading(true)
    if (email === '') {
      setMsg('Por favor! Preencha o campo.')
      setLoading(false)
      return
    }

    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then((response) => {
        setLoading(false)
        setMsg('Enviamos um link para alteração da senha no email cadastrado!')
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
        setMsg('Verifique se o email está correto!')
      })
  }

  return (
    <>
      <NavBar />

      <form className="text-center form-login mx-auto mt-5">
        <h3 className="mb-3 fw-bold">Recuperar a Senha</h3>
        <input
          type="email"
          className="form-control my-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {msg !== '' && (
          <div className="msg my-4 text-center">
            <span>{msg}</span>
          </div>
        )}

        {loading ? (
          <div className="w-100 row">
            <div className="spinner-border text-danger mx-auto " role="status">
              <span className="text-center visually-hidden"></span>
            </div>
          </div>
        ) : (
          <button
            type="button"
            className=" w-100 btn btn-md btn-block btn-enviar"
            onClick={recoverPass}
          >
            Recuperar a Senha
          </button>
        )}
      </form>
    </>
  )
}

export default RecoverPassword
