/* Notas Personales
    En esta Clase Retomaremos la pagina de BadgeNew y terminaremos el formulario para crear un nuevo badge

    Lo primero que aremos seran unas pequeñas correcciones de diseño en la seccion hero, un cambio de imagen y centrado de la misma (nada funcional)

    Para continuar explicando la clase recordemos la estructura de nuestra pagina BadgeNew.
        La cual al lado izquierdo tiene el componente Badge y al lado derecho tiebe el componente BadgeForm


    Lo que aremos a continuacion sera pasarle parametros  opcionales a nuestro componente Badge. estos parametros estaran siempre que el state este vacio
        Para lograr esto usamos el operador condicional || en javascript de la siguiente forma    
*/

    <Badge 
        firstName = {this.state.form.firstName || 'First Name'}
        lastName = {this.state.form.lastName || 'Last Name'}
        email = {this.state.form.email || 'email'}
        jobTitle = {this.state.form.jobTitle || 'Job Title'}
        twitter = {this.state.form.twitter || 'Twitter'}
    />

/*
    Como ven lo que estamoa haciendo es decirle que si el primer argumento es un valor true, es decir que contiene algo o que no es null o false añada ese valor
        pero de lo contrario que añada el string que pasamos
       
    Si eres observador notaras que no estamos pasando el props avatarUrl que usábamos en clases anteriores para renderear la imagen
        Esto es por que usaremos Gravatar para renderear la imagen asociada a tu email

    Gravatar usa un hash en md5 de tu email como parametro para regresar tu avatar en funcion de tu email
        Pero como hacemos esto nosotros. 
        Pues muy sencillo. lo primero que necesitamos es md5 para esto instalamos las dependencias de md5 desde npm de manera muy sencilla usando el comando  
            npm install md5
        Con las dependencias instaladas crearemos un componente llamado Gravatar, este componente recivira como prop el email y nos retornara una etiquera img
            con el avatar correspondiente            
*/

import React from 'react'
import md5 from 'md5'

function Gravatar(props){
    const email = props.email; //obtenemos el email desde las props
    const hash = md5(email)//obtenemos el hash md5 correspondiente al email que pasamos como parametro
    
    return (
        <div className="">
            <img className={props.className} src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}  alt=""/>
            {/* Insertamos el hash de nuestro corre dentro de la url de gravatar, des esta forma nos retorna la imagen correspondiente a nuestr email */}
        </div>

     
    )
}

export default Gravatar

/*
    Como ven el codigo de nuestro componente es muy sencillo y se puede describir basicamente en 3 pasos
        1. Recive el email como props
        2. Obtiene el hash md5 del props usando la funcion md5 incluida en las dependencias que instalamos anteriormente
        3. Retorna una imagen usando como src la pagina de gravatar, en la cual hemos inscrustado el hash de nuestro email


    Ya que tenemos esto debemos ir a el componente Basge y remplazar la imagen por nuestro componente
        Como hacemos esto, pues muy sencillo, importamos nuestro componente, quitamos la imagen y usamso  nuestro nuevo componente y claro, no olvidar pasarle el email como prop    
*/


import React from 'react'
import confLogo from '../images/badge-header.svg'
import './styles/Badge.css'
import Gravatar from './Gravatar'
// import ReactDom from 'react-dom'

class Badge extends React.Component{

    render(){
        return (
            <div className="Badge">

                <div className="Badge__header">
                    <img  src={confLogo} alt="Logo de la conferencia"/>
                </div>
                <div className="Badge__section-name">
                    <Gravatar className="Badge__avatar" email={this.props.email} alt="avatar"/>
                    <h1>{this.props.firstName} <br/>{this.props.lastName}</h1>
                </div>

                <div className="Badge__section-info ">
                    <h3>{this.props.jobTitle}</h3>
                    <div>{this.props.email}</div>  
                </div>
                <div className="Badge__footer">
                #{this.props.twitter}
                </div>

            </div>
        )
    }

}

export default Badge


/*
    Asi es como finalmente esta el codigo de nuetro componente Badge, como ven solo importamos el componente y lo remplazamos en lugar de la imagen

    Ya con todo esto solo nos queda  ejecutar la llamada Post a nuestra libreria y guardar el nuevo badge 
        (El como funciona el api por detras para crear el registro dentro del archivo db actualmente para mi e sun misterio. pero tratare de esplicarles de la mejor forma posible
            la parte de la llamada que si la entiedo)

    Lo primero que aremos, al igual que cuando manejamos el evento onChange sera manejar nuestro evento onSubmit
    Pare esto y siguiendo la convencion que establecimos al principio de este curso crearemos una funcion llamda handleSubmit dentro de nuestra pagina BadgeNew
    Igual que con handleChange esta funcion la pasaremos como prop a nuestro componente BadgeForm

*/


handleSubmit = async e =>{// 1
    e.preventDefault()//2
    this.setState({loading:true, error:null})// 3

    try{// 4.1
        await api.badges.create(this.state.form)// 5
        this.setState({loading:false})// 6
    }catch(error){// 4.2
        this.setState({loading:false, error:error})
    }
    // const api.create(this.state.form)
}

