import { Routes, Route } from "react-router-dom";
import "./App.css";
import Galeria from "./pages/galeria/Galeria";
import Home from "./pages/home/Home";
import Nav from "./componentes/nav/Nav";
import GaleriaId from "./pages/galeria/Galeria.id";
import Historia from "./pages/historia/Historia";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Galeria" element={<Galeria />} />
        <Route path="/GaleriaId/:id" element={<GaleriaId/>} />
        <Route path="/Historia" element={<Historia />} />
      </Routes>
    </>
  );
}

export default App;
