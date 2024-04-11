import React from "react";
import ReactDOM from "react-dom";
import Inicio from "./Inicio";
import User from "./User";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Encuesta from "./Encuesta";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>    
              <User/>
              <Inicio />
            </div>
          }
        />
       <Route path="/encuesta" element={<Encuesta/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);