/*
    Al igual que con otras funciones pasare a detallar paso a paso que hace esta funcion
        1. En primer lugar esta es una funcion asincrona, por lo cual la declaramos como async
        2. Detenemos el evento por edfault del submit (El evento seria enviarnos a otra pagina con los datos del formulario)
        3. Cuando se ejecute esta funcion realizaremos una llamada al api, por lo cual al igual que en otras llamadas estaremos esperando una respuesta,
             asi que inicializamos loading como true y error como null, ya que en este punto aun no tenemos errores
        4.1 Como de costumbre en cualquier llamada al api inicializamos un try catch
        4.2 Si nuestra llamada arroja un error almacenamos este dentro del state, y establecemos loading como false, ya que en este punto ya tenemos respuesta del api
            (si, la respuesta es el error xD)
        5. Realizamos la llamda al api pasando como parametro todos los datos del formularrio, los cuales tenemos almacenados en el state
        6. Si nuestra llamada resulta bien establecemos el loading como false, ya que en este punto tenemos respuesta


    Algo que olvide mencionar es que debemos inicializar en el state los estados de error y loading
        en este caso inicializamos loading como false, ya que no ejecutaremos una llamada apenas cargue la pagina


*/

state = {
    loading:false,
    error:null,
    form:{}
}



/*
    Con todo esto ya casi estamos listos con esta peticion POST. pero aun no quedan algunospequeños detalles

     A continuacionn necesitamos pasar nuestra funcion handleSubmit al componente BadgeForm
 
*/

<BadgeForm 
    onChange ={this.handleChange}
    valueForm = {this.state.form}
    onSubmit={this.handleSubmit}
/>


/*
    Como ven esta parte es muy sencilla, solo e sun props mas que enviamos a nuestro componente

    Finalmente solo nos queda usar este props dentro del componete, y es tan sencillo como lo que hicimos anteriormente

*/


<form onSubmit={this.props.onSubmit}></form>


/* 
    Dentro de form establecemos la funcion que pasamos como props desde el componente padre
    
    Y listo, con esto ya hemos realizado la llamada por post a nuestra api, y hemos creado un nuevo registro dentro de nuestro archivo db.json

    En la proxima clase veremos como mejorar la experiencia de usuario al realizar esta llamada
        Ya que actualmemnte no estamos entregando informacion si la llamda funciono, o si nos retorna error


  A continuacion dejare el codigo completo de los archivos involucrados en esta clase      
*/

/* Inicio codigo BasgeNew*/ 

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
/* Fin Codigo BadgeNew */



/* Inicio codigo Badge */
import React from 'react'
import confLogo from '../images/badge-header.svg'
import './styles/Badge.css'
import Gravatar from './Gravatar'
// import ReactDom from 'react-dom'

class Badge extends React.Component{

    render(){
        return (
            <div className="Badge">

                <div className="Badge__header">
                    <img  src={confLogo} alt="Logo de la conferencia"/>
                </div>
                <div className="Badge__section-name">
                    <Gravatar className="Badge__avatar" email={this.props.email} alt="avatar"/>
                    <h1>{this.props.firstName} <br/>{this.props.lastName}</h1>
                </div>

                <div className="Badge__section-info ">
                    <h3>{this.props.jobTitle}</h3>
                    <div>{this.props.email}</div>  
                </div>
                <div className="Badge__footer">
                #{this.props.twitter}
                </div>

            </div>
            )
    }

}

export default Badge
/* Fin codigo Badge */


/* Inicio codigo BadgeForm */
import React from "react"; //importamos react

class BadgeForm extends React.Component {
  // creamos la clase de nuestro componente

  state = {}; //inicializamos el state

  handleClick = e => {
    //creamos la funcion hamdleClick para manejar el evento onclick del boton save
    console.log("btn whas clicked");
  };

  render() {
    //creamos el metodo render
    return (
      <React.Fragment>
        {/*Establecemos un contenedor para nuestro componente*/}
        <h1>New Attendant</h1>

        <form onSubmit={this.props.onSubmit}>
          {/*Creamos un formulario y añadimos el evento on submit para capturar el envio del formulario*/}
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="firstName"
              className="form-control"
              value={this.props.valueForm.firstName}
            />
            {/*Creamos nuestro input con un evento onchange el cual llamara una funcion llamada handleChange*/}
          </div>
          <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="lastName"
              className="form-control"
              value={this.props.valueForm.lastName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="email"
              className="form-control"
              value={this.props.valueForm.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Job Title</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="jobTitle"
              className="form-control"
              value={this.props.valueForm.jobTitle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Twitter</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="twitter"
              className="form-control"
              value={this.props.valueForm.twitter}
            />
          </div>
          <button className="btn btn-primary" onClick={this.handleClick}>
            Save
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default BadgeForm;

/* Fin codigo BadgeForm */




/*inicio codigo Gravatar */
import React from 'react'
import md5 from 'md5'

function Gravatar(props){
    const email = props.email;
    const hash = md5(email)
    
    return (
        <div className="">
            <img className={props.className} src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}  alt=""/>
        </div>

     
)
} 
export default Gravatar
/*Fin codigo Gravatar */






/* Notas al pie del video
    MD5 es una pequeña librería a la cual se le da un texto y ella regresa un hash.

    Podremos hacer pruebas para cifrar nuestros textos a md5 en el siguiente sitio MD5 Online

    Hola Platzi = d3bfb9302fb1007c0f996b41cba2818c
*/