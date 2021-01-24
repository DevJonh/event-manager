import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import firebase from '../../config/firebase'

import './styles.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [msg, setMsg] = useState('')

  const logar = () => {
    if (email === '' || password === '') {
      setMsg('Por favor! Preencha o email/senha')
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        alert('Usuário Logado!')
      })
      .catch((err) => {
        if (err.code === 'auth/invalid-email') {
          setMsg('Por favor insira um email válido!')
        }
        if (err.code === 'auth/user-not-found') {
          setMsg('Usuário não cadastrado.')
        }
        if (err.code === 'auth/wrong-password') {
          setMsg('Email/Senha inválido.')
        }
      })
  }
  return (
    <div className="login-content d-flex align-items-center">
      <form className="form-signin mx-auto">
        <div className="text-center mb-4">
          <h1 className="h3 mb-3 fw-bold text-white">Login</h1>
        </div>
        <div className="form-label-group">
          <input
            type="email"
            id="inputEmail"
            className="form-control my-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-label-group">
          <input
            type="password"
            id="inputPassword"
            className="form-control my-2"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="w-100 btn btn-md btn-login fw-bold mt-3"
          type="button"
          onClick={logar}
        >
          Login
        </button>

        {msg !== '' && (
          <div className="msg-login text-white text-center mt-4">
            <span>{msg}</span>
          </div>
        )}

        <div className="options-login mt-4 text=center">
          <Link to="/" className="me-2">
            Recuperar Senha
          </Link>
          <span className="text-white">&#9830;</span>
          <Link to="/register" className="ms-2">
            Quero Cadastrar
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login
