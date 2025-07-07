import { useEffect, useState } from "react";
import { getPing } from "@/services/api";
import { Dashboard }  from "@/pages/Dashboard"; 

function App() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    getPing()
      .then((data) => setMensaje(data.message))
      .catch((err) => setMensaje("Error: " + (err.message || "Sin conexión")));
  }, []);
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Prueba de conexión API</h1>
      <p className="mt-4">{mensaje}</p>
    
      <Dashboard /> 
    </div>
  );
}

export default App;
