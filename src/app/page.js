"use client";

import React, { Component } from "react";

import MyCars from "../components/MyCars";

class Page extends Component {

  state = {
    titre: "Catalogue des véhicules"
  }
  
    render() {
        return (
    <div className='page' style={{border: '2px solid red', margin: '20px', padding: '20px'}}>
      <MyCars title={this.state.titre}/>
    </div>
  )
    }   
}

export default Page;


