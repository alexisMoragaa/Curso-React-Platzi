/* Notas Personales
    
    En esta Clase comenzaremos con la creacion de nuestro formulario y veremos algunos eventos dentro del mismo como: 
        click -> evento que se desencadena al hacer click sobre el elemento
        onChange -> evento que se desencadena al tener un cambio en el valor del elemento
        onSubmit -> evento que se desencadena al ejecutar el submit de un formulario

    Para esto crearemos un nuevo componente llamado BadgeForm, el cual contendra nuestro formulario
*/
//Inicio codigo del componente BadgeForm
import React from 'react' //importamos react

class BadgeForm extends React.Component{// creamos la clase de nuestro componente

    handleChange = e =>{//creamos la funcion handleChange para manejar los cambios en los valores de los inputs
            let obj ={name: e.target.name, value: e.target.value}
            console.log(obj)
    }

    handleClick = e => { //creamos la funcion hamdleClick para manejar el evento onclick del boton save
        console.log("btn whas clicked")
    }

    handleSubmit = e => { // creamos la funcion handleSubmit para capturar el fomulario al momento de hacerle submit
        e.preventDefault()
        console.log("form was submited")
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
                            />{/*Creamos nuestro input con un evento onchange el cual llamara una funcion llamada handleChange*/}
                    </div>
                    <button className="btn btn-primary" onClick={this.handleClick}>Save</button>
                </form>
            </div>
        )   
    }
}

export default BadgeForm
// Fin del codido del componente BasgeForm

/*
    Como pueden ver el el codigo, si nuestro componente requiere de funciones javascript estas las poedmos crear dentro de la clase de nuestro componente, pero fuera de nuestro metodo render

    Luego de importar los componentes dentro de nuestra pagina asi es como luce actualmente el codigo de nuestra pagina BadgeNew
*/

//Inico codigo pagina BadgeNew
import React from  'react'

import './styles/BadgeNew.css'

import NavBar from '../components/Navbar'
import Header from '../images/badge-header.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
//importamos los componentes y los estilos 

class BadgeNew extends React.Component{
    render(){
       return <div className="contenedor">

           <NavBar/>

           <div className="BadgeNew__hero">
               <img src={Header} alt="header" className="img-fluid"/>
           </div>

            <div className="container">
                <div className="row">

                    <div className="col-6">
                        <Badge 
                            firstName = "Juan Carlos"
                            lastName = "Bodoque"
                            avatarUrl = "http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"
                            jobTitle = "Desarrollador Web"
                            hashtag = "Platzi"
                            instagram = "amoragaa"
                        />
                    </div>

                    <div className="col-6">
                        <BadgeForm/>
                    </div>

                </div>
            </div>


       </div>
    }
}

export default BadgeNew
//Fin codgio pagina BadgeNew

/*
    Como pueden ver seguimos manteniendo hardcodeado los valores que se muestran en nuestro badge, 
    con los eventos aprendidos en esta clase, en la proxima veremos como pasar los valores que estamos capturando en nuestro formulario
    a nuestro badge
*/



/* Notas al pie del video

    Enlazando eventos
    React dispone de eventos. Cada vez que se recibe información en un input se obtiene un evento onChange y se maneja con un método de la clase this.handleChange
    Los elementos button también tienen un evento que es onClick.
    Cuando hay un botón dentro de un formulario, este automáticamente será de tipo submit. Si no queremos que pase así hay dos maneras de evitarlo: especificando que su valor es de tipo button o manejándolo desde el formulario cuando ocurre el evento onSubmit.

*/

