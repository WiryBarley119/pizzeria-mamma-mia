import { useEffect, useState } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  const imagenesPizzas = {
    p001: "/pizzas/napolitana.jpg",
    p002: "/pizzas/espanola.jpg",
    p003: "/pizzas/salame.jpg",
    p004: "/pizzas/cuatro-estaciones.jpg",
    p005: "/pizzas/bacon.jpg",
    p006: "/pizzas/pollo-picante.jpg",
  };

  const getPizzas = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      const data = await response.json();

      setPizzas(data);
    } catch (error) {
      console.error("Error al obtener las pizzas:", error);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <>
      <Header />

      <main className="container my-5">
        <div className="row g-4">
          {pizzas.map((pizza) => (
            <div className="col-12 col-md-6 col-lg-4" key={pizza.id}>
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={imagenesPizzas[pizza.id]}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;