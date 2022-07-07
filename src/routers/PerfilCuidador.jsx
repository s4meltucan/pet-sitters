import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const PerfilCuidador = () => {
  let { id } = useParams();

  const [perfil, setPerfil] = useState({});

  useEffect(() => {
    (async function f() {
      try {
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        const res = await response.json();
        setPerfil(res);
      } catch {
        return <h1>Error al cargar API</h1>;
      }
    })();
  }, []);

  const { firstName, lastName, image,  address, gender, age, ssn} = perfil;

  console.log(perfil);

  return (
    <div className="row text-center">
      <div className="col-3">
        <div className="card mb-4">
          <div className="card-body text-center">
            <img
              src={image}
              alt="avatar"
              className="rounded-circle img-fluid"
            />
            <h5 className="my-3">{firstName} {lastName}</h5>
            {/* <p className="text-muted mb-2"> {address.city}, {address.state}</p>
            <p className="text-muted"> {address.address}, {address.postalCode}</p> */}
            <div className="d-flex justify-content-center mb-2">
              <button type="button" className="btn btn-primary">
                +Seguir
              </button>
              <button type="button" className="btn btn-outline-primary ms-1">
                Contactar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-8">
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Nombre completo:</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">Johnatan Smith</p>
              </div>
              <div className="col-sm-3">
                <p className="mb-0">Edad</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{age}</p>
              </div>
              <div className="col-sm-3">
                <p className="mb-0">Sexo:</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{gender}</p>
              </div>
              <div className="col-sm-3">
                <p className="mb-0">Numero de usuario:</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{ssn}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilCuidador;
