import { Link, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Navbar />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="*"
            element={
              <section className="pagina-contenedor estado-pagina">
                <h1>Página no encontrada</h1>

                <Link to="/" className="boton boton-oscuro">
                  Volver al inicio
                </Link>
              </section>
            }
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;