import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";

const App = () => {
  const [vistaActual, setVistaActual] = useState("home");

  return (
    <>
      <Navbar setVistaActual={setVistaActual} />

      {vistaActual === "home" && <Home />}
      {vistaActual === "login" && <Login />}
      {vistaActual === "register" && <Register />}

      <Footer />
    </>
  );
};

export default App;