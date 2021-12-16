import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio/Inicio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Inicio" element={<Inicio />} />
      </Routes>
    </Router>
  );
}

export default App;
