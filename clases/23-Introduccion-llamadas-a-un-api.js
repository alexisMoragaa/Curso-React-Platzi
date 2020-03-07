/* Notas Personales
    Durante las proximas clases comenzaremos a ver las llamadas a una api. 

    antes de comenzar con esto primero entenderemos algunos conceptos basicos de las apis

    Cuando realizamos una llamada a una api esta puede pasar por 3 estados

    el primero de estos es el loading
        este estado sucede justo despues de ejecutar la llamada, y es basicamente el tiempo que transcurre mientras el api
        nos da una respuesta

    Luego de esto el api nos puede responder con dos estados
        el primero, en caso de que todo salio bien seria la data que solicitamos a esta api
        
   por otro lado si algo salio mal el api nos puede retornar un error
   
   
   Una regla importante para entregar una buena experiencia de usuario es entregar indicadores de lo que esta ocurriendo
   por ejemplo mostrar un loading cuando realizamos una llamada a un api y esperamos que esta nos retorne los datos

   Como mencionamos es posible que nuestra api nos retorne un error.
    Es importante que le iformemos a nuestros usuarios en caso de retornar un error, de esta forma le informamos al usuario que
    su solicitud tubo una respuesta


    Este patron de llamada, loading, datos o error lo usaremos siempre que realizemos llamadas a una api

*/



/* Notas al pie del video

Las llamadas a una API siguen un patrón similar siempre que las hacemos, cada llamada consta de tres estados:

Loading: cuando la petición se envía y estamos esperando.
Error: se debe dejar un mensaje para el usuario para arreglar el error o volver a intentarlo.
Data: los datos nos pueden llegar de dos formas, o en error o con los datos requeridos
*/