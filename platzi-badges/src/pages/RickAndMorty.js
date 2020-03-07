import React from 'react'
import './styles/api.css'
import Loader from '../components/Loader'
class RickAndMorty extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            nextPage:1,
            loading:true,
            error:null,
            data:{
                results: []
            }
        }
    }

    componentDidMount(){
        this.fetchCharacters()
        
    }        

    fetchCharacters = async () => {//creamos una funcion asincrona para realizar la llamada a un api
        this.setState({loading:true, error:null})
        try{
            const Response = await fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`)
            const data = await Response.json() 
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
}


export default RickAndMorty
/*

id: 1
name: "Rick Sanchez"
status: "Alive"
species: "Human"
type: ""
gender: "Male"
origin: {name: "Earth (C-137)", url: "https://rickandmortyapi.com/api/location/1"}
location: {name: "Earth (Replacement Dimension)", url: "https://rickandmortyapi.com/api/location/20"}
image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
episode: (31) ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2", "https://rickandmortyapi.com/api/episode/3", "https://rickandmortyapi.com/api/episode/4", "https://rickandmortyapi.com/api/episode/5", "https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7", "https://rickandmortyapi.com/api/episode/8", "https://rickandmortyapi.com/api/episode/9", "https://rickandmortyapi.com/api/episode/10", "https://rickandmortyapi.com/api/episode/11", "https://rickandmortyapi.com/api/episode/12", "https://rickandmortyapi.com/api/episode/13", "https://rickandmortyapi.com/api/episode/14", "https://rickandmortyapi.com/api/episode/15", "https://rickandmortyapi.com/api/episode/16", "https://rickandmortyapi.com/api/episode/17", "https://rickandmortyapi.com/api/episode/18", "https://rickandmortyapi.com/api/episode/19", "https://rickandmortyapi.com/api/episode/20", "https://rickandmortyapi.com/api/episode/21", "https://rickandmortyapi.com/api/episode/22", "https://rickandmortyapi.com/api/episode/23", "https://rickandmortyapi.com/api/episode/24", "https://rickandmortyapi.com/api/episode/25", "https://rickandmortyapi.com/api/episode/26", "https://rickandmortyapi.com/api/episode/27", "https://rickandmortyapi.com/api/episode/28", "https://rickandmortyapi.com/api/episode/29", "https://rickandmortyapi.com/api/episode/30", "https://rickandmortyapi.com/api/episode/31"]
url: "https://rickandmortyapi.com/api/character/1"
created: "2017-11-04T18:48:46.250Z"
*/