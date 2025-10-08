"use client";

import React from 'react';

// Composant React sous forme fonctionnelle
const Cars = ({ children, color }) => {

    const colorInfo = color ? (<p>Couleur: {color} </p>) : (<p>Couleur: Néant</p>);

    if (children) {
        return(
            <div style={{ border: "2px solid blue", margin: "10px", padding: "10px" }}>
                <p>Marque: {children} </p>
                {colorInfo}
            </div>
        );
    } else {
        return (
            <div style={{ border: "2px solid blue", margin: "10px", padding: "10px" }}>
                <p>Pas de data!</p>
            </div>
        );
    };
}

export default Cars;