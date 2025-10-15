"use client";

import React from "react";

export default function Wrapper({ children }) {
  console.log(children);
  return <div className="bg-pink-300 m-2.5 p-2.5">{children}</div>;
}

