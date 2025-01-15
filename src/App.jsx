import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Partido from './pages/Partido/Partido.jsx';
import PartidoRapido from './pages/PartidoRapido/PartidoRapido.jsx';
import Estadisticas from './pages/Estadisticas/Estadisticas.jsx';
import './App.css'

function App() {
  return (
    <Router>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/partido" element={<Partido/>}/>
              <Route path="/partidorapido" element={<PartidoRapido/>}/>
              <Route path="/estadisticas" element={<Estadisticas/>}/>
            </Routes>
    </Router>
    
  )
}

export default App
