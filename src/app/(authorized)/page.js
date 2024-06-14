"use client"

import React, { useState } from "react";

export default function Home() {
  const [numero, setNumero] = useState("");
  const [nombre, setNombre] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setNumero(value);
    if (value == 1) {
      setNombre("Jose");
    } else if (value ==2) {
      setNombre("Facundo")
    } else {
      setNombre("Usuario");
    }
  };

  return (
    <section>
      <h1>Bienvenido, {nombre}</h1>
      <div className="div-input_number">
        <input
          className="input-number"
          type="text"
          value={numero}
          onChange={handleChange}
          placeholder="Ingrese un ID"
        ></input>
      </div>
    </section>
  );
}
