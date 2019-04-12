import React, { Component } from 'react'
import './App.css'
import './css/css.less';
import './css/style.css';
// import A from './index.ts'
import Button from 'antd/lib/button';

 class App extends Component {
  componentDidMount() {
    // console.log(A)
  }
  render() {
    return (
      <div>
        <div className="title">
          hello world!
        </div>
        O(∩_∩)O哈哈~1133
        <div>
          <Button type="primary">Button</Button>
        </div>
      </div>
    )
  }
}

export default App