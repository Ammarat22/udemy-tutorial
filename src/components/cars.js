"use client";

import React from 'react';

// Composant React sous forme fonctionnelle
const Car = ({ children, color }) => {

    const colorInfo = color ? (<p>Couleur:{color} </p>) : (<p>Couleur: Néant</p>);

    if (children) {
        return(
            <div style={{ border: "2px solid blue", margin: "10px", padding: "10px" }}>
                <p>Marque:{children} </p>
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

export default Car;


// {color ? color : "Néant"} => Si la prop color est fournie, on l'affiche, sinon "Néant"
// {children ? ... : ...} => Si des enfants sont passés au composant, on les affiche, sinon un message par défaut.

/* Autre façon de faire avec un return unique et un opérateur ternaire

  return (
    <div style={{ border: "2px solid blue", margin: "20px", padding: "20px" }}>
      {children ? (
        <>
          <h2>Marque: {children}</h2>
          <p>Couleur: {color ? color : "Néant"}</p>
        </>
      ) : (
        <h2>véhicules indisponibles</h2>
      )}
    </div>
  );

export default Cars;
*/


