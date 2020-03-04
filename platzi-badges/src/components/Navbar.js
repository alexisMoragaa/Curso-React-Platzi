import React from 'react'
import logo from '../images/logo.svg'
import './styles/Navbar.css'
import {Link} from 'react-router-dom'

class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <Link to="/badges" className="Navbar__brand">
                        <img src={logo} alt="Logo de la conferencia" className="Navbar__brand-logo"/>
                        <span className="font-weight-light">Platzi</span>
                        <span className="font-weight-bold">Conf</span>
                    </Link>
                </div>
            </div>


        )
    }
}


export default Navbar