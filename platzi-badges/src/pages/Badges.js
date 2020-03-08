import React from 'react'

import ConfLogo from '../images/badge-header.svg'
import BadgeList from '../components/BadgeList'
import {Link} from 'react-router-dom'
import './styles/Badges.css'
import api from '../api'
import Loader from '../components/Loader'
import PageError from '../components/PageError'
import PageLoading from '../components/PageLoading'

class Badges extends React.Component{

    constructor(props){//creamos el constructor
        super(props)//inicializamos la super clase
       
        this.state = {
            loading:true,
            error:null,
            data:[]//inciializamos el state vacio
        }
    }


    componentDidMount(){
        this.fetchData()
    }

     fetchData = async () => {

        this.setState({loading:true, error: null})

        try{
            const data = await api.badges.list()
            this.setState({loading:false, data: data})
        }catch(error){
            this.setState({loading:false, error:error})
        }
     }




    render(){

        if(this.state.error){
            return(
                <PageError error={this.state.error} />
            )
        }

        if(this.state.loading){
            return <PageLoading/>
        }
        
        return (

            <React.Fragment>

                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img src={ConfLogo} alt="Conf Logo" className="Badges_conf-logo"/>
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                  
                    <div className="Badges__buttons">
                        <Link to="/Badges/new" className="btn btn-primary">New Badge</Link>
                    </div>

                
   
                    <div className="Badges__list">

                        {this.state.data.length > 0 && (
                                <BadgeList badge={this.state.data} />
                        )}   

                        {this.state.data.length === 0 && !this.state.loading && (
                                <h1>Aun no hay Badges, prueba creando uno</h1>
                        )}

                    </div>

                </div>
            </React.Fragment>

        )
    }

}


export default Badges
