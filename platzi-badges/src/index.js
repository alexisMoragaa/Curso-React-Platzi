import React from 'react'
import ReactDom from 'react-dom';
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

const container = document.getElementById('app')


ReactDom.render( <App /> , container)
// ReactDom.render(,
//                  container)