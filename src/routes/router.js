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
        <Route path="/events/:my" component={Home} />
        <Route exact path="/new-password" component={RecoverPassword} />
        <Route exact path="/publisher" component={EventRegistration} />
        <Route path="/event/:id" component={EventDetails} />
        <Route path="/editevent/:id" component={EventRegistration} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
