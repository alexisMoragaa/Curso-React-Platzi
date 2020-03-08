/* Notas Personales

    Clase n° 29 Actualizando datos con put

    Actualizar los datos en esencia es bastante similar a lo que ya hicimos cuando creamos un elemento
        Para esta clase crearemos una copia de la pagina BadgeNew y la llamaremos BadgeEdit

    Pero primero Ya que crearemos una nueva pagina necesitamos crear una ruta en nuestro componenta app.js, 
    el cual actualmente se encarga de manejar las rutas de nuestra aplicacion


*/
 <Route exact path="/badges/:badgeId/edit"  component={BadgeEdit}/>

 /*
    Si eres observador notaras que en medio de la ruta tenemos :badgeId este parametro lo usaremos mas adelante para identificar el badge que deseamos editar

     No debemos olvidar importar el componente BadgeEdit

     A continuacion dentro de nuestra nueva pagina BadgeEdit (que como ya les dije es una copia de BadgeNew) suceden varias cosas
        Creo que la mejor forma de explicarlas es dejar el codigo de la pagina completa he ir comentado paso a paso cada una de sus partes

 */

import React from  'react'

import './styles/BadgeEdit.css'

import Header from '../images/platziconf-logo.svg'
import BadgeForm from '../components/BadgeForm'
import PageLoading from '../components/PageLoading'
import Badge from '../components/Badge'
 import api from '../api'

class BadgeEdit extends React.Component{//(1)
    state = {//(2)
        loading:false,
        error:null,
        form:{}
    } 
            
    
    componentDidMount(){//(3)
        this.fetchData()
    }
    
    
    fetchData = async () => {//(4)
        this.setState({loading:true, error:null})
        
        try{
            const data = await api.badges.read(this.props.match.params.badgeId)
            this.setState({loading:false, form:data})
        }catch(error){
            this.setState({loading:false, error: error})
        }
    }
    
    
    handleSubmit = async event =>{//(5)
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

    handleChange = event => {//(6)
        this.setState({
            form:{
                ...this.state.form,
                [event.target.name] : event.target.value
            }
        })
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

export default BadgeEdit//(1)


/*
    1. Lo primero es lo primero. ya que es una copia debemos renormar el nombre de la clase

    2. al igual que con las llamadas anteriores a nuestra api establecemos el loading y el error en el state

    3. Dentro del componentDidMount realizamos una llamada  a la funcion fetchData() // aca es donde se pone interesante

    4. Creamos nuestra funcion fetchData, es muy similar a la creada anteriormente, pero con un pequeño cambio
        En lugar de llamar todos los badges que tenemos creados (como hicimos dentro de la pagina de badges)  usando la funcion list,
        usamos una funcion de nuestra api llamada read, la cual recibe como parametro el id del badge que queremos buscar
        este id, como les comentaba al inicio de la clase lo obtendremos de la url que creamos en reactRouter
        para obtener este id usamos la propiedad match que nos entrega react router y buscamos los params detro de match (dentro de params se encontraran todos los parametros que definamos en la url)

        una vez que tenemos la informacion del badge que queremos editar añadimos estos datos dentro del state, espeficicamente dentro de form


    En este punto so accedieramos a la pagina /badges/id_badge/edit usando un id valido ya podriamos ver como dentro de nuestro badge y formBadge
        ya tenems la informacion del badge que deseamos solicitar. 
        (mas adelante modificaremos el componente badgeList para crear un enlace a BadgeEdit que incluta el badgeid)
        
        
    5. Dentro de nuestro handleSubmit realmente solo tenemos un cambio respecto a su respectiva copia en BadgeNew
        Cambiamos el metodo que llamamos al api de create a update. A su vez update recibe dos parametros
        el primer parametro es el id del badge que se desea editar, como ya vimos este lo podemos obtener de el prop match.params
        el segundo parametro que recibe, este lo tenemos en state.form
        Con esto ya estamos terminamos en esta pagina. 
        
        
     Por ultimo nos queda crear un enlace desde BadgesList a nuestra pagina de BadgeEdit
     Para esto es muy sencillo y como ya es la tonica en esta clase, les dejo el codigo y lo comentamos paso a paso
     
     
*/

import React from "react";
import "./styles/BadgeList.css";
import Gravatar from "./Gravatar";
import BadgeListItem from "./BadgeListItem";
import {Link} from 'react-router-dom'//(1)

class BadgeList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badge.map(badge => {
          return (
            <li key={ badge.id}>
                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>{/*(2) */}
                    <BadgeListItem badge={badge}/>
                </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgeList;


/*
    Los cambios en este comeponente realmente son muy pocos
        
        1. Incluimos Link desde react-router-dom
        2. Encapsulamos dentro de un link el componente BadgeListItem (este es el componete responsable de renderear las tarjetas)
            En esta parte de puede ver que pasamos el badgeId que mas adelantre usaremos para identificarlo


    Esto es todo por esta clase, con estos cambios ya pueden realizar actualizaciones de nuetro Badge
*/


/* Notas al pie del video
    Sin notas al pide del video
*/