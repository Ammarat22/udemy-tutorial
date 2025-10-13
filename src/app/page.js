"use client";

import React, { Component } from "react";

import MyCars from "../components/exo1/MyCars";

class Page extends Component {

  state = {
    titre: "Mon Catalogue Voitures",
    color: "green"
  }

  render() {
    return (
      <div className="text-center m-5 p-5">
        <MyCars
          title={this.state.titre}
          color={this.state.color}
        />
      </div>
    )
  }
}

export default Page;


