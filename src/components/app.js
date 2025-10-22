"use client";

import { Component } from 'react';
import Mycars from './exo-1/voitures/my-cars';
import './app.css'

class App extends Component {

  state = {
    titre: 'Mon Catalogue Voitures'
  }

  changeTitle = (e) => {
    console.log(e);
  }

  render() {
    return (
      <div className='App'>
        <Mycars title={this.state.titre} />
        <button onClick={this.changeTitle}>Changer le titre</button>
      </div>
    )
  }
}

export default App;