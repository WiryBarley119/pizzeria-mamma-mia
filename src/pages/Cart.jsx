import { useContext } from "react";
import { Link } from "react-router-dom";

import CartContext from "../context/CartContext";
import formatoPrecio from "../utils/formatoPrecio";

const Cart = () => {
  const {
    cart,
    agregarPizza,
    disminuirCantidad,
    eliminarPizza,
    total,
  } = useContext(CartContext);

  return (
    <section className="pagina-contenedor">
      <h1 className="titulo-seccion">Tu carrito 🛒</h1>

      {cart.length === 0 ? (
        <div className="carrito-vacio">
          <h2>Tu carrito está vacío</h2>
          <p>Elige una pizza para comenzar tu pedido.</p>

          <Link to="/" className="boton boton-oscuro">
            Ver pizzas
          </Link>
        </div>
      ) : (
        <>
          <div className="carrito-lista">
            {cart.map((pizza) => (
              <article
                className="carrito-producto"
                key={pizza.id}
              >
                <div className="carrito-info">
                  <h2 className="pizza-nombre">
                    {pizza.name}
                  </h2>

                  <p>
                    Precio unitario: {formatoPrecio(pizza.price)}
                  </p>
                </div>

                <div className="carrito-cantidad">
                  <button
                    type="button"
                    className="boton-cantidad"
                    onClick={() => disminuirCantidad(pizza.id)}
                    aria-label={`Quitar una pizza ${pizza.name}`}
                  >
                    −
                  </button>

                  <span aria-live="polite">
                    {pizza.count}
                  </span>

                  <button
                    type="button"
                    className="boton-cantidad"
                    onClick={() => agregarPizza(pizza)}
                    aria-label={`Añadir una pizza ${pizza.name}`}
                  >
                    +
                  </button>
                </div>

                <strong className="carrito-subtotal">
                  {formatoPrecio(pizza.price * pizza.count)}
                </strong>

                <button
                  type="button"
                  className="boton-eliminar"
                  onClick={() => eliminarPizza(pizza.id)}
                  aria-label={`Eliminar pizza ${pizza.name} del carrito`}
                >
                  Eliminar
                </button>
              </article>
            ))}
          </div>

          <div className="carrito-resumen">
            <h2>Total: {formatoPrecio(total)}</h2>

            <Link to="/" className="boton boton-claro">
              Seguir comprando
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;