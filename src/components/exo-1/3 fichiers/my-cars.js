'use client';

import { Component } from 'react'
import Cars from './cars';
class Mycars extends Component {

    render() {
        return (
          <div>
            <h1>{this.props.title}</h1>
            <Cars color="red">Ford</Cars>
            <Cars>Mercedes</Cars>
            <Cars color="green"></Cars>
          </div>
        );
    }
}

export default Mycars
