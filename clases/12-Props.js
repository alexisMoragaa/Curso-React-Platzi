/* Notas Personales

    Que son los Props
        los props son argumentos o parametros, los cuales enviaremos a nuestro componente
        para este ejemplo usaremos el componente Badge creado en clases anteriores y remplazaremos la información del badge por props
        lo cual nos permitira tener una componente dinamico.


*/


    return (
            <div className="Badge">

                <div className="Badge__header">
                    <img  src={confLogo} alt="Logo de la conferencia"/>
                </div>
                <div className="Badge__section-name">
                    <img className="Badge__avatar" src={this.props.avatarUrl} alt="avatar"/>
                    <h1>{this.props.firstName} <br/>{this.props.lastName}</h1>
                </div>

                <div className="Badge__section-info ">
                    <h3>{this.props.jobTitle}</h3>
                    <div>@{this.props.instagram}</div>  
                </div>
                <div className="Badge__footer">
                #{this.props.hashtag}
                </div>

            </div>
            )

/*
    Tomando en cuenta el codigo de nuestro componente remplazamos los datos por props
    dentro de nuestro componente obtenemos las props desde this.props.nombre de la propiedad, 
    para que esto funcione, en el momento en que desde nuestro archivo index.js hacemos render de nuestro componente
    debemos pasar las props como se muestra a continuacion 
*/


ReactDom.render(<Badge 
    firstName = "Alexis"
    lastName = "Moraga"
    avatarUrl = "http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"
    jobTitle = "Desarrollador Web"
    hashtag = "Platzi"
    instagram = "amoragaa"
/>,
 container)

/*
    Estas props enviadas al momento de hacer render a nuestro componente posteriormente las usamos para presentarlas de forma dinamica en nuestro componente
*/






/* Notas al pie del video
    Props
    Los props que es la forma corta de properties son argumentos de una función y en este caso serán los atributos de nuestro componente como class, src, etc.

    Estos props salen de una variable de la clase que se llama this.props y los valores son asignados directamente en el ReactDOM.render().
*/