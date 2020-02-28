/* notas propias

en javascrip desde siempre hemos podido crear elementos y renderearlos en pantalla 

*/

const element = document.createElement('h1');//creamos un elemento h1
element.innerText = 'hello worl'; //asignamos el valor que tendra nuestro elemento

const container = document.getElementById('app');//seleccionamos el contenedor de nuestra aplicación
container.appendChild(element); //rendereamos nuestro elemento dentro del contenedor
 
/*
    Para lograr esto con react lo primero que necesitamos es importar tanto react como reactDom
    en donde React es el analogo a nuestro createElement() y ReactDom es analogo de appendChild()
    
    al igual que en el caso anterior necesitamos  crear nuestro elemento, como notaras dentro de nuestro elemento tenemos codigo html sin la necesidad de
    encerrar los elementos dentro de comillas, esta sintaxis es jsx, y para poder usarla debemos importar react

    tambien necesitaremos un contenedor, y por el momento lo obtenemos de la misma forma que en el caso anterior

    finalmente remdereamos el elemto usando reactDom.render

*/

import React from 'react';
import ReactDom from 'react-dom';

const element = <h1>Hello World</h1>//creamos un elemento
const container = document.getElementById('app')//seleccionamos el contenedor
ReactDom.render(element, container)//ReactDom.render recibe dos argumentos, el elemento que rendereamos, y el contenedor en donde lo renderamos 




/* Notas al pie del video
 
ReactDOM.render
React y ReactDOM trabajarán en conjunto.

React como análogo a createElement
ReactDOM a appendChild
ReactDOM.render() toma dos argumentos: Qué queremos renderizar y dónde lo queremos renderizar.

Siempre que escribas JSX es requisito importar React.
*/