"use client";

import React, { Component } from 'react';
//import Cars from './Cars';
import Wrapper from './Wrapper';
import MyHeader from '../MyHeader';

const Cars = ({ children, color }) => {

    //const colorInfo = color ? (<p>Couleur: {color} </p>) : (<p>Couleur: Néant</p>);

    let colorInfo;
    if (color) {
        colorInfo = color;
    } else {
        colorInfo = "Néant";
    }

    return children && (
        <Wrapper>
                <p>Marque: {children} </p>
                <p>Couleur: {colorInfo}</p>
        </Wrapper>
    );
}

// Composant React sous forme de classe
class MyCars extends Component {

  state = {
    cars: ["Ford", "Mercedes", "Peugeot"]
  }

  render() {
    return (
      <div className="space-y-4">
        <Wrapper>
          <MyHeader
            myStyle={this.props.color}>
             {this.props.title}
          </MyHeader>
        </Wrapper>
        <Cars color="red">{this.state.cars[0]}</Cars>
        <Cars>{this.state.cars[1]}</Cars>
        <Cars color="green">{this.state.cars[2]}</Cars>
      </div>
    )
  }
}

export default MyCars;



/* <div>
        <Wrapper>
          <h1 style={{ color: this.props.color }}>{this.props.title} </h1>
        </Wrapper>
        <Cars color="red">{this.state.cars[0]}</Cars>
        <Cars>{this.state.cars[1]}</Cars>
        <Cars color="black">{this.state.cars[2]}</Cars>
      </div>*/