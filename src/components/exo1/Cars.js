"use client";

import React from 'react';
import Wrapper from './Wrapper';

// Composant React sous forme fonctionnelle
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

export default Cars;