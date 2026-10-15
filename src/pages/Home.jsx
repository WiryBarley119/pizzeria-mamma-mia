import { useEffect, useState } from "react";

import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const obtenerPizzas = async () => {
      try {
        const respuesta = await fetch(
          "http://localhost:5000/api/pizzas",
          { signal: controller.signal }
        );

        if (!respuesta.ok) {
          throw new Error("No se pudieron obtener las pizzas.");
        }

        const datos = await respuesta.json();
        setPizzas(datos);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(
            "No se pudieron cargar las pizzas. Comprueba que el backend esté funcionando en el puerto 5000."
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setCargando(false);
        }
      }
    };

    obtenerPizzas();

    return () => controller.abort();
  }, []);

  return (
    <>
      <Header />

      <section className="pagina-contenedor">
        <h1 className="titulo-seccion">Nuestras pizzas</h1>

        {cargando && (
          <p role="status">Cargando pizzas...</p>
        )}

        {error && (
          <p className="mensaje-error" role="alert">
            {error}
          </p>
        )}

        {!cargando && !error && (
          <div className="pizzas-grid">
            {pizzas.map((pizza) => (
              <CardPizza key={pizza.id} pizza={pizza} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Home;