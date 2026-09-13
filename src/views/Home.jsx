import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

import napolitana from "../assets/pizza-napolitana.jpg";
import espanola from "../assets/pizza-espanola.jpg";
import pepperoni from "../assets/pizza-pepperoni.jpg";

const Home = () => {
  return (
    <main>
      <Header />

      <section className="pizza-section">
        <CardPizza
          name="Napolitana"
          price={5950}
          ingredients={[
            "mozzarella",
            "tomates",
            "jamón",
            "orégano"
          ]}
          img={napolitana}
        />

        <CardPizza
          name="Española"
          price={6950}
          ingredients={[
            "mozzarella",
            "gorgonzola",
            "parmesano",
            "provolone"
          ]}
          img={espanola}
        />

        <CardPizza
          name="Pepperoni"
          price={6950}
          ingredients={[
            "mozzarella",
            "pepperoni",
            "orégano"
          ]}
          img={pepperoni}
        />
      </section>
    </main>
  );
};

export default Home;