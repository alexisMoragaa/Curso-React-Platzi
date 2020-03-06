/* Notas personales
    Esta es una clase teorica, por lo cual no tendremos ejemplos con snipets de codigo como en clases anteriores

    Ciclo de vida de los componentes. ¿Qué es esto?
    mientras navegamos por nuestra aplicacion y nos movemos por las paginas constantemente nuestros componentes atraviesan por distintos estados
    estos estados son denominados su ciclo de vida, en esta clase veremos 3 de estos estados, en react existen mas estados para manejar el ciclo de vida
    pero en esta ocacion nos enfocaremos en estos 3

    Montaje
    Actualizacion
    Desmontaje

    El Montaje, como su nombre lo indica es el monmento en el que react carga nuestro componente y lo presenta en pantalla
    para que esto suceda react ejecuta 3 metodos en orden
        -constructor del componente (este es el momento perfecto para inicializar state, o algun valor)
        -render que es donde esta el codigo jsx de nuestro componente
        -componentDidMount es en este momento en que nuestro componente aparece en pantalla


    Actualizacion
        La actualizacion ocurre cuando en nuestro componente cambia el state o sus props
        debido a esto el componente necesito volver  a renderearse, y para esto react ejecuta 2 metodos
        render()
        componentDidUpdate() este metodo a su ves recive dos argumentos. el state anterior, y las props anterioes, de esta forma podemos comparar nuestro componente con la informacion anterior

    Desmontaje
        El desmontaje es lo contrario al montaje, esto ocurre cuando sacamos nuestro componente de escena o cuando cambiamos nuestra pagina
        en esta ocacion solo se ejecuta un metodo
        componenDidUnmount() y este es el momento perfecto para limpiar la memoria de elementos como setTimeout que ya no queremos que se ejecuten



  Con esto ya tenemos las nociones basicas de que es y como funciona el ciclo de vida de un componente en react, y en la proxima clase veremos como usarlo
  para actualizar nuestro componente
  
  
*/


/*Notas al pie del video

    Introducción del ciclo de vida de un componente
    Cuando React renderiza los componentes decimos que entran en escena, cuando su estado cambia o recibe unos props diferentes se actualizan y cuando cambiamos de página se dice que se desmontan.

    Montaje:

    Representa el momento donde se inserta el código del componente en el DOM.
    Se llaman tres métodos: constructor, render, componentDidMount.
    Actualización:

    Ocurre cuando los props o el estado del componente cambian.
    Se llaman dos métodos: render, componentDidUpdate.
    Desmontaje:

    Nos da la oportunidad de hacer limpieza de nuestro componente.
    Se llama un método: componentWillUnmount.


*/