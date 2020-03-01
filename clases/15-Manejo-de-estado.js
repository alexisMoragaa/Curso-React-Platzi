/* Notas personales
    Que es el estado en un componente
        El estado en un componente es una forma de guardar valores de forma local dentro de nuestro componente, esto es util cuando necesitamos almacenar valores
        como resultado ed un formulario, la llamada a una api o simplemente almacenar valores


    En esta clase continuaremos con la construccion de nuestro componente, completaremos los inputs faltantes y añadiremos el estado a nuestro componente
    
    Una vez completados los inputs de nuestro formulario lo primero que devemos hacer para agregar state a nuestro componente es inicializarlo
    para esto en la primera linea de nuestro componente añadiremos   

*/
state =  {}

/*
    como vemos el estado de nuestro componente es un objeto, y vasta con inicializarlo vacio. 

    a continuacion modificaremos el codigo de nuestra funcion handleChange para en lugar de mostrar el valor de un input este lo guardemos en el estado
*/

handleChange = e =>{//Este es el codigo anterior de nuestra funcion handleChange
    let obj ={name: e.target.name, value: e.target.value}
    console.log(obj)
}

handleChange = e =>{
    /*
    this.setState({
                    firstName: e.target.value
                })

     este codigo tiene un pequeño problema, estamos hardcodeando el atributo que guardamos en el state, en este caso estamos diciendo que todos los valores que llegen a la funcion
       handleChange seran almacenados dentro de firtName
       Como sulucionamos esto, bueno muy facil, usamos [] para dentro de estos usar otra propiedad de nuestro evento como llave          
    */ 
   
    this.setState({
        [e.target.name]: e.target.value
    })

    /* De esta forma estamos diciendo que la llave de nuestro valor es igual al nombre de nuestro imput, con lo cual ya cada valor se guarda donde corresponde*/
}


/*
    Hasta aca todo bien, pero tenemos un pequeño problema. 
        Aunque no lo notemos estamos guardando el valor de nuestros inputs en dos partes, dentro de nuestro state, y en el imput.
        Esto no es recomandable, ya que se hace poco escalable
        Como solucionamos esto, tambien muy facil. Hasta ahora nuestros inputs lucen asi:
*/
        <input
            onChange={this.handleChange}  
            type="text" 
            name="lasttName" 
            className="form-control"
        />

/*
    Estos son input no controlados, para solucionar esto y evitar que nuestros valores se almacenen en ambos lugares nos basta con agregar una propiedad mas
    la propiedad value, y esta estara leyendo de nuestro state
*/

        <input
            onChange={this.handleChange}  
            type="text" 
            name="firstName" 
            className="form-control"
            value = {this.state.fisrtName}
        />


/*
    Con esta simple modificacion ya solucionamos este problema. 

    Como leer y escribir en state
        Esto realmente es muy sencillo, y por si no lo notaste esta entre los pequeños snipets de codigo
        para leer de state basta con usar this.state.nombreDeLaPropiedad
        para escribir en state usamos this.setState.nombreDeLaPropiedad : valor_que_asignaremos
*/



/* Finalmente les dejo el codigo actual de nuestro componente BadgeForm */

//Inicio codigo componente BadgeForm

import React from 'react' //importamos react

class BadgeForm extends React.Component{// creamos la clase de nuestro componente

    state = {}//inicializamos el state
  
    handleChange = e =>{//creamos la funcion handleChange para manejar los cambios en los valores de los inputs
           this.setState({
               [e.target.name] : e.target.value
           })
           console.log(this.state)
    }

    handleClick = e => { //creamos la funcion hamdleClick para manejar el evento onclick del boton save
        console.log("btn whas clicked")
    }

    handleSubmit = e => { // creamos la funcion handleSubmit para capturar el fomulario al momento de hacerle submit
        e.preventDefault()
        console.log("form was submited")
        console.log(this.state)
    }

    render(){//creamos el metodo render
        return (
            <div className="">{/*Establecemos un contenedor para nuestro componente*/}
                <h1>New Attendant</h1>
                
                <form onSubmit={this.handleSubmit}> {/*Creamos un formulario y añadimos el evento on submit para capturar el envio del formulario*/}
                    <div className="form-group">
                        <label htmlFor="">First Name</label>
                        <input
                            onChange={this.handleChange}  
                            type="text" 
                            name="firstName" 
                            className="form-control"
                            value = {this.state.firstName}
                            />{/*Creamos nuestro input con un evento onchange el cual llamara una funcion llamada handleChange*/}
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Last Name</label>
                        <input
                            onChange={this.handleChange}  
                            type="text" 
                            name="lastName" 
                            className="form-control"
                            value = {this.state.lastName}
                            />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Job Title</label>
                        <input
                            onChange={this.handleChange}  
                            type="text" 
                            name="jobTitle" 
                            className="form-control"
                            value = {this.state.jobTitle}
                            />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Instagram</label>
                        <input
                            onChange={this.handleChange}  
                            type="text" 
                            name="instagram" 
                            className="form-control"
                            value = {this.state.instagram}
                            />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Hastag</label>
                        <input
                            onChange={this.handleChange}  
                            type="text" 
                            name="hashtag" 
                            className="form-control"
                            value = {this.state.hashtag}
                            />
                    </div>
                    <button className="btn btn-primary" onClick={this.handleClick}>Save</button>
                </form>
            </div>
        )   
    }
}

export default BadgeForm

//Fin codigo componente BadgeForm


/* Notas al pie del video

    Hasta esta clase todos los componentes han obtenido su información a través de props que vienen desde afuera (otros componentes) pero hay otra manera en la que los componentes pueden producir su propia información y guardarla para ser consumida o pasada a otros componentes a través de sus props. La clave está en que la información del state a otros componentes pasará en una sola dirección y podrá ser consumida pero no modificada.

    Para guardar la información en el estado se usa una función de la clase component llamada setState a la cual se le debe pasar un objeto con la información que se quiere guardar.
    Aunque no se ve, la información está siendo guardada en dos sitios. Cada input guarda su propio valor y al tiempo la está guardando en setState, lo cual no es ideal. Para solucionarlo hay que modificar los inputs de un estado de no controlados a controlados.
*/