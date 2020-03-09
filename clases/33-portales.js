/* Notas personales

    Un portal es una forma de escapar parte del codigo de nuestra aplicaciion y renderizarlo fuera de la misma
    Hacemos esto para resolver conflictos de css como z-index, u overflo hidden

    para crear un portal primero necesitamos importar ReactDom 

    Luego usamos la siguiente sitaxis para crear un portal
*/

{ReactDom.createportal(<h1>Hola</h1>, document.getElementById('modal'))}

/*
    la funcion createportal recive dos parametros, el que queremos renderizar, y donde lo queremos renderizar.
    En este ejemplo estamos renderizando un h1,  y le estamos diciendo que lo renderize en un elemento con el id modal
        Pero donde esta este elemento. 
            Este elemento debemos craarlo dentro de la carpeta app.html y es igual al div con id app, a diferencia de que este tiene el id modal
*/

/* Notas al pie del video
    Hay momentos en los que queremos renderizar un modal, un tooltip, etc. Esto puede volverse algo complicado ya sea por la presencia de un z-index o un overflow hidden.

    En estos casos lo ideal será renderizar en un nodo completamente aparte y para esto React tiene una herramienta llamada Portales que funcionan parecido a ReactDOM.render; se les dice qué se desea renderizar y dónde, con la diferencia de que ese dónde puede ser fuera de la aplicación.

*/