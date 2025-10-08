"use client";

import React, { Component } from 'react';
import Cars from './Cars'; 

// Composant React sous forme de classe
class MyCars extends Component {

    state = {
        cars: ["Ford", "Mercedes", "Peugeot"]
      }

  render() {
    return (
      <div>
        <h1 style={{ color: this.props.color }}>{this.props.title} </h1>
      <Cars color="red">{this.state.cars[0]}</Cars>
        <Cars>{this.state.cars[1]}</Cars> 
        <Cars color="black">{this.state.cars[2]}</Cars> 
      </div>
    )
  }
}

export default MyCars;