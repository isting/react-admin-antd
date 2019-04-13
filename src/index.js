import React from 'react'
import { render } from 'react-dom'
import App from './App.jsx'

render(<App />, document.getElementById('root'))
// console.log(process.env.NODE_ENV)
// console.log(__isDevelopment__)

if (module.hot) {
  module.hot.accept(['./App'], () => {
    let App= require('./App').default;  
    render(<App/>, document.getElementById('root'));
  });
}