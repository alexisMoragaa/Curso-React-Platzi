/* Notas Personales
    
    Esta clase en lo personal me costo un poco, pero me gusto mucho, asi que tratare de dar la mejor explicacion posible

    Lo primero que aremos sera crear una nueva pagina llamada RickAndMorty.js en donde trabajaremos nuestro codigo

    A continuacion usando snipets de codigo iremos deglosando paso a paso lo realizado en la clase


    Lo primero obviamente sera crear la estructura de nuestro componente, este sera un componente con estado,
    por lo cual necesitamos crear una clase (a estas alturas ya sabran como crear la estructura basica de un componente asi que la omitiremos)

    Luego de esto crearemos un constructor en donde inicializaremos el estado
*/

constructor(props){
    super(props)
    this.state = {
        nextPage:1,
        loading:true,
        error:null,
        data:{
            results:[]
        }
    }
}

/*
    Como pueden ver nada mas comenzar nuestro state tiene algunos valores interesantes, pasemos a detallarlos
        1.nextPage -> esta propiedad en nuestro estado la estaremos usando para solicitar nuevas paginas a la api
        2.loading -> esto nos servira para identificar en que momento la llamada al api esta en el estado de loading y cuando no
        3. error -> aca es donde almacenaremos el error en caso de tener alguno como respuesta a nuestra llamada
        4 data -> finalmente en data guardaremos los datos que nos entregara como respuesta el api


    Luego de esto y siguiendo con el ciclo de vida de nuestro componente crearemos el componentDidMount()
    y desde aca llamaremos a la funcion fetchCaracters() la cual estara a cargo de ejecutar la llamada a la api
*/

componentDidMount(){
    this.fetchCharacters()
    
}        

fetchCharacters = async () => {//creamos una funcion asincrona para realizar la llamada a un api
    this.setState({loading:true, error:null})
    try{
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`)
        const data = await response.json() 
        this.setState({
            nextPage:this.state.nextPage +1,
            loading:false,
            data: {
                info:data.info,
                results: [].concat(this.state.data.results, data.results)
            }
        })

    }catch(error){
        this.setState({loading:false, error:error})

    }
} 
/*
    Como ven la funcion componentDidMount() no tiene realmente nada que destacar, solo esta llamando a la funcion encargada de realizar la llamada al api
    
    Pasemos a detallar a fondo la funcion fetchCaracters esta funcion la usaremos para realizar una peticion a el api, y no sabemos cuando nos respondera
    por lo cual esta es una funcion asincrona

    1. lo primero que aremos es fijar el loading como true, ya que inmediatamente despues ejecutaremos la llamada al api, y setearemos el error en null,
        ya que como aun no hemos echo la llamada aun no tenemos un error que mostrar
    2. usamos un bloque try catch para ejecutar la llamada al api, si esta llamada termina en un error almacenamos el valor del error en el catch y lo insertamos al estado
        Junto con un loading false, ya que en este momento tendremos respuesta del api y ya no estamos esperando por ella

    3. realizamos un fetch a la url de el api de rick and morty (si son observadores veran que al final de esta url estamos pasando nextPage como parametro)
        fetch es  asincrona, asi que usamos await para esperar su respuesta
     
    4. obtenemos la data de nuestra llamada usando response.json() al igual que fetch es asincrona, asi que usamos await  
    
    5.Finalmente seteamos los valores del state 
        1. lo primero es aumentar el valor de nextpage cada vez que llamemos a esta funcion en 1
        2.establecemos loading como false, ya que en este punto tenemos la respuesta del api
        3.seteamos el valor de data, en info guardamos lo que viene en data.info
            pero en results lo que hacemos en concatenar los valores previos almacenados en state con los valores entregados por esta llamada
            hacemos esto para no perder los datos cada vez que llamados al api pidiendo una nueva pagina


     
            
    Finalmente el metodo render        
*/


render(){
    return(
        <div className=" contenedor_api">
            <div className="container">
                <div className="row ">

                    {this.state.data.results.map(characters => (
                        <div key={characters.id} className="col-xs-12 col-sm-6 col-md-4 col-lg-3 cont-character">
                            <div className="p-relative">

                                <img src={characters.image} alt="" className="api_img"/>
                                <div className="name_character">
                                    <span>
                                        {characters.name}
                                    </span>
                                </div>
                                </div>


                        </div>
                    ))}

                </div>
                        
               {this.state.loading && (
                   <Loader/>
               )} 

               {!this.state.loading &&(
                   <button onClick={()=>{this.fetchCharacters()}} className="btn btn-primary btn-load-more">Load More</button>
               )}


            </div>
        </div>


    )
}

/*
    De este metodo cabe destacar apenas 3 cosas

    1.usamos this.state.data.results.map() para recorrer  todos los elementos entregados por la llamada

    2 usamos los operadores condicionales && para renderear elementos solo cuando cumplan alguna condicion
        1. el primer elemento es un loader, el cual nos indica que algo  esta cargando, esto lo ejecutamos cuando el loading definido en el  estado sea true
        2. rendereamos un boton, el cual nos servira pasa solicitar mas elementos a la funcion fetchCharacters
            este boton lo rendereamos solo cuando el loading de nuestro state este en false
            este boton en conjunto con el concate establecido al interior de nuestra funcion aran que cada vez que lo presionemos
            tome el estado actual de nuestro componente, con los elementos ya obtenidos en llamadas anteriores se sumen con los elementos obtenidos
            en la llamda actual
*/

const BASE_URL = 'http://localhost:3001';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  badges: {
    list() {
      return callApi('/badges');
    },
    create(badge) {
      return callApi(`/badges`, {
        method: 'POST',
        body: JSON.stringify(badge),
      });
    },
    read(badgeId) {
      return callApi(`/badges/${badgeId}`);
    },
    update(badgeId, updates) {
      return callApi(`/badges/${badgeId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(badgeId) {
      return callApi(`/badges/${badgeId}`, {
        method: 'DELETE',
      });
    },
  },
};

export default api;