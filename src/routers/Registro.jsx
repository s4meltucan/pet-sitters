import React, { useRef } from "react";

const Registro = () => {
  const formulario = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const datos = new FormData(formulario.current);
    const objetoDatos = Object.fromEntries([...datos.entries()]);
    const {
      nombre,
      apellido,
      direccion,
      ciudad,
      cp,
      noCasa,
      telefono,
      email,
      contraseña,
      confContraseña,
    } = objetoDatos;

    const expresiones = {
      nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
      password: /^.{4,12}$/, // 4 a 12 digitos.
      correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      telefono: /^\d{7,14}$/, // 7 a 14 numeros.
      cp: /[0-9]/,
    };

    if (!nombre.trim()) {
      alert("el campo nombre esta vacio");
      e.target[0].focus();
      return;
    } else if (!expresiones.nombre.test(nombre)) {
      alert("ingreso caracteres no validos en nombre");
      e.target[0].focus();
      return;
    }

    if (!apellido.trim()) {
      alert("el campo apellido esta vacio");
      e.target[1].focus();
      return;
    } else if (!expresiones.nombre.test(apellido)) {
      alert("ingreso caracteres no validos en apellido");
      e.target[1].focus();
      return;
    }

    if (!direccion.trim()) {
      alert("el campo direccion esta vacio");
      e.target[2].focus();
      return;
    } else if (!expresiones.nombre.test(direccion)) {
      alert("ingreso caracteres no validos en direccion");
      e.target[2].focus();
      return;
    }

    if (!ciudad.trim()) {
      alert("el campo ciudad esta vacio");
      e.target[3].focus();
      return;
    } else if (!expresiones.nombre.test(ciudad)) {
      alert("ingreso caracteres no validos en ciudad");
      e.target[3].focus();
      return;
    }

    if (!cp.trim()) {
      alert("el campo C.P. esta vacio");
      e.target[4].focus();
      return;
    } else if (!expresiones.cp.test(cp)) {
      alert("ingreso caracteres no validos en C.P.");
      e.target[4].focus();
      return;
    }

    if (!noCasa.trim()) {
      alert("el campo No. de casa esta vacio");
      e.target[5].focus();
      return;
    } else if (!expresiones.cp.test(noCasa)) {
      alert("ingreso caracteres no validos en No. casa");
      e.target[5].focus();
      return;
    }

    if (!telefono.trim()) {
      alert("el campo telefono esta vacio");
      e.target[6].focus();
      return;
    } else if (!expresiones.telefono.test(telefono)) {
      alert("ingreso caracteres no validos en telefono");
      e.target[6].focus();
      return;
    }

    if (!email.trim()) {
      alert("el campo E-mail esta vacio");
      e.target[7].focus();
      return;
    } else if (!expresiones.correo.test(email)) {
      alert("ingreso caracteres no validos en email");
      e.target[7].focus();
      return;
    }

    if (!contraseña.trim()) {
      alert("el campo contraseña esta vacio");
      e.target[8].focus();
      return;
    } else if (!expresiones.password.test(contraseña)) {
      alert("ingreso caracteres no validos en contraseña");
      e.target[8].focus();
      return;
    }

    if (!confContraseña.trim()) {
      alert("el campo confirmar contraseña esta vacio");
      e.target[9].focus();
      return;
    } else if (!expresiones.password.test(confContraseña)) {
      alert(
        "ingreso caracteres no validos en la confirmacion de la contraseña"
      );
      e.target[9].focus();
      return;
    }

    if (contraseña !== confContraseña) {
      alert("las contraseñas no coinciden");
      return;
    }
  };

  return (
    <div>
      <h1>Registro</h1>
      <form ref={formulario} onSubmit={handleSubmit} className="row mt-2">
        <div className="col-6">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
          />
        </div>
        <div className="col-6">
          <label className="form-label">apellido</label>
          <input
            type="text"
            className="form-control"
            name="apellido"
          />
        </div>
        <div className="col-12">
          <label className="form-label">direccion</label>
          <input
            type="text"
            className="form-control"
            name="direccion"
          />
        </div>
        <div className="col-3">
          <label className="form-label">Ciudad</label>
          <input
            type="text"
            className="form-control"
            name="ciudad"
          />
        </div>

        <div className="col-3">
          <label className="form-label">C.P.</label>
          <input
            type="text"
            className="form-control"
            name="cp"
            maxLength="5"
          />
        </div>
        <div className="col-3">
          <label className="form-label">No. de casa</label>
          <input
            type="text"
            className="form-control"
            name="noCasa"
          />
        </div>
        <div className="col-3">
          <label className="form-label">Telefono</label>
          <input
            type="text"
            className="form-control"
            name="telefono"
          />
        </div>

        <div className="col-12">
          <label className="form-label">E-mail</label>
          <input
            type="email"
            className="form-control"
            name="email"
          />
        </div>
        <div className="col-6">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            name="contraseña"
          />
        </div>
        <div className="col-6">
          <label className="form-label">Confirmar contraseña</label>
          <input
            type="password"
            className="form-control"
            name="confContraseña"
          />
        </div>
        <button type="submit" className="btn btn-success mt-4">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Registro;
