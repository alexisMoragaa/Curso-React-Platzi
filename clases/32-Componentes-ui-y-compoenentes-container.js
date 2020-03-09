/* Notas Personales

    En esta clase veremos un estilo de buenas practicas en el cual separamos nuestros componentes para que estos solo tengas una responsabilidad

    hasta ahora hemos trabajado con componentes que sin darnos cuenta tienen una doble responsabilidad
        Por un lado estos componetes obtienen la data
        y por el otro nos retorna la ui del componente

     Lo que aremos en esta clase sera separar estos componentes creando dos componentes independienrtes
        uno encargado de obtener la data
        y otro encargado de mostrar la informacion al usuario
        
    Para esto estaremos trabajando con el componenre que creamos en la clase pasada BadgeDetails


Lo primero que aremos para separar la logica de nuestro componente de la ui sera cambiar el nombre actual de nuestro componente
    pasara de llamarse BadgeDetails a BadgeDetailsContainer esto se debe basicamente a una convencion de nombres en el cual
    el archivo llamado container almacena la logica, y el archivo con el nombre que no incluye container encapsula la ui
    
 Una vez cambiado el nombre nuestra aplicacion quedara rota, para repararala tendremos que cambiar el nombre de la clase, por el nombre actual del componente
    (No olvidemos cambiar el nombre en el export al final del archivo)
    
 Ahora iremos al componente app y cambiaremos el import que teniamos de nuestro componente ajustando el from al nombre actual del archivo (BadgeDetailsContainer)
 
 Con estos sencillos cambios nuestra app ya esta funcionando nuevamente.
    Pero aun no hemos separado nada.
 
 Para comenzar a separar la ui crearemos un nuevo componente llamado BasgeDetails (si, es el nombre que anteriormente tenia nuestro componete)
    dentro de nuestro archivo ui copieramos todo el codigo que tengamos dentro del metodo render del componente BadgeDetailsContainer
    Junto con esto tambien nos llevaremos los imports  de link, estilos, imagenes y del componente badge


  Dentro de nuestro componente BasgeDetails solo nos queda una ultima cosa
        en esta seccion esta toda la informacion del badge, que anteriormente estabamos obteniendo de la constante badgem, que habiamos igualado a this.state.data
        ahora estos datos los pasaremos desde el compoenete BadgeDetailsContainer como una propiedad
        asi que dentro del componente BadgeDetails creamos una constante llamada badge de la siguiente forma

        comst badge = this.porps.badge

        Con esto ya nuevamente tenemos el valor del badge dentro de una constante llamada badge, con lo cual no necesitamos modificar el codigo de nada mas en este componente


   Por ultimo dentro del metodo render de nuestro componente BadgeDetailsContainer ya no tenemos nada
        Para solucionar esto importaremos el compnente que acabamos de crear con la ui
        y lo añadiremos dentro del render. 
        este metodo recibe como parametro el badge que tiene como valor this.state.data
    

Para aclarar un poco mas todo esto les dejo el codigo de los componentes para que los vean y comparen con la clase anterior


*/

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

/////////////////////////////////////////////////////////////////////////////////////////////////



import React from "react";
import {Link} from 'react-router-dom'

import ConfLogo from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import './styles/BadgeDetails.css'

function BadgeDetails(props) {
  const badge = props.badge;
  return (
    <div className="">
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <img src={ConfLogo} alt="Logo de la conferencia" />
            </div>
            <div className="col-xs-12 col-md-6  BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              twitter={badge.twitter}
              jobTitel={badge.jobTitel}
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <h2>Actions</h2>
            <div className="">
              <div className="">
                <Link
                  className="btn btn-primary mb-3 text-decoration-none"
                  to={`/badges/${badge.id}/edit`}
                >
                  Editar
                </Link>
              </div>
            </div>
            <div className="">
              <button className="btn btn-danger">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
