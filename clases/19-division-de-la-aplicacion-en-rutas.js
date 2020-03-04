/* Notas Personales

    Lo primero es lo primero. para esta clase necesitaremos instalar react router dom
        para esto es muy sencillo, usamos npm dentro de nuestro proyecto y ejecutamos el comando 
            npm install react-router-dom@4.3.1
-----------------------------------------------------------------------------------------------------------------


    Por si no lo notaste hasta ahora hemos creado dos paginas, y estas las hemos estado intercambiando dentro del metodo render
    ubicado en nuestro index.js para ver cual de estas dos sera rendereada

    en esta clase solucionaremos este problema usando react router y creando rutas para poder desplazarnos dentro de nuestra aplicacion usando las mismas

    Lo primero que haremos sera crear un nuevo componente dentro de nuestra carpeta components, a este componente le llamaremos app, y este
    sera el encargado de gestionar nuestras rutas usando rect router

    para este componente exploraremos una variacion al crear componentes como funciones, estos pueden ser creados siempre y cuando no necesitemos mas funciones 
    dentro de nuestro componente, ni que este requiera de estado. 
    para crear un componente como funcion es bastante sensillo

*/

    import react from 'react'
    function App (){
        return (
            <div>

            </div>
        )
    }
    export default App

 /*
    De esta forma es que podemos crear componentes como si fueran funciones. 

    Una vez creado nuestro componete lo siguiente sera importar BrowserRouter, Router y Switch para crear nuestras rutas
 */   
import {BrowserRouter, Switch, Route, Router} from 'react-router-dom'

/*
    Con esto ya importado dentro de nuestro componente comenzamoa a crear las rutas

        Lo primero es el componente BrowserRouter, ya que como hablamos en la clase anterior cualquiera de los componentes que nos provee 
        react router no funcionan fuera de BrowserRouter
*/


import react from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
function App (){
    return (
        <BrowserRouter>
          
        </BrowserRouter>
    )
}
export default App

/*
    Dentro de BrouserRouter crearemos las rutas, para esto usamos el componente Router
        Este componente necesita dos props, el path que es la direccion a donde iremos, y el component que vendria siendo el componente
        que renderearemos, en este caso las paginas ya creadas. 
        como traeremos las paginas creadas en las clases anteriores necesitaremos importarlas

        * Nota importante :
            si solo usas path en el componente Router este no sera del todo exacto al comparar y entregar la ruta que deseas,
            ya que solo compara la primera parte de la misma y entregara el primer valor que coincida
            con lo cual en este caso a pesar de que trate de acceder a la ruta /badges/new siempre estaria llegando a la ruta /badges
            ya que como mencionaba coinciden en su primera parte y esto le basta a react
            *Para solucionar esto usamos exact path, con lo cual reac trouter valida la ruta completa 
*/

import react from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import BadgeNew from '../pages/BadgeNew'
import Badges from '../pages/Badges';
function App (){
    return (
        <BrowserRouter>
            <Route exact path="/badges" component={Badges} />
            <Route exact path="/badges/new" component={BadgeNew} />
        </BrowserRouter>
    )
}
export default App

/*
    Esto no funciona. 
        Si abrimos la consola veremos un error, el cual nos indica que el componente BrowserRouter solo puede temer un hijo
        Es aca en donde entra en juego el componente Switch, el cual junto con path nos permitiran seleccionar la ruta a la que iremos
*/


import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import BadgeNew from '../pages/BadgeNew'
import Badges from '../pages/Badges';


function App(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/badges" component={Badges} />
                <Route exact path="/badges/new" component={BadgeNew} />
            </Switch>
        </BrowserRouter>
    )
}

export default App

/*
    De esta forma es como queda nuestro componente App, el cual esta encragado de gestionar las rutas dentro de nuestra aplicacion. 

    pero para que todo esto funciona aun nos queda llamar a nuestro componente desde el index.js

    para esto es tan simple como importarlo y remplazarlo por el componente que estemos rendereando 


    Finalmente nos queda el componente Link 
        Este componente es sumamente facil de usar y basicamente remplaza nuestras etiquedas a
        para usarlo lo primero seria importarlo en el componente que deseemos utilizarlo y luego literalmente reemplazar
        nuestra etiqueta a por una Link y nuestro href por to 

        ¿Aun tienes dudas?, pues veamoslo con un ejemplo dentro de nuestro componente navbar
*/
/* Inicio componente Navbar */

import React from 'react'
import logo from '../images/logo.svg'
import './styles/Navbar.css'
import {Link} from 'react-router-dom'

class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <Link to="/badges" className="Navbar__brand">
                        <img src={logo} alt="Logo de la conferencia" className="Navbar__brand-logo"/>
                        <span className="font-weight-light">Platzi</span>
                        <span className="font-weight-bold">Conf</span>
                    </Link>
                </div>
            </div>


        )
    }
}


export default Navbar
/* Fin componente Navbar */

/*
    Como ven usar este componente es super sencillo

*/




/* Notas al pie del video

    División de la aplicación en rutas
    Para instalar React Router lo hacemos desde la terminal con npm install react-router-dom. Como es importante usar exactamente la misma versión, del package.json en “dependencies” se quita lo que está delante del 4.

    Link internamente tiene un elemento <a> pero va a interceptar el clic para navegar de manera interna sin refrescar toda la página.

*/