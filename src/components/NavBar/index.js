import React from 'react'
import { Link } from 'react-router-dom'
import { MdReorder, MdInsertEmoticon } from 'react-icons/md'

import './styles.css'
import { useSelector, useDispatch } from 'react-redux'

const NavBar = () => {
  const dispatch = useDispatch()
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <MdInsertEmoticon className="navbar-brand" color="#fff" size={46} />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <MdReorder color="#fff" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {useSelector((state) => !state.usuarioLogado) ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Cadastrar
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/publisher">
                    Publicar Eventos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/my-events">
                    Meus Eventos
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className="nav-link"
                    onClick={() => dispatch({ type: 'LOG_OUT' })}
                  >
                    Sair
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
