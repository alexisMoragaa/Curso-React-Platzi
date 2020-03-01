/* Notas personales
    Levantar el estado
        a que nos referimos cuando hablamos de levantar el estado.
        en la clase anterior vimos como crear un estado dentro de nuestro componente y para que servia
        en esta clase veremos una tecnica llamada levantar el estado, la cual nos ayudara a sacar el estado de un componente y
        poder pasarselo a otro componente.

        en este ejemplo veremos como levantar el estado de nuestro componente BadgeForm y pasarselo a nuestro componte badge


        lo primero que aremos sera levantar nuestra funcion handleChange a nuestra pagina, y pasar esta misma como propiedad a nuestro componente 
        y al componete badge
*/

state = {
            form:{
                firstName: "Nombre",
                lastName: 'Apellido',
                jobTitle: 'Trabajo',
                instagram : 'Instagram',
                hashtag: 'Hashtag',
        
            }
}// inicializamos state dentro de nuestra pagina. ya que a nuestra pagina podemos levantarle estados desde mas componentes
//creamos un objeto dentro de nuestro state llamado form en donde guardaremos el estado que estamos levantando de nuestro componente



handleChange = e => {//traemos nuestra funcion handleChange desde nuestro componete
    this.setState({//usamos setState para actualizar los valores de nuestro state cuando se ejecute la funcion handleChange
        form:{
            ...this.state.form,//para evitar de que por cada ejecucion se sobrre escriban nuestros regristros añadimos esta linea que trae los registros anteriores de nuestro state y solo añade o modifica los que correspondan 
            [e.target.name] : e.target.value
        }
    })
}// una vez tenemos inicializado el estado necesitamos traer hasta nuestra pagina nuestra funcion handleChange


/*
    Ya con la funcion handleChange en nuestra pagina nos quedan dos cosas
    1. Pasar esta funcion a nuestro componente BadgeForm
    2. Pasar el valor de nuestro state.form al componente
*/

    <BadgeForm 
        onChange ={this.handleChange}
        valueForm = {this.state.form}
    />//llamada al componente  desde nuestr pagina BadgeNew

/*
    Como ven ambos valores los pasamos como propiedades dentro de nuestro componente, por lo cual ahora dentro de nuestro componnete
    debemos recibirlos como propiedades
*/

    <input
        onChange={this.props.onChange}  
        type="text" 
        name="firstName" 
        className="form-control"
        value = {this.props.valueForm.firstName}
    /> //codigo del input dentro del componente BadgeForm, esta operacion debemos repetirla con cada uno de los inputs que tengamos en este componente

/*
    Como ven esta parte es realmente sensilla, solo nos basta con cambiar la llamada de nuestra funcion por la propiedad que le hemos pasado con la misma
    he igualmente hacerlo con el valor de nuestro input



    Finalmente, ahora que tenemos el estado de nuestro componente leventado en nuestra pagina podemos pasar los valores de este a nuestro componente badge
    Como hacerlo, pues muy sencillo 
*/

    <Badge 
        firstName = {this.state.form.firstName}
        lastName = {this.state.form.lastName}
        avatarUrl = "http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"
        jobTitle = {this.state.form.jobTitle}
        hashtag = {this.state.form.hashtag}
        instagram = {this.state.form.instagram}
    />//llamada al componente  desde nuestr pagina BadgeNew
/*
    Como ven basta con reemplazar los valores que teniamos hardCodeados por los valores obtenidos del state.form+
*/


/* Notas al pie del viedeo

    Levantamiento del estado
    Levantar el estado es una técnica de React que pone el estado en una localización donde se le pueda pasar como props a los componentes. Lo ideal es poner el estado en el lugar más cercano a todos los componentes que quieren compartir esa información.

    Algo interesante que le da el nombre a React es su parte de “reactivo” ya que cada vez que hay un cambio en el estado o en los prop

*/