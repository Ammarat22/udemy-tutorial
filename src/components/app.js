"use client";

import { Component } from 'react';
import Mycars from './exo-1/voitures/my-cars';
import './app.css'

class App extends Component {

  state = {
    titre: 'Mon Catalogue Voitures'
  }

  changeTitle = (e) => {
    this.setState({
      titre: 'Mon nouveau titre'
    })
  }

  changeViaParm = (titre) =>{
    this.setState({
      titre: titre
    })
  }

  changeViaBind = (param) => {
     this.setState({
      titre: param
    })
  }

  render() {
    return (
      <div className='App'>
        <Mycars title={this.state.titre} />
        <button onClick={this.changeTitle}>Changer le titre</button>
        <button onClick={() => this.changeViaParm('Titre via un param')}>Changer le titre</button>
        <button onClick={() => this.changeViaBind.bind(this, 'Titre via Bind')}>Via Bind</button>
      </div>
    )
  }
}

export default App;