/* Notas Personales
    En la clase anterios vimos que era el ciclo de vida de un componente en react y como funcionaba
    
    en esta clase veremos un ejemplo practico de como usar el ciclo de vida de un componente. 
    para esto usaremos nuestra pagina de badges

    Lo primero que aremos sera crear el construcor de nuestra clase

    en este componente inicializaremos el state vacio, mas adelante veran por que
*/

constructor(props){
    super(props)
    this.state = {
        data: []
    }
    console.log('1. Construcor(9')
}

/*
    Es en este momento que inicializamos el state, pero ya no nos basta como con state, ahora que estamos dentro de nuestro constructor
    debemos usar this.state

    otra cosa que notamos es que nuestro constructor recibe props, estas props las usuamos para inicializar la super clase, que en este caso es component

    Lo siguiente que aremos es crear nuestro metodo componentDidMount()
    dentro de las funciones del ciclo de vida añadiremos algunos console.log para ver en que orden se estan ejecutando dichas funciones

    dentro de esta funcion  crearemos una funcion asincrona que pasado una cantidad de segundos actualice el state de nuestro componente, de esta forma forzaremos
    que se ejecure nuevamente el render y nuestra funcion componentDidUpdate()
*/

componentDidMount(){
    console.log('3. componentDidMount()')

    const timeoutId = setTimeout(()=>{
        this.setState({
            data:[
                {
                    id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
                    firstName: 'Freda',
                    lastName: 'Grady',
                    email: 'Leann_Berge@gmail.com',
                    jobTitle: 'Legacy Brand Director',
                    twitter: 'FredaGrady22221-7573',
                    avatarUrl:
                      'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
                  },
                  {
                    id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
                    firstName: 'Major',
                    lastName: 'Rodriguez',
                    email: 'Ilene66@hotmail.com',
                    jobTitle: 'Human Research Architect',
                    twitter: 'MajorRodriguez61545',
                    avatarUrl:
                      'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
                  },
                  {
                    id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
                    firstName: 'Daphney',
                    lastName: 'Torphy',
                    email: 'Ron61@hotmail.com',
                    jobTitle: 'National Markets Officer',
                    twitter: 'DaphneyTorphy96105',
                    avatarUrl:
                      'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
                  },
            ],
        })
    }, 3000)
}

/*
    El console.log con el numero 2 estaria dentro de nuestro metodo render

    Nuestro siguiente metodo para el ciclo de vida sera componetDidUpdate()
    Este componete, como lo hablamos en la clase pasada recive como argumentos las props y el state anterios,
    aprevechando esto usaremos console.log para imprimerlos en pantalla y compararlos


*/


componentDidUpdate(prevProps, prevState){
    console.log('5 componentDidUpdate()')
    console.log({prevProps: prevProps, prevState:prevState})
    console.log({porps: this.props, state:this.state})
}

/*

    Por ultimo crearemos el metodo componentDidUnmount()

    este componente lo usaremos para limpiar el timeOut en caso de que el componente se desmonte antes de que este se ejecute
*/

componentWillUnmount(){
    console.log('6 componentWillUnmount(9)')
    clearTimeout(this.timeoutId)
}

/*
    Es importante limpiar la memoria al momento de desmontar los componentes, ya que de lo constrario nuestr app se realentiza
    de forma incesaria 
*/