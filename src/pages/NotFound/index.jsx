import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <div>
        <Image
          src={process.env.PUBLIC_URL + "/img/404.png"}
          alt="404"
          className="w-25"
        />
        <h2 style={{ fontSize: "24px", color: "#333" }}>
          Ups! Página no encontrada
        </h2>
        <p style={{ fontSize: "18px", color: "#666" }}>
          La página que estás buscando podría haber sido eliminada, cambiado su
          nombre, o estar temporalmente no disponible.
        </p>
        <p>
          <Link
            to="/"
            style={{
              fontSize: "18px",
              color: "rgb(72 162 182)",
              textDecoration: "none",
            }}
          >
            Ir a la página principal
          </Link>
        </p>
      </div>
    </div>
  );
}
