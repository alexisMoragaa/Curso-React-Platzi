/* Notas personales
    Que es una pagina en react
    las paginas en react no son mas que componentes, el consepto de pagina como tal solo es una separacion virtual que usaremos
    para referirnos a los componentes que dentro de si mismos tienen mas componentes, los cuales en conjunto forman lo que conocemos como paginas

    para esto lo primero que aremos es crear una nueva carpeta dentro de nuestro directorio src llamada pages
        dentro de nuestra carpeta crearemos un archivo llamado BadgeNew
*/

// Inicio codigo de la pagina BadgeNew
import React from  'react' //importamos react

import './styles/BadgeNew.css'//importamos los estilos de la pagina

import NavBar from '../components/Navbar'//importamos el componente Navbar
import Badge from '../components/Badge'//importamos el componente Badge
import Header from '../images/badge-header.svg'//importamos una imagen


class BadgeNew extends React.Component{
    render(){
       return <div className="contenedor">
        
        {/*el uso de estas llaves es para crear los comentarios dentro del codigo ya que mediante jsx lo que escribimos dentro edl render es considerado como html*/}

           <NavBar/>  {/* Llamamos nuestro componente Navbar*/}

           <div className="BadgeNew__hero"> {/*  Creamos la seccion intermedia, justo debajo edl header*/}
               <img src={Header} alt="header" className="img-fluid"/>
           </div>

            <div className="container"> {/* Creamos un contenedor para la seccion que incluye nuestro badge y formulario para crear el mismo*/}
                <div className="row">
                    <div className="col">
                        <Badge 
                            firstName = "Juan Carlos"
                            lastName = "Bodoque"
                            avatarUrl = "http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"
                            jobTitle = "Desarrollador Web"
                            hashtag = "Platzi"
                            instagram = "amoragaa"
                        /> {/* Llamamos a nuestro componente y le pasamos sus props */}
                    </div>
                    <div className="col"> {/* Este espacion queda disponible hasta la proxima clase */}
                        otra cosa
                    </div>
                </div>
            </div>


       </div>
    }
}

export default BadgeNew
// Fin codigo de la pagina BadgeNew


/*
    Como comentabamos al principio una pagina es un componente que a su vez contiene otros componentes
    como vimos en esta clase nuestro componente actualmente se encuentra englobando 2 componentes adicionales, a la vez que crea su propia estructura html
    
    Codigo del componente Navbar -> este componente esta ubicado en la carpeta components con el nombre correspondienre a su clase
*/

import React from 'react'
import logo from '../images/logo.svg'
import './styles/Navbar.css'

class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <a href="/" className="Navbar__brand">
                        <img src={logo} alt="Logo de la conferencia" className="Navbar__brand-logo"/>
                        <span className="font-weight-light">Platzi</span>
                        <span className="font-weight-bold">Conf</span>
                    </a>
                </div>
            </div>


        )
    }
}


export default Navbar


/* Notas al pie del video

    Nuestra primera página
    Las páginas en React son componentes y conseguir distinguirlas nos servirá para saber que es un componente que adentro lleva otros componentes.

    Al escribir los props no importa el orden en el que lo hagas, únicamente importa el nombre.
*/