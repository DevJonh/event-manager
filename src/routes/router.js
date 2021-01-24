import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from '../view/Login'
import Register from '../view/Register'
import Home from '../view/Home'
import RecoverPassword from '../view/RecoverPassword'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/" component={Home} />
      <Route exact path="/new-password" component={RecoverPassword} />
    </BrowserRouter>
  )
}

export default Routes
