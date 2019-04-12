import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';

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
      // <Provider>
        <BrowserRouter>
          <div>
            <Login />
            <Home />
            <Page404 />
            <Page403 />
            <Page500 />
            <Sider />
            <Main />
            {/* <Header /> */}
            {/* <Route path='/' exact component={Home}></Route> */}
            {/* <Route path='/login' exact component={Login}></Route> */}
          </div>
        </BrowserRouter>
      // </Provider>
    )
  }
}
