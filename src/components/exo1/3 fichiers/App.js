"use client";

import { Component } from 'react';
import Mycars from './Mycars';

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