/*
    Esta clase realmente no tiene mucho que comentar
    
    se creo un componente para mostrar el mensaje del error, y un componente para mostrar en el estado de loading

    Adjunto el codigo de los componentes 
*/

import React from 'react'
import './styles/PageError.css'

function PageError(props){
    return(
        <div className="PageError">

           <h1> {props.error.message}</h1>
        </div>
    )
}

export default PageError



import React from 'react'


function Loader (){
    return(
     
            <div className="text-center text-primary col-sm-12">

                <div class="spinner-grow text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow text-secondary" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow text-success" role="status">
                    <span class="sr-only">Loading...</span>
                </div>

                <div class="spinner-grow text-danger" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow text-warning" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
             </div>
    
    )
}



export default Loader