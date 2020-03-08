import React from 'react'
import './styles/Home.css'
import ConfLogo from '../images/platziconf-logo.svg'
import Logo from '../images/astronauts.svg'
import { Link } from 'react-router-dom'
function Home (){
    return(
        <div className="content__home p-2">
            <div className="row">
                <div className="col-4 p-5 mt-5">
                       <img src={ConfLogo} alt="" className="img__home mt-5"/>
                       <h1 className="titulo textos">PRINT YOUR BADGES</h1>
                       <p className="subtitulo textos">The easies way to manage your conference</p>
                       <Link to="/badges" className="btn btn-success">Start Now</Link>
                </div>
                <div className="col-8 p-5 ">
                    <img src={Logo} alt="" className="img__home"/>
                </div>
            </div>
        </div>
    )
}

export default Home