// src/pages/Login.tsx
import React, { useState } from "react";
import carbusterLogo from "@/assets/carbusterfoto.png"; // Ajusta esta ruta si tu logo está en otra parte usando @
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <div className="login-logo-wrapper">
          <img
            src={carbusterLogo}
            alt="Logo Carbuster"
            className="login-logo"
          />
        </div>

        <h2 className="login-title">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div>
            <label htmlFor="email" className="login-label">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="login-input"
            />
          </div>
          <div>
            <label htmlFor="password" className="login-label">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="login-input"
            />
          </div>
          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
        <p className="login-signup-text">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="login-signup-link">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}
