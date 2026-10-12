import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { pizzaCart } from "./pizzas";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const App = () => {
  const [cart, setCart] = useState(pizzaCart);

  const aumentarCantidad = (id) => {
    setCart((actual) =>
      actual.map((pizza) =>
        pizza.id === id
          ? { ...pizza, count: pizza.count + 1 }
          : pizza
      )
    );
  };

  const disminuirCantidad = (id) => {
    setCart((actual) =>
      actual
        .map((pizza) =>
          pizza.id === id
            ? { ...pizza, count: pizza.count - 1 }
            : pizza
        )
        .filter((pizza) => pizza.count > 0)
    );
  };

  const total = cart.reduce(
    (acumulador, pizza) => acumulador + pizza.price * pizza.count,
    0
  );

  return (
    <>
      <Navbar total={total} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                total={total}
                aumentarCantidad={aumentarCantidad}
                disminuirCantidad={disminuirCantidad}
              />
            }
          />

          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;