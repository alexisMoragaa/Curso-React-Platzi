import React from 'react'


import api from '../api'

import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import BadgeDetails from './BadgeDetails'

class BadgeDetailsContaiener extends React.Component{


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
       

        return(
            <BadgeDetails badge={this.state.data} />
        )
    }   
}



export default BadgeDetailsContaiener