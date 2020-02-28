/* Notas Propias
    JSX que es. -> jsx es una forma mucho mas intuitiva de crear elementos usando html dentro de nuestros archivos js

    existe una alternativa a jsx la cual seria crear elementos usando la funcion reac.createElement, pero como ya mencione JSX es
    una forma mucho mas simple, he intuitiva de crear elementos, ya que es practicamente escribir el codigo html

    usaremos como ejemplo el codigo de la clase anterior

    la funcion React.createElement recibe 3 argumentos, el primero es el elemento html que deseamos crear, el segundo son las propiedades del mismo
    y finalmente el ultimo es conocido como el child, el cual vendria siendo el innetText o html que son el equivalente al valor o contendio del elemento 
*/

import React from 'react';
import ReactDom from 'react-dom';

const jsx = <h1>Hello World</h1>//creamos un elemento usando jsx
const element = React.createElement('a', {href:'https://platzi'}, 'ir a platzi'); //creamos un elemento usando React.createElement
const container = document.getElementById('app')//seleccionamos el contenedor
ReactDom.render(element, container)//ReactDom.render recibe dos argumentos, el elemento que rendereamos, y el contenedor en donde lo renderamos 



/*
    Como insertar variables dentro de nuestros elementos
        Creamos una variable en la que almacenaremos el nombre
        usammos las comillas invertidas para poder insertar un template dentro de la cadena de texto de esta forma `${}` (para hacer las comillas invertidas usa la tecla alt+96)
*/

const name = "Alexis"; //establecemos una variable con el nombre que usaremos
const element = React.createElement('h1', {}, `Hola Soy ${name}`); //creamos un elemento usando React.createElement 



/*
    Como hacemos esto mismo pero esta vez usando jsx
    muy sencillo, creamos un elemento y entre las etiquetas añadimos un par de llaves en donde estara nuestra variable

    como ven en este ejemplo es mucho mas sencillo, no nocecitamos insertar la variable dentro una cadena y solo escribimos el html añadiendo la variable entre {}
*/

const name = "Alexis"; //establecemos una variable con el nombre que usaremos
const jsx = <h1>Hola Soy {name}</h1> 
//esto va mas lejos, ya que lo que tengamos dentro de las llaves se interpretara como una expresión de javascript, con lo cual podemos hacer cosas como
const jsx = <h1>Hola la suma de 4+4 es {4+4}</h1> 
//o cualquier otra expresion de js (cualquier expresion que tenga como resultado false no se presentara en pantalla)


/*
    Hasta aca todo bien, pero por que usamos jsx y no React.createElement. 
    basicamente por que jsx nos permite crear elementos complejos con poco trabajo como por ejemplo
*/

const jsx = <div>
            <h1>Hola soy {name}</h1>
            <p>Soy Desarrolador web</p>    
          </div>
/* 
    Para replicar esto usando createElement deberiamos hacer algo asi
*/

const element = React.createElement(
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
                        'Soy Desarrolador web'
                    )
                    )

/* 
    Es por esta versatilidad al crear elementos mas complejos el por que durante todo este curso estaremos usando jsx en lugar de creatElement
    
    Nota importante, apesar de que esto se ve como html React es javascript, y nuestro codigo jsx por detras usando webpack, babel, y create-react-app lo transforma
    y nos entrega como resultado createElement


*/





/* Notas al pie del video
    JSX
    JSX es una extensión de JavaScript creada por Facebook para el uso con la biblioteca React. Sirve de preprocesador (como Sass o Stylus a CSS) y transforma el código generado con React a JavaScript.

    JSX tiene su alternativa que es React.createElement pero es preferible JSX porque es mucho más legible y expresivo. Ambos tienen el mismo poder y la misma capacidad.

    React.createElement recibe 3 argumentos:

    El tipo de elemento que estamos creando
    sus atributos o props
    y el children que es el contenido.
    Ejemplo:
    React.createElement(‘a’, { href: ‘https://platzi.com’ }, ‘Ir a Platzi’);

    En JSX se utilizan las llaves para introducir variables o expresiones de Javascript. Lo que sea que esté adentro se va a evaluar y su resultado se mostrará en pantalla.

    Las expresiones pueden ser llamadas a otras funciones, cálculos matemáticos, etc. Si las expresiones son false, 0, null, undefined, entre otros, no se verán.
*/