import React from 'react'
import ReactDom from 'react-dom';
import Page from './pages/BadgeNew'
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

const container = document.getElementById('app')


ReactDom.render( <Page /> , container)
// ReactDom.render(,
//                  container)