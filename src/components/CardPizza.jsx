import { useContext } from "react";
import { Link } from "react-router-dom";

import CartContext from "../context/CartContext";
import formatoPrecio from "../utils/formatoPrecio";

const imagenesLocales = {
  p001: "/pizzas/napolitana.jpg",
  p002: "/pizzas/espanola.jpg",
  p003: "/pizzas/salame.jpg",
  p004: "/pizzas/cuatro-estaciones.jpg",
  p005: "/pizzas/bacon.jpg",
  p006: "/pizzas/pollo-picante.jpg",
};

const CardPizza = ({ pizza }) => {
  const { agregarPizza } = useContext(CartContext);

  return (
    <article className="pizza-card">
      <img
        className="pizza-card-imagen"
        src={imagenesLocales[pizza.id] || pizza.img}
        alt={`Pizza ${pizza.name}`}
      />

      <div className="pizza-card-contenido">
        <h2 className="pizza-nombre">{pizza.name}</h2>

        <p className="pizza-ingredientes-titulo">
          Ingredientes:
        </p>

        <ul className="pizza-ingredientes">
          {(pizza.ingredients || []).map((ingrediente, indice) => (
            <li key={`${ingrediente}-${indice}`}>
              {ingrediente}
            </li>
          ))}
        </ul>

        <p className="pizza-precio">
          {formatoPrecio(pizza.price)}
        </p>

        <div className="pizza-card-acciones">
          <Link
            to={`/pizza/${pizza.id}`}
            className="boton boton-claro"
          >
            Ver más
          </Link>

          <button
            type="button"
            className="boton boton-oscuro"
            onClick={() => agregarPizza(pizza)}
          >
            Añadir
          </button>
        </div>
      </div>
    </article>
  );
};

export default CardPizza;