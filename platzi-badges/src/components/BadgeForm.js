import React from "react"; //importamos react

class BadgeForm extends React.Component {
  // creamos la clase de nuestro componente

  state = {}; //inicializamos el state

  handleClick = e => {
    //creamos la funcion hamdleClick para manejar el evento onclick del boton save
    console.log("btn whas clicked");
  };

  render() {
    //creamos el metodo render
    return (
      <React.Fragment>
        {/*Establecemos un contenedor para nuestro componente*/}
        <h1>New Attendant</h1>

        {this.props.error && (
              <p className="alert alert-danger mt-2">{this.props.error.message}</p>
          )}
        <form onSubmit={this.props.onSubmit}>
          {/*Creamos un formulario y añadimos el evento on submit para capturar el envio del formulario*/}
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="firstName"
              className="form-control"
              value={this.props.valueForm.firstName}
            />
            {/*Creamos nuestro input con un evento onchange el cual llamara una funcion llamada handleChange*/}
          </div>
          <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="lastName"
              className="form-control"
              value={this.props.valueForm.lastName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="email"
              className="form-control"
              value={this.props.valueForm.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Job Title</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="jobTitle"
              className="form-control"
              value={this.props.valueForm.jobTitle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Twitter</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="twitter"
              className="form-control"
              value={this.props.valueForm.twitter}
            />
          </div>
          <button className="btn btn-primary" onClick={this.handleClick}>
            Save
          </button>

        </form>
      </React.Fragment>
    );
  }
}

export default BadgeForm;
