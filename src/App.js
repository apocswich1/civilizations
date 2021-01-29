import React, { Component } from 'react';
import AllRequest from './components/AllRequest';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';
import ModalCard from './components/ModalCard';
import './index.css';


class App extends Component {
  state = {
    termino: '',
    civilizations: [],
    civilization: [],
    id: ''
  }

  myConfig = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  consultarApi = () => {
    const url = `https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations${this.state.termino}`;
    try {
      fetch(url, this.myConfig)
        .then(response => response.json())
        .then(response => this.setState({ civilizations: response.civilizations }));
    } catch (error) {
      console.log(error)
    }


  }

  getById = () => {
    const url = `https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${this.state.id}`;
    try {
      fetch(url, this.myConfig)
        .then(response => response.json())
        .then(response => {
          this.setState({ civilization: response })
        });
    } catch (error) {
      console.log(error)
    }


  }


  datosBusqueda = (termino) => {
    let find = termino ? `/${termino}` : '';
    this.setState({ termino: `${find}` }, () => { this.consultarApi() });
  }

  dataById = (id) => {
    this.setState({ id }, () => { this.getById() });
  }

  componentDidMount() {
    this.consultarApi();
  }

  render() {
    return (
      <div className="App container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de civilizaciones</p>
          <Buscador datosBusqueda={this.datosBusqueda} />
          {this.state.termino}
        </div>
        <React.Fragment>
          <ModalCard civilization={this.state.civilization}/>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#profile">Datos api</a>
            </li>
          </ul>
          <div id="myTabContent" className="tab-content">
            <div className="tab-pane fade active show" id="home">
            {!(this.state.civilizations=="") ? (
          <Resultado dataById={this.dataById} civilizations={this.state.civilizations} />
        ) : (
            <div className="row align-items-center">
              <div className="col-12 text-center">
                <img src={`/images/buscando.gif`} alt="" style={{ height: '220px' }} />
            Buscando civilizacion...
            </div>
            </div>

          )}
            </div>
            <div className="tab-pane fade" id="profile">
            <AllRequest civilizations={this.state.civilizations} />
            </div>
          </div>
        </React.Fragment>
      </div>

    )
  }
}




export default App;
