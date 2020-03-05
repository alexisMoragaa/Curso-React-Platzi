/* Notas Personales
    En esta clase continuaremos trabajando con nuestro coponente app, en el cual manejamos las rutas de nuestra aplicacion
    y crearemos una layout para evitar duplicar partes de nuestro codigo que se extenderan a toda nuestra aplicacion

    entonces. ¿Que es un layout?
        Como mencionaba un layout es un componente que nos permitira contener parte de nuestro codigo, y extenderlo a todas partes
        como habran notado a lo largo del curso hemos creado componentes que se repiren en varias paginas, como por ejemplo nuestro nav
        que actualmente se encuentra en la pagina de Badges y BadgeNew

        Para esto partiremos creando un componente llamado Layout
*/
import React from 'react'
import Navbar from './Navbar'

function Layout (props){
    return (
        <React.Fragment>
            <Navbar />
            {props.children}
            
        </React.Fragment>  
    )
}

export default Layout

/*
    Como ven este componente es tremendamenre sencillo, pero como funciona
    como ven importamos el componente Navbar ya que este sera el componente que extenderemos mediante el layout
        La clave de este componente esta en {props.children}
        ya que esta instruccion le esta diciendo a nuestra aplicacion que dentro de este componente se renderearan 
        todas las propiedades hijas de nuestro componente. 

        para que esto funcione dentro de nuestro componente app tenemos que importar y usar este nuevo componente
*/

import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import BadgeNew from '../pages/BadgeNew'
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'
import Layout from './Layout'

function App(){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route  component={NotFound} />
                </Switch>
            </Layout>
                
        </BrowserRouter>
    )
}



export default App

/*
Si recuerdan la clase pasada sobre react router recordaran que hablamos de usar el compnente reactRouter en lo mas alto de nuestra app
ya que mediante este componente react router era capaz de cambiar nuestra pagina. 
Bueno, como ven en el sniped de codigo justo bajo de este componente es donde usamos Layout

por que hacemos que este componente englobe switch y los route, pues muy sencillo, de esta forma los estamos pasando como props
de nuestro componente layout, con lo cual despues desde dentro del componente retornamos el nav, y el componente hijo, que contendria
la pagina seleccionada mediante react Router



Si eres observador quizas ya notaste que dentro de nuestro componente Layout estamos usando <React.Fragment>
pero que es esto y para que lo usamos, pues muy sencillo. 
ya habras notado que dentro de nuestros componentes solo podemos retornar un elemento, y para esto hasta ahora hemos estado
utilizando divs, pero que pasa cuando nuestra app escala, cada vez tendriamos mas y mas divs incesarios, forzados a estar ahi

Para esto es que usamos <React.Fragment> ya que este una vez rendereado nuestro componente desaparece, y no ensucia nuestra maquetacion con divs incesarios
*/

/* Notas al pie del video

*/