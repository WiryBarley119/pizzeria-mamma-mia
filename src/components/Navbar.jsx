import { useContext } from "react";
import { NavLink } from "react-router-dom";

import CartContext from "../context/CartContext";
import formatoPrecio from "../utils/formatoPrecio";

const Navbar = () => {
  const { total } = useContext(CartContext);

  return (
    <nav className="mamma-navbar">
      <div className="mamma-navbar-contenido">
        <NavLink to="/" className="mamma-marca">
          Pizzería Mamma Mía
        </NavLink>

        <div className="mamma-nav-enlaces">
          <NavLink to="/" end className="mamma-nav-enlace">
            Home
          </NavLink>

          <NavLink to="/login" className="mamma-nav-enlace">
            Iniciar sesión
          </NavLink>

          <NavLink to="/register" className="mamma-nav-enlace">
            Registrarse
          </NavLink>
        </div>

        <NavLink to="/cart" className="mamma-carrito">
          Total: {formatoPrecio(total)}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;