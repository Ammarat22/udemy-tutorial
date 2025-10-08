"use client";

import React, { Component } from "react";

import MyCars from "../components/exo1/MyCars";

class Page extends Component {

  state = {
    titre: "Catalogue des véhicules",
    color: "green"
  }
  
    render() {
        return (
    <div className='page' style={{border: '2px solid red', margin: '20px', padding: '20px'}}>
      <MyCars 
      title={this.state.titre}
      color={this.state.color}
      />
    </div>
  )
    }   
}

export default Page;


