import React, { Component } from 'react';

class Buscador extends Component{
    busquedaRef = React.createRef();

    getCivilizations = (e) => {
        e.preventDefault();
        let termino = this.busquedaRef.current.value;
        this.props.datosBusqueda(termino);
    }

  render(){
    return(
        <form onSubmit={this.getCivilizations}>
            <div className="row">
                <div className="form-group col-md-8">
                    <input ref={this.busquedaRef} type="text" className="form-control
                    form-control-lg" placeholder="Busca tu civilización. Ejemplo: Aztec"></input>
                </div>
                <div className="form-group col-md-4">
                    <input type="submit" className="btn btn-lg btn-danger
                    btn-block" value="Buscar..."></input>
                </div>
            </div>
        </form>
      
    )
  }
}




export default Buscador;
