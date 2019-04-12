import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';

import Login from './views/login/login'
import Home from './views/Home'
import Page404 from './views/errorPage/404.jsx'
import Page403 from './views/errorPage/403.jsx'
import Page500 from './views/errorPage/500.jsx'
import Sider from './views/layout/sider.jsx'
import Main from './views/layout/main'

import store from './store'

export default class App extends Component {
  render() {
    return (
      <Home />
      
      // <Provider>
        // <Router>
        //   <Switch>
        //     <Route path="/" Component={Home} />
        //     <Route path="/login" exact Component={Login} />
        //     <Route path="/404" Component={Page404} />
        //     <Route path="/500" Component={Page500} />
        //     <Route path="/403" Component={Page403} />
        //     <Sider />
        //     <Main />
        //     <Redirect  to="/404" />
        //   </Switch>
        // </Router>
      // </Provider>
    )
  }
}
