import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Login from './views/login/login'
import Home from './views/layout/Home'
import Page404 from './views/errorPage/404.jsx'
import Page403 from './views/errorPage/403.jsx'
import Page500 from './views/errorPage/500.jsx'

import store from './store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/404" component={Page404} />
            <Route path="/500" component={Page500} />
            <Route path="/403" component={Page403} />
            <Redirect  to="/404" />
          </Switch>
        </Router>
      </Provider>
    )
  }
}
