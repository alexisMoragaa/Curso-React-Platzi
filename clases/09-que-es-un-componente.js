/* Notas Personales
    Que es un componente y como funciona.
    Como ya vimos en la clase pasada un componente es como un bloque de lego que usaremos en la construccion de nuestra aplicacion

    Estos componentes tienen algo llamado el ciclo de vida, pero que es esto del ciclo de vida
    el ciclo de vida de un componente son las etapas por las que nuestro componente atraviesa durante la ejecucion de nuestra aplicación 
    el ciclo de vida de un componente basicamente se puede deglosar en 3 items, el montaje, la actualizacion, y el desmontaje o eliminacion del componente

    *Montaje -> el primer estado de nuestro ciclo de vida es el montaje (mount), esto ocurre cuando nuestros usuarios llegan y los componentes deben ser 
    cargados y mostrados usando el render

    *Actualizacion -> a medida que el usuario interactua con nuestra aplicacion pasan cosas, algo cambia y nuestros componentes necesitan actualizarse
        Cuando nustros componentes se actualizan nuevamente se ejecuta el render, lo cual modifica el dom, cuando esto sucede reac envia una señal 
        llamada componentDidUpdate()

    *Eliminar componente -> en react cuando un componente no es necesario, o cambiamos de pagina estos componentes son eliminados, cuando esto sucede nos
        envia una señal llamada componentWillUnmount(), y posterior a esto elimina el codigo de nuestro componente    
*/



/* Notas al pie del video
    Qué es y cómo funciona un componente en React.js
    En esta clase aprenderás acerca del ciclo de vida de los componentes en React para crear aplicaciones dinámicas. Desde la importancia del montaje cuando los usuarios llegan por primera vez a nuestra aplicación, hasta la actualización y desaparición de los componentes.
 */