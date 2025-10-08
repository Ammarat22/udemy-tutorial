"use client";

import React, { Component } from 'react';
import Cars from './cars'; 

// Composant React sous forme de classe
class MyCars extends Component {

  render() {
    console.log(this);

    return (
      <div>
        <h1>{this.props.title} </h1>
      <Cars color="red">Ford</Cars>
        <Cars>Mercedes</Cars> 
        <Cars color="black"></Cars> 
      </div>
    )
  }
}

export default MyCars;

//Dans ce fichier parents, on importe le composant Cars et on l'utilise plusieurs fois en lui passant des enfants (children) comme props .
//Dans le cas de la couleur , on passe les props comme paramètre au composant .

