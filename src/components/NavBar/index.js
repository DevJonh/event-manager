import React from 'react'
import { Link } from 'react-router-dom'
import { MdReorder } from 'react-icons/md'

import './styles.css'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <span className="navbar-brand text-white fw-bold">Eventos</span>
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
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
