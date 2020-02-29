import React from 'react'
import ReactDom from 'react-dom';
import Badge from './components/Badge'
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'
const name = "Alexis Moraga"

const container = document.getElementById('app')



ReactDom.render(<Badge 
                    firstName = "Juan Carlos"
                    lastName = "Bodoque"
                    avatarUrl = "http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"
                    jobTitle = "Desarrollador Web"
                    hashtag = "Platzi"
                    instagram = "amoragaa"
                />,
                 container)