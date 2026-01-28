import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importando páginas
import Home from "./Home";
import ListaVontades from "./ListaVontades";
import ComoFunciona from "./ComoFunciona";
import DetalhesLugar from "./DetalhesLugar";
import ComoPreparar  from "./ComoPreparar";
import DetalhesVontades from "./DetalhesVontades";
import Historico from "./Historico";


export default function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/lista-vontades" element={<ListaVontades />} />
        <Route path="/como-funciona" element={<ComoFunciona />} />
        <Route path="/historico" element={<Historico />} />
<Route path="/como-preparar" element={<ComoPreparar />} />

        <Route path="/detalhes-lugar" element={<DetalhesLugar />} />


        <Route path="/detalhes-vontades/:categoria" element={<DetalhesVontades />} />
      </Routes>
    </Router>
  );
}
