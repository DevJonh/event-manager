import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from '../view/Login'
import Register from '../view/Register'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
    </BrowserRouter>
  )
}

export default Routes
