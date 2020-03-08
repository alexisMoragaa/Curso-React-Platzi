/* Notas Personales

    Al igual que cuando realizamos una llamada get con las peticiones post necesitamos manejar los estados
        de esta forma le entregamos a nuestro usuario informacion sobre lo que esta sucediendo 

    Es por esto que en esta clase veremos como manejar los estados de nuestra peticion Post 
        
   En la clase anterior inicializamos state y lo actualizamos en funcion del resultado de la llamada
   ahora, lo que aremos sera mostrar este estado al usuario


   Lo primero que aremos sera un if al state, con lo cual cuando nuestro componete tenga state.loafding en true le mostraremos un loader

*/


if(this.state.loading){
    return <PageLoading />
}

/*
    Esto realmente no tiene mucho que explicar, importamos el componente desde componente y ya esta
    ademas de esto dentro de nuestra funcion handleSubmit realizaremos una redireccion a badges cuando la peticion este completa y sea exitosa
    
*/
handleSubmit = async e =>{
    e.preventDefault()
    this.setState({loading:true, error:null})

    try{
        this.setState({loading:false})
        await api.badges.create(this.state.form)
        this.props.history.push('/badges')
    }catch(error){
        this.setState({loading:false, error:error})
    }
    // const api.create(this.state.form)
}

/*
    Asi es como queda nuestra funcion, como ven solo hemos añadido una linea de codigo en la cual usando la prop history que nos entrega react router le decimos que
    queremos ir a la pagina de badges
*/


/*
    Lo siguiente que aremos sera manejar el estado del error

    para esto, lo pasaremos al componente badge form como una prop, y desde dentro del componente lo mostraremos al usuario siempre y cuando este contena algo

*/

 <BadgeForm 
        onChange ={this.handleChange}
        valueForm = {this.state.form}
        onSubmit={this.handleSubmit}
        error={this.state.error}
    />
/*
    Como ven solo lo pasamos como un prop y ya esta
    
    A continuacion estando dentro del componente badge form realizamos una condicional, en la cual preguntamos si error contiene un valor
    y mostramos el mensaje del mismo si es que lo tiene
*/

{this.props.error && (
    <p className="alert alert-danger mt-2">{this.props.error.message}</p>
)}



/*

    Bueno, basicamente esto es todo, con estas sencillas modificaciones estamos manejando tanto el estado de loading como el de error

    En la proxima clase veremos como realizar una peticion put
*/





/* Notas al pie del video
    Manejando los estados de la petición durante el POST
    De la misma manera en la que se manejan los estados cuando se solicitan datos, deben ser manejados cuando los datos son enviados.

    Existe un tiempo entre que se da clic y los datos son enviados. Ese tiempo de espera es necesario visualizarlo. Igual hay que mostrar mensajes de error cuando no funcionan las cosas.
*/