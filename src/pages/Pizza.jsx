import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const imagenesPizzas = {
  p001: "/pizzas/napolitana.jpg",
  p002: "/pizzas/espanola.jpg",
  p003: "/pizzas/salame.jpg",
  p004: "/pizzas/cuatro-estaciones.jpg",
  p005: "/pizzas/bacon.jpg",
  p006: "/pizzas/pollo-picante.jpg",
};

const Pizza = () => {
  const { id } = useParams();

  const [pizza, setPizza] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const getPizza = async () => {
      setCargando(true);
      setError("");
      setPizza(null);

      try {
        const response = await fetch(
          `http://localhost:5000/api/pizzas/${id}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(
            response.status === 404
              ? "No encontramos esa pizza."
              : "No se pudo obtener la pizza."
          );
        }

        const data = await response.json();
        setPizza(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setCargando(false);
        }
      }
    };

    getPizza();

    return () => controller.abort();
  }, [id]);

  if (cargando) {
    return (
      <section className="pizza-detail-container">
        <p>Cargando pizza...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="pizza-detail-container">
        <p role="alert">{error}</p>
        <Link to="/">Volver al inicio</Link>
      </section>
    );
  }

  if (!pizza) return null;

  return (
    <section className="pizza-detail-container">
      <Link to="/" className="pizza-back-link">
        ← Volver al inicio
      </Link>

      <article className="pizza-detail">
        <img
          src={imagenesPizzas[id] || pizza.img}
          alt={`Pizza ${pizza.name}`}
          className="pizza-detail-image"
        />

        <div className="pizza-detail-content">
          <h2>Pizza {pizza.name}</h2>

          <hr />

          <p>{pizza.desc}</p>

          <h3>Ingredientes:</h3>

          <ul>
            {pizza.ingredients.map((ingredient) => (
              <li key={ingredient}>🍕 {ingredient}</li>
            ))}
          </ul>

          <hr />

          <h3>
            Precio: ${pizza.price.toLocaleString("es-CL")}
          </h3>

          <button type="button" className="add-button">
            Añadir 🛒
          </button>
        </div>
      </article>
    </section>
  );
};

export default Pizza;