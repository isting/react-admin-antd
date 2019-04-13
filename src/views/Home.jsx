import React, { Component } from 'react'
import Sider from './layout/sider'
import Main from './layout/main'

// import { connect } from 'react-redux';
// import { actionCreators } from './store';


class Home extends Component {
  render() {
    return (
      <div>
        <Sider />
        <Main />
        <div>siders 11</div>
        <div>
          <div>header</div>
          <div>content</div>
        </div>
      </div>
    )
  }
}

export default Home