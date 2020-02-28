/* Notas Personales
    Lo primero que aremos para agregar estilos a nuestros componentes, es crear una carpeta styles dentro de nuestra carpeta components
    es aqui donde guardaremos nuestros archivos .css

    para traer esto al codigo nos basta con hacer un import al igual que con las imagenes, pero a diferencia de las imagenes
    o lo otros imports que hemos echo, en este caso no guardamos el import dentro de una variable, ya que es webpack el encargado de enpaquetar esto


    algo importante a considerar es que cuando trabajemos en nuestros componentes la palabra class nos mostrate un error de invalid property, esto es debido
    a que dentro de javascript la palabla class es una palabra reservada, para evitar esto basta co usar el atributo className en lugar de class dentro 
    de nuestros componentes.
*/
import './styles/Badge.css';
<div className="nombre de la clase"></div>

/*
    Importando Bootstrap dentro de nuestra aplicación

    para importar botstrap usaremos nuevamente npm, en este caso basta con ejecutar el comando
        npm install bootstrap
    y npm hará todo el trabajo por nosotros

    una vez npm termine de instalar bootstrap veremos que dentro de la carpeta nodeModules tendremso un nuevo modulo de bootstrap.
    ya solo nos queda importarlo dentro de nuestro archivo index.js, para esto usamos un import como el siguiente


    # Dentro de esta clase se añadieron dos archivos con estilos al repositorio
        1. Badge.css ubicado en src/components/styles/Badge.css -> este archivo le da los estilos a nuestro componente
        2. global.css ubicado en src/global.css -> este archivo sobre escribe algunas reglas de bootstrap para ajustarnos al diseño del badge

*/
import 'bootstrap/dist/css/bootstrap.css'




/* Notas al pie del video

    Cómo aplicar estilos
        Para los estilos crearemos una carpeta llamada Styles y allí vivirán todos los archivos de estilos que tienen que ver con los componentes.
        Para usar los estilos es necesario importarlos con import
        React funciona ligeramente diferente y para los atributos de clases no se utiliza class sino className
        Es posible utilizar Bootstrap con React, sólo debe ser instalado con npm install bootstrap y debe ser importado en el index.js
        Existen estilos que son usados de manera global o en varios componentes, así que deben ser importados en el index.js
*/