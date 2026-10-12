import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      alert("¡Todos los campos son obligatorios!");
      return;
    }

    if (password.length < 6) {
      alert("¡La contraseña debe tener al menos 6 caracteres!");
      return;
    }

    if (password !== confirmPassword) {
      alert("¡Las contraseñas no coinciden!");
      return;
    }

    alert("¡Los campos se validaron correctamente!");
  };

  return (
    <main className="auth-section">
      <div className="auth-container">
        <h1>Registro</h1>

        <form onSubmit={handleSubmit}>
          <div className="auth-group">
            <label htmlFor="register-email">Correo electrónico</label>

            <input
              id="register-email"
              type="email"
              placeholder="Ingrese su correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="auth-group">
            <label htmlFor="register-password">Contraseña</label>

            <input
              id="register-password"
              type="password"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="auth-group">
            <label htmlFor="confirm-password">
              Confirmar contraseña
            </label>

            <input
              id="confirm-password"
              type="password"
              placeholder="Repita su contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="auth-button">
            Registrarse
          </button>
        </form>
      </div>
    </main>
  );
};

export default Register;