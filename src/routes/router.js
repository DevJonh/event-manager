import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from '../view/Login'
import Register from '../view/Register'
import Home from '../view/Home'
import RecoverPassword from '../view/RecoverPassword'
import EventRegistration from '../view/EventRegistration'
import EventDetails from '../view/EventDetails'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Home} />
        <Route path="/event/:param" component={Home} />
        <Route exact path="/new-password" component={RecoverPassword} />
        <Route exact path="/publisher" component={EventRegistration} />
        <Route exact path="/eventdetails" component={EventDetails} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
