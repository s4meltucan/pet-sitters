import React, { useEffect, useState } from "react";
import Cuidador from "../components/Cuidador";

const Cuidadores = () => {
  const [data, SetData] = useState([]);
  const [error, SetError] = useState("");
  const [search, setSearch] = useState({});

  useEffect(() => {
    (async function f() {
      try {
        const response = await fetch(`https://dummyjson.com/users`);
        const res = await response.json();
        SetData(res.users);
      } catch (error) {
        SetError("Error de servidor");
      }
    })();
  }, []);

  if (error !== "") return <h2>{error}</h2>;

  const handleChange = (e) => {
    setSearch({ value: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="row">
        <div className="col-6">
          <h1>Cuidadores Disponibles</h1>
        </div>
        <div className="col-6 mt-2">
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              name="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleChange}
              value={search.value}
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>

      <div>
        
      </div>

      <div className="row">
        {data.map((i) => (
          <Cuidador key={i.id} cuidador={i} />
        ))}
      </div>
    </>
  );
};

export default Cuidadores;
