import React from  'react'

import './styles/BadgeNew.css'

import NavBar from '../components/Navbar'
import Header from '../images/badge-header.svg'
import Badge from '../components/Badge'


class BadgeNew extends React.Component{
    render(){
       return <div className="contenedor">

           <NavBar/>

           <div className="BadgeNew__hero">
               <img src={Header} alt="header" className="img-fluid"/>
           </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge 
                            firstName = "Juan Carlos"
                            lastName = "Bodoque"
                            avatarUrl = "http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"
                            jobTitle = "Desarrollador Web"
                            hashtag = "Platzi"
                            instagram = "amoragaa"
                        />
                    </div>
                    <div className="col">
                        otra cosa
                    </div>
                </div>
            </div>


       </div>
    }
}

export default BadgeNew