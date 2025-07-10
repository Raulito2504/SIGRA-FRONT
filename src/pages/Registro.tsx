// src/pages/Register.tsx
import React, { useState } from "react";
import carbusterLogo from "@/assets/carbusterfoto.png"; // Ajusta esta ruta si tu logo está en otra parte usando @
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    console.log({ email, password });
  };

  return (
    <div className="register-container">
      <div className="register-form-wrapper">
        <div className="register-logo-wrapper">
          <img
            src={carbusterLogo}
            alt="Logo Carbuster"
            className="register-logo"
          />
        </div>

        <h2 className="register-title">Crear Cuenta</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <div>
            <label htmlFor="email" className="register-label">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="register-input"
            />
          </div>
          <div>
            <label htmlFor="password" className="register-label">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="register-input"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="register-label">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="register-input"
            />
          </div>
          <button type="submit" className="register-button">
            Registrarse
          </button>
        </form>
        <p className="register-signin-text">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="register-signin-link">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}