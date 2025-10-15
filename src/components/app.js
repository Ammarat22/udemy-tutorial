"use client";

import { Component } from 'react';
import Mycars from './exo-1/3 fichiers/my-cars';
import './app.css'

class App extends Component {

  state = {
    titre: 'Mon Catalogue Voitures'
  }

  render() {
    return (
      <div className='App'>
        <Mycars title={this.state.titre} />
      </div>
    )
  }
}

export default App;