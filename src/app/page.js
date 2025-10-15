"use client";

import React, { Component } from "react";

import Mycars from "@/components/exo1/3 fichiers/Mycars";

class Page extends Component {

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

export default Page;


