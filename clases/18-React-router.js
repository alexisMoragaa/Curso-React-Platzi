/* Notas personales
    Que es React Router

    Para responder esta pregunta primero debemos presentar dos conceptos
        1. single page apps
        2. multi page apps

        Las single page apps basicamente son aplicaciones que solo cargan una pagina, y cualquier cambio en ellas
        actualiza el codigo html que ya existia en la misma

        Las multi page apps por otro lado sigen el esquema de cliente servidor, con lo cual por cada peticion que nosotros hagamos al
        servidor este nos respondera con una pagina nueva, cambiando por completo el archivo html que este nos entrega, y haciendo esto
        por cada interaccion o peticion que hagamoa a nuestro servidor

    Ya teniendo en cuenta esto que es react router
        React router es una herramienta que nos permite crear single page apps en las cuales podremos cambiar de paginas sin
        necesidad de cambiar por completo nuestro documento html actualizando solo los componentes necesarios
        
        para esto react router cuenta con un conjunto de componente de los cuales abordaremos 4

            1. Browser Router -> Es un componente que se ubica en lo mas alto de nuestra aplicacion, y todo lo que esta dentro de esto funciona como una single page app
                                Este es el encargado de que los demas componentes funcionen

            2. Route -> Route es basicamente representa una direccion de nuestra app a la cual nos queremos mover
                        Este componente recibe varios props, siendo de los mas importantes el path que indica la direccion y el componente (usualmente una pagina) que deseamos renderizar
            
            3. Switch -> switch nos sirve para seleccionar una de las rutas que tendremos dentro de nuestro componente, similar al switch de javascript
            
            4. Link -> toma del lugar de un elemento <a href=""></a>, este trabaja en conjunto con Browser Router para cambiar la direccion de nuestra barra de navegacion
                        Sin necesidad de cambiar nuestra pagina completa
*/



/* Notas al pie del video
    Introducción a React Router
    Las aplicaciones que se trabajan en React son llamadas single page apps. Esto es posible gracias a React Router que es una librería Open Source.

    Multi Page Apps: Cada página implica una petición al servidor. La respuesta usualmente tiene todo el contenido de la página.

    Single Page Apps (SPA): Aplicaciones que cargan una sola página de HTML y cualquier actualización la hacen re-escribiendo el HTML que ya tenían.

    React Router (v4): Nos da las herramientas para poder hacer SPA fácilmente. Usaremos 4 componentes:

    BrowserRouter: es un componente que debe estar siempre lo más arriba de la aplicación. Todo lo que esté adentro funcionará como una SPA.
    Route: Cuando hay un match con el path, se hace render del component. El component va a recibir tres props: match, history, location.
    Switch: Dentro de Switch solamente van elementos de Route. Switch se asegura que solamente un Route se renderize.
    Link: Toma el lugar del elemento <a>, evita que se recargue la página completamente y actualiza la URL.
*/