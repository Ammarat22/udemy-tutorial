'use client';

import { Component } from 'react'
import Cars from './cars';
class Mycars extends Component {

  noCopy =() => {
    alert("Vous ne pouvez pas copier ce text!");
  }

  addStyle =(e) => {
    if (e.target.classList.contains('style')) {
      e.target.classList.remove('style');
    } else {
      e.target.classList.add('style');
    }
  }

    render() {
        return (
          <div>
            <h1 className="mycars-title" onMouseOver={this.addStyle}>{this.props.title}</h1>
            <p onCopy={this.noCopy}>Voici une liste de voitures :</p>
            <Cars color="red">Ford</Cars>
            <Cars>Mercedes</Cars>
            <Cars color="green"></Cars>
          </div>
        );
    }
}

export default Mycars
