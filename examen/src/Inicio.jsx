// Inicio.js
import React, { useState } from "react";
import Ppa from "./Ppa";
import "./Inicio.css";
import "./Global.css";

function Inicio() {
  const [iniciarPpa, setIniciarPpa] = useState(false);

  if (iniciarPpa) {
    return <Ppa />;
  }

  return (
    <div className="inicio-container">
      <button className="btnbtnbtn" onClick={() => setIniciarPpa(true)}>Primer parcial alimentos UNSA 2024</button>
    </div>
  );
}

export default Inicio;