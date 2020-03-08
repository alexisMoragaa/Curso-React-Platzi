import React from  'react'

import './styles/BadgeEdit.css'

import Header from '../images/platziconf-logo.svg'
import BadgeForm from '../components/BadgeForm'
import PageLoading from '../components/PageLoading'
import Badge from '../components/Badge'
 import api from '../api'

class BadgeEdit extends React.Component{
    state = {
        loading:false,
        error:null,
        form:{}
    } 
            

    handleChange = event => {
        this.setState({
            form:{
                ...this.state.form,
                [event.target.name] : event.target.value
            }
        })
    }



    handleSubmit = async event =>{
        event.preventDefault()
        this.setState({loading:true, error:null})

        try{

            this.setState({loading:false})
            await api.badges.update( this.props.match.params.badgeId, this.state.form)
            this.props.history.push('/badges')

        }catch(error){
            this.setState({loading:false, error:error})
        }
        // const api.create(this.state.form)
    }


    componentDidMount(){
        this.fetchData()
    }


     fetchData = async () => {
        this.setState({loading:true, error:null})

        try{
            const data = await api.badges.read(this.props.match.params.badgeId)
            this.setState({loading:false, form:data})
        }catch(error){
            this.setState({loading:false, error: error})
        }
    }




    render(){

        if(this.state.loading){
            return <PageLoading />
        }

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
                            email = {this.state.form.email || 'Email'}
                            jobTitle = {this.state.form.jobTitle || 'Job Title'}
                            twitter = {this.state.form.twitter || 'Twitter'}
                        />
                           
                    </div>
                    <div className="col-6">
                    <h1>Edit Attendant</h1>
                        <BadgeForm 
                            onChange ={this.handleChange}
                            valueForm = {this.state.form}
                            onSubmit={this.handleSubmit}
                            error={this.state.error}
                        />
                    </div>
                </div>
            </div>


       </div>
    }
}

export default BadgeEdit