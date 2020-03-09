/* Notas Personales

    En esta clase :
        1  Construiremos una nueva pagina en la cual veremos los detalles de nuestro
        2. Enlazaremos los badges de nuestra lista a esta nueva pagina
        3. En nuestra pagina crearemos dos botones, uno para editar el badge y otro para eliminar el badge


    Partamos por el principio. lo primero sera crear una ruta dentro de app parab nuestro nuevo componentem esto como ya saben lo hacemos en una linea
    */

   
   <Route exact path="/badges/:badgeId/"  component={BadgeDetails}/>
   
  /*
    A continuacion crearemos  un nuevo componente dentro de page con el nombre BadgeDetails
        Como en clases anteriores considero que dejarles todo el codigo del componente y explicarlo paso a paso es la forma mas sencilla de hacerlo
  
  */ 

 import React from 'react'
 import {Link} from 'react-router-dom'
 
 import ConfLogo from '../images/platziconf-logo.svg'
 import Badge from '../components/Badge'
 import api from '../api'
 import './styles/BadgeDetails.css'
 import PageLoading from '../components/PageLoading'
 import PageError from '../components/PageError'
 
 class BadgeDetails extends React.Component{
 
 
     state = {//(1)
         loading:true,
         error:null,
         data:undefined,
     }
 
     
 
    componentDidMount(){//(2)
         this.fetchData()
    }
 
    fetchData = async () => {//(3)
 
         this.setState({loading:true, error:null})
 
         try{
             const data = await api.badges.read(this.props.match.params.badgeId)
             this.setState({loading:false, data:data})

         }catch(error){
             this.setState({loading:false, error:error})
         }
 
    }
 
 
     
     render(){
 
         if(this.state.loading){//(4)
             return <PageLoading/>
         }
             
         if(this.state.error){//(5)
             return <PageError/>
         }
         const badge = this.state.data;//(6)
 
         return(
             <div className="">
                 <div className="BadgeDetails__hero">{/*(7) */}
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
                             />{/*(8) */}
                         </div>
                         <div className="col-xs-12 col-md-6">
                             <h2>Actions</h2>{/*(9) */}
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
 
 /*
    Bueno, pasemos a la explicacion

        1. Inicializamos el estado de nuestro componente, como realizaremos una llamada aprovechamos de inicializar loading y error
        
        2. Como ya es costumbre usamos el componentDidMount() para llamar nuestra funcion fetchData
        
        3. Creamos la funcionfetchData esta funcion es la encargada de realizar la llamada al api usando el badgeId que traemos desde la url con react router}
            Esta funcion la detalle a fondo en la clase numero 29 (revisa esta clase si quieres mas detalle respecto a esta funcion que no ha sufrido cambios)
        
        4. Manejamos el estado de loading (En esta clase note por primera ves lo realmente importante que es manejar este estado, ya que si el flujo de ejecucion continua
        mientras el estado es true tendremos errores de cant read property of undefided, ya que estara tratando de leer el estado que aun no existe)
    
        5. Manejamos el estado de error

        6. Guardamos el valor de this.state.data en la constante badges, hacemos esto para evitar escribir this.state.data.propiedad cada vez que llamemos una propiedas

        7. Creamos la seccion del hero, mo hay mucho que mencionar salvo que usamos el firstName y lastName para mostrarlo dentro del hero

        8. Llamamos a unestro componente badge y le pasamos los valores que guardamos en el state.data cuando se ejecuto la funcion fetchData

        9. Creamos un contenedor con botones, el primero esta llevandomos a la pagina de editar formulario con el id del badge que teneos actualmente



     Otra cosa que hicimos en esta clase fue modificar la pagina a la quer accedemos cuando hacemos click sobre un elemento en la pagina de badges. 
            esto es realmente sensillo y solo modificamos la siguiente linea de codigo en el componente BadgesList
            cambiamos de esto 
            
                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>
                        <BadgeListItem badge={badge}/>
                </Link>
            
            A esto

                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                    <BadgeListItem badge={badge}/>
                </Link>

   
 */
 
   
