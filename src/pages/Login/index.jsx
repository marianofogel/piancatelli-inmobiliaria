import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LogIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({});
  const [badLogin, setBadLogin] = React.useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const iniciarSesion = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const responseJson = await response.json();
      if (!responseJson.token) {
        throw new Error("Network response was not ok");
      }
      localStorage.setItem('token', responseJson.token);
      navigate("/admin");
    } catch (error) {
      console.error("Login error:", error);
      setBadLogin(true);
    }
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <h3>Ingreso</h3>
        </div>
        <form method="post">
          <input
            type="text"
            id="email"
            className="fadeIn second"
            name="userName"
            placeholder="Usuario"
            onChange={handleChange}
          ></input>
          <input
            type="password"
            id="password"
            className="fadeIn third"
            name="password"
            placeholder="Contraseña"
            onChange={handleChange}
          ></input>
          <button
            type="button"
            className="btn btn-outline-success"
            id="submit_button"
            onClick={iniciarSesion}
          >
            Sign In
          </button>
          <div>
            {badLogin && (
              <div
                className="alert alert-warning alert-dismissible fade show"
                role="alert"
              >
                Oops Something is wrong!!
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            )}
          </div>
        </form>
        <div id="formFooter">
          <Link to="/sign-up">
            <button>¿Nuevo usuario?</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
