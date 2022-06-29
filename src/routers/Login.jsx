import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const formulario = useRef(null);

  const [todo, setTodo] = useState({
    inputEmail: "",
    inputContraseña: "",
  });

  const handleChange = (e) => {
    const target = e.target;
    
    const name = target.name;

    setTodo((old) => ({
      ...old,
      [name]: target.value,
    }));

    const expresiones = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const password = /^.{4,12}$/; // 4 a 12 digitos.

    if (name === "inputEmail") {
      if (expresiones.test(todo.inputEmail)) {
        e.target.className = "form-control is-valid";
        return;
      } else {
        e.target.className = "form-control is-invalid";
        return;
      }
    }
    if (name === "inputContraseña") {
      if (password.test(todo.inputContraseña)) {
        e.target.className = "form-control is-valid";
        return;
      } else {
        e.target.className = "form-control is-invalid";
        return;
      }
    }
  };

  const handleSubmit = (e) => {
    const expresiones = {
      correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      password: /^.{4,12}$/, // 4 a 12 digitos.
    };

    e.preventDefault();

    const { inputEmail, inputContraseña } = todo;

    if (!inputEmail.trim()) {
      alert("el campo email esta vacio");
      e.target[0].focus();
      return;
    } else if (!expresiones.correo.test(inputEmail)) {
      alert("ingreso caracteres no validos");
      e.target[0].focus();
      return;
    }
    if (!inputContraseña.trim()) {
      alert("el campo contraseña esta vacio");
      e.target[1].focus();
      return;
    } else if (!expresiones.password.test(inputContraseña)) {
      alert("ingreso caracteres no validos o la contraseña es muy corta");
      e.target[1].focus();
      return;
    }

    alert("sesion iniciada");
  };

  return (
    <>
      <div className="container">
        <form ref={formulario} onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="inputEmail"
              placeholder="ejemplo@ejemplo.com"
              autoComplete="off"
              onChange={handleChange}
              value={todo.inputEmail}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              name="inputContraseña"
              autoComplete="off"
              onChange={handleChange}
              value={todo.inputContraseña}
              required
            />
          </div>
          <div className="d-inline-flex p-2">
            <button type="submit" className="btn btn-primary" to="/">
              Iniciar sesión
            </button>
          </div>
        </form>
        <div className="d-inline text-end">
          <Link to="/Registro" className="btn btn-info ms-2">
            Registrarse
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
