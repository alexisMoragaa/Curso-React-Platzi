import React from 'react' //importamos react

class BadgeForm extends React.Component{// creamos la clase de nuestro componente

    state = {}//inicializamos el state
  
    handleChange = e =>{//creamos la funcion handleChange para manejar los cambios en los valores de los inputs
           this.setState({
               [e.target.name] : e.target.value
           })
           console.log(this.state)
    }

    handleClick = e => { //creamos la funcion hamdleClick para manejar el evento onclick del boton save
        console.log("btn whas clicked")
    }

    handleSubmit = e => { // creamos la funcion handleSubmit para capturar el fomulario al momento de hacerle submit
        e.preventDefault()
        console.log("form was submited")
        console.log(this.state)
    }

    render(){//creamos el metodo render
        return (
            <div className="">{/*Establecemos un contenedor para nuestro componente*/}
                <h1>New Attendant</h1>
                
                <form onSubmit={this.handleSubmit}> {/*Creamos un formulario y añadimos el evento on submit para capturar el envio del formulario*/}
                    <div className="form-group">
                        <label htmlFor="">First Name</label>
                        <input
                            onChange={this.handleChange}  
                            type="text" 
                            name="firstName" 
                            className="form-control"
                            value = {this.state.firstName}
                            />{/*Creamos nuestro input con un evento onchange el cual llamara una funcion llamada handleChange*/}
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Last Name</label>
                        <input
                            onChange={this.handleChange}  
                            type="text" 
                            name="lastName" 
                            className="form-control"
                            value = {this.state.lastName}
                            />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Job Title</label>
                        <input
                            onChange={this.handleChange}  
                            type="text" 
                            name="jobTitle" 
                            className="form-control"
                            value = {this.state.jobTitle}
                            />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Instagram</label>
                        <input
                            onChange={this.handleChange}  
                            type="text" 
                            name="instagram" 
                            className="form-control"
                            value = {this.state.instagram}
                            />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Hastag</label>
                        <input
                            onChange={this.handleChange}  
                            type="text" 
                            name="hashtag" 
                            className="form-control"
                            value = {this.state.hashtag}
                            />
                    </div>
                    <button className="btn btn-primary" onClick={this.handleClick}>Save</button>
                </form>
            </div>
        )   
    }
}

export default BadgeForm