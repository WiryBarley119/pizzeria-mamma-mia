import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      alert("¡Todos los campos son obligatorios!");
      return;
    }

    if (password.length < 6) {
      alert("¡La contraseña debe tener al menos 6 caracteres!");
      return;
    }

    alert("¡Los campos se validaron correctamente!");
  };

  return (
    <main className="auth-section">
      <div className="auth-container">
        <h1>Iniciar sesión</h1>

        <form onSubmit={handleSubmit}>
          <div className="auth-group">
            <label htmlFor="email">Correo electrónico</label>

            <input
              id="email"
              type="email"
              placeholder="Ingrese su correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="auth-group">
            <label htmlFor="password">Contraseña</label>

            <input
              id="password"
              type="password"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="auth-button">
            Iniciar sesión
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;