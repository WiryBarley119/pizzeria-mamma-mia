const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <article className="pizza-card">

      <img
        src={img}
        alt={`Pizza ${name}`}
        className="pizza-image"
      />

      <div className="pizza-content">

        <h2>Pizza {name}</h2>

        <hr />

        <h4>Ingredientes:</h4>

        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              🍕 {ingredient}
            </li>
          ))}
        </ul>

        <hr />

        <h3>
          Precio: ${price.toLocaleString("es-CL")}
        </h3>

        <div className="pizza-buttons">
          <button className="info-button">
            Ver más 👀
          </button>

          <button className="add-button">
            Añadir 🛒
          </button>
        </div>

      </div>

    </article>
  );
};

export default CardPizza;