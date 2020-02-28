/* Notas Personales
    
    Para la creacion de nuestro primer componente seguiremos una buena practica de porogramacion, 
    la cual consiste en separar los componentes en archivos, y que estos esten dentro de su respectiva carpeta 

    para esto crearemos una carpeta llamada components desntro de nuestra carpeta src

    una vez creada esta carpeta añadiremos nuestro primer componente, durante este curso crearemos una aplicacion de badges,
    en la cual podras crear tus propios badges personalizados, por lo que nuestro primer componente sera Badge

    Al interior de nuestra carpeta creamos el archivo Badge.js el cual contendra el siguiente codigo

    #Inscrustar imagenes dentro de nuestro componente
        
        Para añadir o incrustar imagenes dentro de nuestro componente tenemos que importarla, para esto usaremos import, y finalmente solo añadiremos la imagen
        usando las llaves {} dentro del atributo src
        en este caso hemos creado una carpeta llamada images dentro de nuestro directorio src para almacenar las imagenes que usaremos dentro del proyecto


*/

import React from 'react' //importamos react ya que estaremos usando la sintaxis de jsx
import confLogo from '../images/badge-header.svg'
class Badge extends React.Component{//creamos nuestro componente como una clase
// todos los componentes o clases en react deben tener como minimo un metodo siempre, el render

    render(){//este es el metodo encargado de retornar nuestro componente
        return (
            <div className="">

                <div className="">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>
                <div className="">
                    <img src="" alt="avatar"/>
                    <h1>Alexis <br/> Moraga</h1>
                </div>

                <div className="">
                    <p>Desarrollador Web</p>
                    <p>@amoragaa</p>
                </div>
                <div className="">
                    #PlatziConf
                </div>

            </div>
            )
    }

}

export default Badge // Como estamos dentro de un archivo separado debemos asegurarnos de exportar nuestro codigo





/* Notas al pie del video
 Nuestro primer componente
    Es una buena práctica que los componentes vivan en su propio archivo y para ello se les crea una carpeta.
    Todos los componentes requieren por lo menos el método render que define cuál será el resultado que aparecerá en pantalla.
    El source de las imágenes en React puede contener direcciones en la web o se le puede hacer una referencia directa importándola. Si se importa deben usarse llaves para que sea evaluado.
*/