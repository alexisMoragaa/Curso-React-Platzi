/* Notas Personales

    En esta clase veremos una tecnica llamada polling, la cual nos permite actualizar nuestra pagina de forma automatica cada cierto tiempo
        Para esta clase estaremos trabajando exclusivamente dentro de la pagina Badges

        Esto lo logramos usando un setInterval en javascript, 
        pero como aplicamos esto a nuestra pagina. Pues muy sencillo 

        dentro de la funcion componentDidMount añadimos un intervalo que ejecute nuestra funcion fetchData cada x cantidad de tiempo


*/

componentDidMount(){
    this.fetchData()
    this.setIntervalId = setInterval(this.fetchData, 5000); 
                    
}

/*
    Como ven la funcion se ejcuta cada 5 segundo, pero en este punto tenemos dos pequeños problemas

        1. el componente Loader esta bloqueando nuestra pagina cada 5 segundos
        2. Cuando nos vamos de nuestra pagina el setInterval intenta actualizar el estado de un componente que ya no existe

     Resolvamos el primer problema
     
     
        Para esto actualizaremos la condicional que dispara nuestro componente loader
*/

if(this.state.loading === true && !this.state.data){
    return <PageLoading/>
}

/*
    Como ven ahora validamos el estado loading, pero tambien validamos que los datos esten nulos
        Con esto logramos que nuestro componente pageLoading solo se ejecute con la primera llamada a fetchdata

    Pero debemos mostrarle a nuestro usuario que la pagina se esta actualizando. 
        para esto creamos un componente llamado miniLoader (este componente es una copia del componente Loader, a diferencia de que este solo contiene 3 divs en lugar de 9)
        Ya con nuestro componente usaremos una condicional en jsx para posicionarlo justo debajo de la lista de badges
        
*/
{this.state.loading && (
    <MiniLoader/>
)}

/*
    Eso es todo con este problema. Pasemos al siguiente

    Esto es aun mas facil de solucionar

    basta con declarar nuestra funcion componentWillUnmount()
        Y dentro de ella limpiar el intervalo con la funion ClearInterval, la cual recibe  como parametro el id del intervalo que guardamos en this.setIntervalId
        cuando creamos el intervalo en la funcion componetDidMount()

    
*/

componentWillUnmount(){
    clearInterval(this.setIntervalId)
}

/*
    Con esto ya solucionamos los dos problemas que teniamos al actualizar nuestra pagina y logramos que el usuario vea los contenidos actualizados


*/

/* Notas al pie del video
    Polling consiste en que cada cierto tiempo que es definido por nosotros se buscan los datos y se actualizan automáticamente. Esto se hará constantemente hasta que el usuario se vaya de la página.
*/