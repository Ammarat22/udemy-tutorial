"use client";

import React, { Component } from 'react';
import Wrapper from './wrapper';
import MyHeader from '../my-header';

const Cars = ({ children, color }) => {

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
    );
  }
}

export default MyCars;