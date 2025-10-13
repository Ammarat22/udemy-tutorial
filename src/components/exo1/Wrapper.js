"use client";

import React from 'react';

function Wrapper({ children }) {
    console.log(children);
    return (
        <div className="bg-pink-300 m-2.5 p-2.5">
            {children}
        </div>
    )
}

export default Wrapper


 /*<div style={{ border: "2px solid blue", margin: "10px", padding: "10px" }}>
                    {children}
                </div>*/