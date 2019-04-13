import React, { Component } from 'react'
import Sider from './sider'
import Main from './main'

import { connect } from 'react-redux';
import { actionCreators } from '../login/store';

class Home extends Component {

  render() {
    return (
      <div>
        <Sider />
        <Main />
        <h1>{this.props.count}</h1>
        <div>siders 11</div>
        <div>
          <div>header</div>
          <div>content</div>
        </div>
        <div>
          <p onClick={this.props.add}>add</p>
          <p onClick={this.props.minus}>minus</p>
          <p onClick={this.props.asyncAdd}>minus</p>
        </div>
      </div>
    )
  }
}
// connect 负责把对象挂到 this.props上
export default connect(
  state => ({count: state.count.num}),
  dispatch => ({
    add() {
      dispatch(actionCreators.add())
    },
    minus() {
      dispatch(actionCreators.minus())
    },
    asyncAdd() {
      dispatch(actionCreators.asyncAdd())
    }
  })
)(Home)