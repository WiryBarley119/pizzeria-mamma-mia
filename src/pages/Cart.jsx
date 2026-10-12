const Cart = ({
  cart,
  total,
  aumentarCantidad,
  disminuirCantidad,
}) => {
  return (
    <section className="cart-container">
      <h2>Detalles del pedido:</h2>

      {cart.length === 0 && <p>Tu carrito está vacío.</p>}

      {cart.map((pizza) => (
        <div className="cart-item" key={pizza.id}>
          <img
            src={pizza.img}
            alt={`Pizza ${pizza.name}`}
            className="cart-image"
          />

          <div className="cart-info">
            <h3>Pizza {pizza.name}</h3>
            <p>${pizza.price.toLocaleString("es-CL")}</p>
          </div>

          <div className="cart-controls">
            <button
              type="button"
              onClick={() => disminuirCantidad(pizza.id)}
              aria-label={`Quitar una pizza ${pizza.name}`}
            >
              -
            </button>

            <span>{pizza.count}</span>

            <button
              type="button"
              onClick={() => aumentarCantidad(pizza.id)}
              aria-label={`Agregar una pizza ${pizza.name}`}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <h2>Total: ${total.toLocaleString("es-CL")}</h2>

      <button
        type="button"
        className="pay-button"
        disabled={cart.length === 0}
      >
        Pagar
      </button>
    </section>
  );
};

export default Cart;