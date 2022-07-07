import React from "react";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <>
      <div className="container px-5">
        <div className="row gx-5 align-items-center justify-content-center">
          <div className="col-lg-8 col-xl-7 col-xxl-6">
            <div className="my-5 text-center text-xl-start">
              <h1 className="display-5 fw-bolder mb-2">
                Porque sabemos que, no es solo una mascota...
              </h1>
              <p className="lead fw-normal mb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
                tenetur corrupti fugiat facilis eos ullam nulla laudantium
                mollitia ipsa! Asperiores ratione quibusdam, sint cupiditate
                dolor animi deleniti unde ea quidem.
              </p>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                <Link
                  to="/Cuidadores"
                  className="btn btn-primary btn-lg px-4 me-sm-3"
                >
                  Contrata un cuidador
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
            <img
              className="img-fluid rounded-3 my-5"
              src="https://cdn.royalcanin-weshare-online.io/tD_vinYBRYZmsWpczp9F/v1/vf-1094-800-2jp8hg0ldqhf2p7thk7h?h=790&w=1200&la=es-ES"
              alt="..."
            />
          </div>
        </div>
      </div>
      <section className="py-5">
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h2 className="fw-bolder mb-0 text-end">
                Ellos tambien son un integrante mas de la familia
              </h2>
            </div>
            <div className="col-lg-8">
              <div className="row gx-5 row-cols-1 row-cols-md-2">
                <div className="col mb-5 h-100">
                  <h2 className="h5">Caracteriztica</h2>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo libero eos id sit earum voluptatum repellat voluptatem
                  </p>
                </div>
                <div className="col mb-5 h-100">
                  <h2 className="h5">Caracteriztica</h2>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo libero eos id sit earum voluptatum repellat voluptatem
                  </p>
                </div>
                <div className="col mb-5 mb-md-0 h-100">
                  <h2 className="h5">Caracteriztica</h2>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo libero eos id sit earum voluptatum repellat voluptatem
                  </p>
                </div>
                <div className="col h-100">
                  <h2 className="h5">Caracteriztica</h2>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo libero eos id sit earum voluptatum repellat voluptatem
                    t.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center mb-3">
            <div className="col-lg-8 col-xl-6">
              <div className="text-center">
                <h2 className="fw-bolder">
                  La mejor platoforma segun nuestra reseñas
                </h2>
              </div>
            </div>
          </div>
          <div className="row gx-5">
            <div className="col-lg-4 mb-5">
              <div className="card h-100 shadow border-0">
                <img
                  className="card-img-top"
                  width="400px"
                  height="200px"
                  src="https://ichef.bbci.co.uk/news/640/cpsprodpb/4492/production/_92945571_bbc-vsd-123.jpg"
                  alt="..."
                />
                <div className="card-body p-4">
                  <a
                    className="text-decoration-none link-dark stretched-link"
                    href="#!"
                  >
                    <h5 className="card-title mb-3">Simple y grandiosa</h5>
                  </a>
                  <p className="card-text mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil iste consequuntur adipisci necessitatibus voluptate
                    delectus tempore fugiat tempora!.
                  </p>
                </div>
                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                  <div className="d-flex align-items-end justify-content-between">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle me-3"
                        src="https://dummyimage.com/40x40/ced4da/6c757d"
                        alt="..."
                      />
                      <div className="small">
                        <div className="fw-bold">José Rodriguez</div>
                        <div className="text-muted">Mayo 12, 2022;</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="card h-100 shadow border-0">
                <img
                  className="card-img-top"
                  width="400px"
                  height="200px"
                  src="https://previews.123rf.com/images/lopolo/lopolo1709/lopolo170908549/86686268-un-perro-con-mujer-est%C3%A1-posando-en-estudio-aislado-en-fondo-blanco.jpg"
                  alt="..."
                />
                <div className="card-body p-4">
                  <a
                    className="text-decoration-none link-dark stretched-link"
                    href="#!"
                  >
                    <h5 className="card-title mb-3">
                      Mi mascota en las mejores manos
                    </h5>
                  </a>
                  <p className="card-text mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil iste consequuntur adipisci necessitatibus voluptate
                    delectus tempore fugiat tempora!.
                  </p>
                </div>
                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                  <div className="d-flex align-items-end justify-content-between">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle me-3"
                        src="https://dummyimage.com/40x40/ced4da/6c757d"
                        alt="..."
                      />
                      <div className="small">
                        <div className="fw-bold">Josiah Barclay</div>
                        <div className="text-muted">Marzo 23, 2022</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="card h-100 shadow border-0">
                <img
                  className="card-img-top"
                  width="400px"
                  height="200px"
                  src="https://www.lavanguardia.com/files/article_main_microformat/uploads/2021/01/25/600f3ddb8f5e7.jpeg"
                  alt="..."
                />
                <div className="card-body p-4">
                  <a
                    className="text-decoration-none link-dark stretched-link"
                    href="#!"
                  >
                    <h5 className="card-title mb-3">
                      Una de las mejores opcion calidad-precio
                    </h5>
                  </a>
                  <p className="card-text mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil iste consequuntur adipisci necessitatibus voluptate
                    delectus tempore fugiat tempora!.
                  </p>
                </div>
                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                  <div className="d-flex align-items-end justify-content-between">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle me-3"
                        src="https://dummyimage.com/40x40/ced4da/6c757d"
                        alt="..."
                      />
                      <div className="small">
                        <div className="fw-bold">Evelyn Martinez</div>
                        <div className="text-muted">Abril 2, 2022</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Inicio;
