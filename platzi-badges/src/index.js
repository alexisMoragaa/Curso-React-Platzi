import React from 'react'
import ReactDom from 'react-dom';

const name = "Alexis Moraga"
const jsx = <h1>Hola Mundo soy {name}</h1>
const element = React.createElement('h1', {}, `Hola Soy ${name}`);
const container = document.getElementById('app')

const jsx2 = <div>
    <h1>Hola soy {name}</h1>
    <p>Soy Desarrollador web jsx</p>
</div>

const element2 = React.createElement(
    'div',
    {},
    React.createElement(
        'h1',
        {},
         `Hola soy ${name}`
    ),
    React.createElement(
        'p',
        {},
        'Soy Desarrolador web '
    )
    )
ReactDom.render(jsx2, container)