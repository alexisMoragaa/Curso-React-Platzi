/* Notas personales

    En esta clase veremos como crear listas con nuestros componentes, para esto estaremos viendo la funcion map de javascript
    para iterar sobre los elementos

    Lo primero que aremos en esta clase sera crear una nueva vista, esta vista la llamaremos Badges
    en esta vista importaremos nuestro componente navbar y posteriormente crearemos el hero

    Para poder listar elementos lo primero que necesitaremos es una lista de elementos, por lo cual inicializaremos la siguiente lista de elementos dentro del state de nuestra pagina


*/


state = {
    data: [
        {
            id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
            firstName: 'Freda',
            lastName: 'Grady',
            email: 'Leann_Berge@gmail.com',
            jobTitle: 'Legacy Brand Director',
            twitter: 'FredaGrady22221-7573',
            avatarUrl:
              'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
          },
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
            firstName: 'Major',
            lastName: 'Rodriguez',
            email: 'Ilene66@hotmail.com',
            jobTitle: 'Human Research Architect',
            twitter: 'MajorRodriguez61545',
            avatarUrl:
              'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
          },
          {
            id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
            firstName: 'Daphney',
            lastName: 'Torphy',
            email: 'Ron61@hotmail.com',
            jobTitle: 'National Markets Officer',
            twitter: 'DaphneyTorphy96105',
            avatarUrl:
              'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
          },
    ],
}


/*
    Ya con nuestra lista de elementos crearemos un nuevo componete para listar estos elementos, este componente se llamara BadgeList

    Y le pasamos como propiedad el estado de nuestro componente, en el cual estan almacenados los elementos que recorreremos
*/

import React from 'react'
import './styles/BadgeList.css'

class BadgeList extends React.Component{
    render(){
        return(

            <ul className="list-unstyled">
                {this.props.badge.map((Badge) => {
                    return(
                        <li key={Badge.id}>
                            
                            <div className="row Badge__card shadow-sm">
                                <div className="col-3 Badge__content-img">
                                    <img className="Badge__img" src={Badge.avatarUrl} alt=""/>
                                </div>
                                <div className="col-8">

                                    <p className="Badge__p">{Badge.firstName} {Badge.lastName}</p>
                                    <p className="Badge__p "> <a href="">@{Badge.twitter}</a></p>
                                    <p className="Badge__p">{Badge.jobTitle}</p>
                                </div>
                            </div>
                            

                        </li>
                    )
                })}
            </ul>
        )
    }
}


/*
    Para recorrer elementos de un objeto o array javascript provee un metodo llamado map el cual ejecutamos sobre nuestro objeto u arrau, 
    este metodo recibe como argumento una funcion y nos retorna un elemento como vemos

    
*/


/* Notas al pie del video

    Clase sin notas al pie del video
    
*/