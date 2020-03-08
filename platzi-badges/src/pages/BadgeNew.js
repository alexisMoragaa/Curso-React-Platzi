import React from  'react'

import './styles/BadgeNew.css'

import Header from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
 import api from '../api'

class BadgeNew extends React.Component{
    state = {
        loading:false,
        error:null,
        form:{}
    } 
            
    

    handleChange = e => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        })
    }

    handleSubmit = async e =>{
        e.preventDefault()
        this.setState({loading:true, error:null})

        try{
            this.setState({loading:false})
            await api.badges.create(this.state.form)
        }catch(error){
            this.setState({loading:false, error:error})
        }
        // const api.create(this.state.form)
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
                            firstName = {this.state.form.firstName || 'First Name'}
                            lastName = {this.state.form.lastName || 'Last Name'}
                            email = {this.state.form.email || 'email'}
                            jobTitle = {this.state.form.jobTitle}
                            twitter = {this.state.form.twitter}
                        />
                           
                    </div>
                    <div className="col-6">
                        <BadgeForm 
                            onChange ={this.handleChange}
                            valueForm = {this.state.form}
                            onSubmit={this.handleSubmit}
                        />
                    </div>
                </div>
            </div>


       </div>
    }
}

export default BadgeNew