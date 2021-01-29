import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from '../view/Login'
import Register from '../view/Register'
import Home from '../view/Home'
import RecoverPassword from '../view/RecoverPassword'
import EventRegistration from '../view/EventRegistration'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/" component={Home} />
      <Route path="/event/:param" component={Home} />
      <Route exact path="/new-password" component={RecoverPassword} />
      <Route exact path="/publisher" component={EventRegistration} />
    </BrowserRouter>
  )
}

export default Routes
