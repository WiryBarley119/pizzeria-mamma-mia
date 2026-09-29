import { useState } from "react";
import { pizzaCart } from "../pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const aumentarCantidad = (id) => {
    const nuevoCart = cart.map((pizza) =>
      pizza.id === id
        ? { ...pizza, count: pizza.count + 1 }
        : pizza
    );

    setCart(nuevoCart);
  };

  const disminuirCantidad = (id) => {
    const nuevoCart = cart
      .map((pizza) =>
        pizza.id === id
          ? { ...pizza, count: pizza.count - 1 }
          : pizza
      )
      .filter((pizza) => pizza.count > 0);

    setCart(nuevoCart);
  };

  const total = cart.reduce(
    (acumulador, pizza) => acumulador + pizza.price * pizza.count,
    0
  );

  return (
    <main className="cart-container">
      <h2>Detalles del pedido:</h2>

      {cart.map((pizza) => (
        <div className="cart-item" key={pizza.id}>
          <img
            src={pizza.img}
            alt={`Pizza ${pizza.name}`}
            className="cart-image"
          />

          <div className="cart-info">
            <h3>Pizza {pizza.name}</h3>

            <p>
              ${pizza.price.toLocaleString("es-CL")}
            </p>
          </div>

          <div className="cart-controls">
            <button onClick={() => disminuirCantidad(pizza.id)}>
              -
            </button>

            <span>{pizza.count}</span>

            <button onClick={() => aumentarCantidad(pizza.id)}>
              +
            </button>
          </div>
        </div>
      ))}

      <h2>
        Total: ${total.toLocaleString("es-CL")}
      </h2>

      <button className="pay-button">
        Pagar
      </button>
    </main>
  );
};

export default Cart;