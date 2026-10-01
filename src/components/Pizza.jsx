import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  const getPizza = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/pizzas/p001"
      );

      const data = await response.json();

      setPizza(data);
    } catch (error) {
      console.error("Error al obtener la pizza:", error);
    }
  };

  useEffect(() => {
    getPizza();
  }, []);

  if (!pizza) {
    return (
      <div className="container my-5">
        <p>Cargando pizza...</p>
      </div>
    );
  }

  return (
    <main className="container my-5">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-6">
            <img
                src="/pizzas/napolitana.jpg"
                className="img-fluid rounded"
                alt={`Pizza ${pizza.name}`}
                style={{
                    width: "100%",
                    maxHeight: "400px",
                    objectFit: "cover",
                }}
            />
          </div>

          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title text-capitalize">
                Pizza {pizza.name}
              </h2>

              <hr />

              <p className="card-text">
                {pizza.desc}
              </p>

              <h5>Ingredientes:</h5>

              <ul>
                {pizza.ingredients.map((ingredient) => (
                  <li key={ingredient}>
                    🍕 {ingredient}
                  </li>
                ))}
              </ul>

              <div className="d-flex justify-content-between align-items-center mt-4">
                <h3>
                  Precio: ${pizza.price.toLocaleString("es-CL")}
                </h3>

                <button className="btn btn-danger">
                  Añadir 🛒
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Pizza;