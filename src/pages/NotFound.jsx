import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="page-container not-found">
      <h1>404</h1>

      <h2>¡Esta porción no existe!</h2>

      <p>La página que buscas no está disponible.</p>

      <Link to="/" className="button button-primary">
        Volver al inicio
      </Link>
    </section>
  );
};

export default NotFound;