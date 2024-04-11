// User.js
import React from 'react';
import "./User.css";

function User() {
  return (
    <div className="container">
        <button className="boton" onClick={() => window.location.href='https://portafoliodemateo.website/'}>Contáctame</button>
        <button className="boton" onClick={() => window.location.href='https://cafecito.app/mateoschallerfranich'}>Colabora</button>
    </div>
  );
}

export default User;