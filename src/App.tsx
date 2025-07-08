// src/App.tsx
// Importa tus componentes de Login y Register
import Login from "@/pages/Login";
import Register from "@/pages/Registro"; // Asegúrate de que la ruta sea correcta
import "@/styles/globals.css"; // Importa tu CSS global

// Importa los componentes de React Router Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    // Envuelve toda tu aplicación con Router
    <Router>
      <div className="p-8 hidden"> {/* Lo oculto temporalmente para que no estorbe visualmente */}
      </div>

      {/* Define tus rutas aquí */}
      <Routes>
        {/* Ruta para el componente Login. Será la página principal '/' */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} /> {/* También accesible via /login */}

        {/* Ruta para el componente Register */}
        <Route path="/register" element={<Register />} />

        {/* Opcional: Ruta para 404 Not Found */}
        {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
      </Routes>
    </Router>
  );
}

export default App;