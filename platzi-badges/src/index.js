import React from 'react'
import ReactDom from 'react-dom';
import Badge from './components/Badge'
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'
const name = "Alexis Moraga"

const container = document.getElementById('app')



ReactDom.render(<Badge/>, container)