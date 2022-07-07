import React, { useEffect, useState } from "react";
import Cuidador from "../components/Cuidador";

const Cuidadores = () => {
  const [data, setData] = useState([]);
  const [error, SetError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async function f() {
      try {
        const response = await fetch('https://dummyjson.com/users/');
        const res = await response.json();
        setData(res.users);
      } catch (error) {
        SetError("Error de servidor");
      }
    })();
  }, []);

  if (error !== "") return <h2>{error}</h2>;

  const handleChange = (e) => {
    const expReg = /^[a-zA-Z]+$/;

    if (e.target.value !== "") {
      expReg.test(e.target.value)
        ? setSearch(e.target.value)
        : alert("ingrese solo letras");
    }
  }; 

  const resultados = !search
    ? data
    : data.filter(
        (item) =>
          item.firstName.toLowerCase().includes(search.toLowerCase()) ||
          item.lastName.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <>
      <div className="row">
        <div className="col-6">
          <h1>Cuidadores Disponibles</h1>
        </div>
        <div className="col-6 mt-2">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              name="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleChange}
              value={search.value}
            />
            
          </form>
        </div>
      </div>

      <div className="row">
        {resultados.map((i) => (
          <Cuidador key={i.id} cuidador={i} />
        ))}
      </div>
    </>
  );
};

export default Cuidadores;
