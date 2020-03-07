/*Notas personales

    Esta clase me resulto algo confuza, ya que para que esto funcione se necesita instalar una dependencia, cambiar algunos atributos en el composer.json
    y copiar algunos archivos (toda esta parte no esta explicada dentro del video de la clase) asi que tratare de explicarlo de la mejor forma posible


    1. en la raiz del proyecto encontraran una carpeta llamada server, (si estan montando su propio repositorio copien y pegen esta carpeta en la raiz de su proyecto)
    2. dentro de la carpeta src encontraran un archivo llamado api.js (lo mismo que con la carpeta src)
    3. debemos instalar faker,para esto usamos el comando
        npm install faker json-server npm-run-all --save-dev
    4. modificamos los scripts de nuestro package.json de la siguiente forma

         "scripts": {
            "start": "npm-run-all -p client server",
            "client" :"react-scripts start",
            "server":"json-server --port 3001 --watch server/db.json",
            "seed":"node server/seed.js",
            "build": "react-scripts build",
            "test": "react-scripts test",
            "eject": "react-scripts eject"
        },

        Con esto listo ya solo nos queda correr el comando npm start para correr nuestros servdirores. ya  esta todo configurado para continuar con la clase



        En esta clase, al igual que en la anterior realizaremos una llamada GET  un api
        a diferencia de la clase anterior en esta simularemos un api de forma local, es por esto que realizamos la configuracion al inicio de la clase
        La llamada al api la aremos para obtener nuestros basges. por lo cual trabajaremos en nuestra pagina de badges

        1. Lo primero que aremos sera importar el archivo api dentro de nuestra pagina
        2. Luego en nuestro constructor inicializaremos el estado
 */

constructor(props){//creamos el constructor
    super(props)//inicializamos la super clase
   
    this.state = {
        loading:true,
        error:null,
        data:[]//incializamos el state vacio
    }
}

/**
    Como pueden notar, al igual que en la clase anterior ademas de la data estaremos usando error y loading para manejar los estados de nuestra llamada

    3. dentro de el metodo componentDidMount() añadiremos una llamada a la funcion fetchData. esta funcion sera la encargada de realizar la llamada al api
 */

componentDidMount(){
    this.fetchData()
}

 fetchData = async () => {//1

    this.setState({loading:true, error: null})//2

    try{//3.1
        const data = await api.badges.list()//4
        this.setState({loading:false, data: data})//5
    }catch(error){//3.2
        this.setState({loading:false, error:error})
    }
 }

 /*
    Como mencionaba en la clase anterior cada vez que realicemos una llamada al api esta tendra una estructura muy similar, de igual forma paso a explicar paso a paso la funcion

       1. Creamos una funcion asincrona
       2. seteamos el estado de loading en true, ya que aca comenzara la llamada y estaremos esperando que esta carge
       3.1 usamos un try catch para realizar la llamada 
       3.2 Si hay un error lo capturamos y metemos al estado, seteamos loading como false ya que en este punto tenemos la respuesta del api
       4. realizamos la llamada al api
       5. seteamos loading como false, ya que en este punto tenemos la respuesta del api, metemos la respuesta de la llamada en la data del estado
   
    Aparte de esto creamos un pequeño componente llamado loader, el cual no es mas que un pequeño snipet de bootstrap el cual usaremos cuando el estado de loading sea true

 */
{this.state.loading && (
    <Loader />
)}
/*
    De esta forma cada vez que el estado del loading sea true mostraremos nuestro componente

    Otra cosa que hicimos fue manejar lo que le mostramos al usuario cuando la llamada no nos retorna datos, o nos retorna datos vacios. 
    para esto de forma suy similar a lo que hicimos con el loader usamos el siguiente codigo para manejarlo
*/
{this.state.data.length === 0 && !this.state.loading && (
    <h1>Aun no hay Badges, prueba creando uno</h1>
)}

/*
    usamos una doble validacion, ya que si solo validamos los datos nos mostrara  el mensaje mientras aun estamos esperando respuesta de la llamada

    Finalmente cuando el resultado de nuestra llamada trae data mostramos los datos que esta nos trajo

    para esto al igual que cuando teniamos nuestros datos directamente el el estado realizamos la llamda a nuestro componente BadgesList y le pasamos la data como prop
*/

{this.state.data.length > 0 && (
    <BadgeList badge={this.state.data} />
)}   

 /*Notas al pie del video

    Sin notas
 */