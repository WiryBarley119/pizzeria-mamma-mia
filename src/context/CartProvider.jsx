import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarPizza = (pizza) => {
    setCart((carritoActual) => {
      const existe = carritoActual.some(
        (producto) => producto.id === pizza.id
      );

      if (existe) {
        return carritoActual.map((producto) =>
          producto.id === pizza.id
            ? { ...producto, count: producto.count + 1 }
            : producto
        );
      }

      return [...carritoActual, { ...pizza, count: 1 }];
    });
  };

  const disminuirCantidad = (id) => {
    setCart((carritoActual) =>
      carritoActual
        .map((producto) =>
          producto.id === id
            ? { ...producto, count: producto.count - 1 }
            : producto
        )
        .filter((producto) => producto.count > 0)
    );
  };

  const eliminarPizza = (id) => {
    setCart((carritoActual) =>
      carritoActual.filter((producto) => producto.id !== id)
    );
  };

  const total = cart.reduce(
    (acumulador, producto) =>
      acumulador + producto.price * producto.count,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarPizza,
        disminuirCantidad,
        eliminarPizza,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;