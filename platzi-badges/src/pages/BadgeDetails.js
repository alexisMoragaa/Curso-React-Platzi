import React from 'react'
import {Link} from 'react-router-dom'

import ConfLogo from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import api from '../api'
import './styles/BadgeDetails.css'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

class BadgeDetails extends React.Component{


    state = {
        loading:true,
        error:null,
        data:undefined,
    }

    

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () => {

        this.setState({loading:true, error:null})

        try{
            const data = await api.badges.read(this.props.match.params.badgeId)
            this.setState({loading:false, data:data})
            // console.log(this.state.data.firstName)
        }catch(error){
            this.setState({loading:false, error:error})
        }


    }

    
    
    
    render(){

        if(this.state.loading){
            return <PageLoading/>
            
        }

        if(this.state.error){
            return <PageError/>
        }
        const badge = this.state.data;

        return(
            <div className="">
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">

                            <div className="col-xs-12 col-md-6">
                                <img src={ConfLogo} alt="Logo de la conferencia"/>
                            </div>
                            <div className="col-xs-12 col-md-6  BadgeDetails__hero-attendant-name"><h1>{badge.firstName} {badge.lastName}</h1></div>
              
                        </div>
                    </div>
                </div>



                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <Badge 
                                firstName ={badge.firstName}
                                lastName = {badge.lastName}
                                email ={badge.email}
                                twitter={badge.twitter}
                                jobTitel={badge.jobTitel}
                            />
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <h2>Actions</h2>
                            <div className="">
                                <div className=""><Link className="btn btn-primary mb-3 text-decoration-none" to={`/badges/${badge.id}/edit`}>Editar</Link></div>
                            </div>
                            <div className="">
                                <button className="btn btn-danger">Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>

                </div>
        )
    }   
}



export default BadgeDetails