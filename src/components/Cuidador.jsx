import React from "react";
import {Link, Outlet} from "react-router-dom"

const Cuidador = ({ cuidador }) => {
  const { id, firstName, lastName, image, age, address } = cuidador;

  return (
    <div className="card mt-3 me-2 col-2" key={id}>
      <img src={image} alt={`image-${image}`} className="card-img-top" />
      <Link className="card-body me-2 text-decoration-none" to="/PerfilCuidador">
        <h5>
          {firstName} {lastName}
        </h5>
        <h6>
          {address.city},{address.state}
        </h6>
        <br></br>
        <h7>Rating: {age}/50</h7>
      </Link>
    </div>
  );
};

export default Cuidador;
