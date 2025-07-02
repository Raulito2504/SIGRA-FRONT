import Header from "@/components/common/Header";
import useAuth from "@/hooks/useAuth";
import { getData } from "@/services/api";

function App() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      <Header />
      <p>Autenticado: {isAuthenticated ? "Sí" : "No"}</p>
      <button onClick={login}>Iniciar sesión</button>
      <button onClick={logout}>Cerrar sesión</button>
      <p>{getData()}</p>
    </div>
  );
}

export default App;
