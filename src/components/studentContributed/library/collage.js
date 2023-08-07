import React from "react";
const Collage = () => {
  return (
    <>
      <h1>OUR LIBRARY</h1>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
              className="d-block w-100"
              alt="..."
              style={{ height: "500px", width: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrNxej_T3QS9T6zQN-FsVCBr5L_FCQQinfphZPzXgu&s"
              className="d-block w-100"
              alt="..."
              style={{ height: "500px", width: "90%", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrryUC4hXEy5cEeGMET6c4QxzgWQnjozO7WEYe5wGzqw&s"
              className="d-block w-100"
              alt="..."
              style={{ height: "500px", width: "90%", objectFit: "cover" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div class="container mt-4 pt-4">
        <h1 class="">About Library</h1>

        <div class="row">
          <div style={{ marginTop: "" }} class="col-lg-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              neque ullam voluptatibus tempore quidem eius nam! Commodi minima
              dicta sunt incidunt nihil iusto distinctio temporibus, doloremque
              corporis, aliquid cumque blanditiis.
            </p>
          </div>
          <div style={{ height: "", width: "500px" }} class="col-lg-6">
            <div className="card">
              <img
                style={{ height: "300px", width: "" }}
                src="sir.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h4 className="card-title">Librarian</h4>
                <ul className="card-text">
                  <li> Ph.D. (Lib. & Inf. Sc, Pursuing)</li>
                  <li> M.Phil, M.Lib.& Inf. Sc., UGC- NET, PGDCA</li>
                </ul>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
              </ul>
              <div className="card-body">
                <a href="#" class="card-link">
                  Card link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Collage;
