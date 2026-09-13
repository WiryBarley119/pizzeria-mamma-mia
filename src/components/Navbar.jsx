const Navbar = ({ setVistaActual }) => {
  const total = 25000;

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        🍕 Pizzería Mamma Mía!
      </div>

      <div className="navbar-buttons">
        <button onClick={() => setVistaActual("home")}>
          🍕 Home
        </button>

        <button onClick={() => setVistaActual("login")}>
          🔐 Login
        </button>

        <button onClick={() => setVistaActual("register")}>
          🔐 Register
        </button>
      </div>

      <button className="total-button">
        🛒 Total: ${total.toLocaleString("es-CL")}
      </button>
    </nav>
  );
};

export default Navbar;