import React from  'react'

import './styles/BadgeNew.css'

import Header from '../images/badge-header.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'


class BadgeNew extends React.Component{
    state = {form:{
            firstName: "Nombre",
            lastName: 'Apellido',
            jobTitle: 'Trabajo',
            instagram : 'Instagram',
            hashtag: 'Hashtag',
            
    }}

    handleChange = e => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        })
    }


    render(){
       return <div className="contenedor">


           <div className="BadgeNew__hero">
               <img src={Header} alt="header" className="img-fluid"/>
           </div>

            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge 
                            firstName = {this.state.form.firstName}
                            lastName = {this.state.form.lastName}
                            avatarUrl = "http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"
                            jobTitle = {this.state.form.jobTitle}
                            hashtag = {this.state.form.hashtag}
                            instagram = {this.state.form.instagram}
                        />
                    </div>
                    <div className="col-6">
                        <BadgeForm 
                            onChange ={this.handleChange}
                            valueForm = {this.state.form}
                        />
                    </div>
                </div>
            </div>


       </div>
    }
}

export default BadgeNew