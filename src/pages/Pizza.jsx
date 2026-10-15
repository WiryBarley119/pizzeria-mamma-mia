import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import CartContext from "../context/CartContext";
import formatoPrecio from "../utils/formatoPrecio";

const Pizza = () => {
  const { id } = useParams();
  const { agregarPizza } = useContext(CartContext);

  const [pizza, setPizza] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const obtenerPizza = async () => {
      setCargando(true);
      setError("");
      setPizza(null);

      try {
        const respuesta = await fetch(
          `http://localhost:5000/api/pizzas/${encodeURIComponent(id)}`,
          { signal: controller.signal }
        );

        if (!respuesta.ok) {
          throw new Error("No se pudo obtener la pizza.");
        }

        const datos = await respuesta.json();
        setPizza(datos);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(
            "No se pudo cargar esta pizza. Comprueba que el backend esté funcionando y que la pizza exista."
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setCargando(false);
        }
      }
    };

    obtenerPizza();

    return () => controller.abort();
  }, [id]);

  if (cargando) {
    return (
      <div className="pagina-contenedor" role="status">
        Cargando pizza...
      </div>
    );
  }

  if (error || !pizza) {
    return (
      <section className="pagina-contenedor">
        <p className="mensaje-error" role="alert">
          {error || "Pizza no encontrada."}
        </p>

        <Link to="/" className="boton boton-claro">
          Volver al inicio
        </Link>
      </section>
    );
  }

  return (
    <section className="pagina-contenedor">
      <Link to="/" className="enlace-volver">
        ← Volver a las pizzas
      </Link>

      <article className="pizza-detalle">
        <img
          src={pizza.img}
          alt={`Pizza ${pizza.name}`}
        />

        <div className="pizza-detalle-contenido">
          <h1 className="pizza-nombre">{pizza.name}</h1>

          <p>{pizza.desc}</p>

          <h2>Ingredientes</h2>

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

          <button
            type="button"
            className="boton boton-oscuro"
            onClick={() => agregarPizza(pizza)}
          >
            Añadir al carrito
          </button>
        </div>
      </article>
    </section>
  );
};

export default Pizza;