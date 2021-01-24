import React from 'react'

import './styles.css'

const Login = () => {
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
          />
        </div>
        <div className="form-label-group">
          <input
            type="password"
            id="inputPassword"
            className="form-control my-2"
            placeholder="Senha"
          />
        </div>

        <button
          className="w-100 btn btn-md btn-login fw-bold mt-3"
          type="submit"
        >
          Login
        </button>

        <div className="msg-login text-white text-center my-2">
          <span>
            <strong>Uoolll</strong> Você está conectado! &#128522;
          </span>
          <br />
          <span>
            <strong>Opss</strong> Verifique se a senha ou usuários estão
            corretos! &#128532;
          </span>
        </div>

        <div className="options-login mt-4 text=center">
          <a href="/" className="me-2">
            Recuperar Senha
          </a>
          <span className="text-white">&#9830;</span>
          <a href="/" className="ms-2">
            Quero Cadastrar
          </a>
        </div>
      </form>
    </div>
  )
}

export default Login
