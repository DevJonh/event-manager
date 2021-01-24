import React, { useState } from 'react'
import firebase from '../../config/firebase'

import './styles.css'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const register = () => {
    setMsg('')
    setLoading(true)

    if (email === '' || password === '') {
      setMsg('Por favor! Preencha o email/senha')
      return
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        setLoading(false)
        alert('Usuário Cadastrado com Sucesso!')
      })
      .catch((err) => {
        setLoading(false)
        if (err.code === 'auth/invalid-email') {
          setMsg('Por favor insira um email válido!')
        }
        if (err.code === 'auth/email-already-in-use') {
          setMsg('Usuário já existe.')
        }
        if (err.code === 'auth/weak-password') {
          setMsg('Insira uma senha de no mínimo 6 caracteres')
        }
      })
  }

  return (
    <div className="form-register">
      <form className="text-center form-login mx-auto mt-5">
        <h1 className="h3 mb-3 text-black fw-bold">Cadastro</h1>

        <input
          type="email"
          className="form-control my-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control my-2"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {loading ? (
          <div className="spinner-border text-danger mt-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <button
            type="button"
            className="btn btn-md btn-block mt-3 mb-5 btn-cadastro"
            onClick={register}
          >
            Cadastrar
          </button>
        )}

        {msg !== '' && (
          <div className="msg-login text-black text-center mt-2">
            <span>{msg}</span>
          </div>
        )}
      </form>
    </div>
  )
}

export default Register
