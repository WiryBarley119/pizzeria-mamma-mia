import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { pizzas } from "../pizzas";

const Home = () => {
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
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;