import { Link } from "react-router-dom";

const Navbar = ({ total }) => {

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Pizzería Mamma Mía
      </Link>

      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Inicio
        </Link>

        <Link to="/register" className="nav-link">
          Registro
        </Link>

        <Link to="/login" className="nav-link">
          Iniciar sesión
        </Link>

        <Link to="/profile" className="nav-link">
          Perfil
        </Link>

        <Link to="/cart" className="nav-link cart-link">
          Total: ${total.toLocaleString("es-CL")}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;