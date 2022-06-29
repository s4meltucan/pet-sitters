import React from "react";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div className="container ms-5">
      <section className="d-flex">
        <div className="container mt-5">
          <div className="row">
            <div className="col-6">
              <h2> mas que solo una mascota...</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perspiciatis cum recusandae eum laboriosam voluptatem
                repudiandae odio, vel exercitationem officiis provident minima.{" "}
              </p>
              <div className="d-flex">
                <Link to="/Cuidadores" className="btn btn-outline-primary">Contatar un cuidador</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-6"></div>
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://cdn.royalcanin-weshare-online.io/tD_vinYBRYZmsWpczp9F/v1/vf-1094-800-2jp8hg0ldqhf2p7thk7h?h=790&w=1200&la=es-ES"                                    
                    className="d-block w-100"
                    alt="perritos"
                  />
                </div>
                <div className="carousel-item">
                  <img src="https://www.fundacion-affinity.org/sites/default/files/los-10-sonidos-principales-del-perro.jpg" className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item">
                  <img src="https://envato-shoebox-0.imgix.net/4604/336d-21e9-45b2-83e3-6439537ba33f/ML1A3332+copy.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=6ac7dc4101016807a225b1e10f593615" className="d-block w-100" alt="perrito2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
