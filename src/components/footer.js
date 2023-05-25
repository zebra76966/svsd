import React from "react";
import { Link, Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark">
      <div className="container text-light">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-5 my-5 border-top">
          <div className="col mb-3">
            <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
              <img
                src="/assets/imgs/svsdW.svg"
                style={{ height: "auto", width: "200px", aspectRatio: 1 }}
              ></img>
            </a>
            <p className="text-light">© 2023 | All Rights Reserved</p>
          </div>

          <div className="col mb-3 text-start">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-light">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/gallery" className="nav-link p-0 text-light">
                  Gallery
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/all-courses" className="nav-link p-0 text-light">
                  Courses
                </Link>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://admission.svsdbhatoli.in/"
                  target="_blank"
                  className="nav-link p-0 text-light"
                >
                  Admissions
                </a>
              </li>
              <li className="nav-item mb-2">
                <Link to="/about" className="nav-link p-0 text-light">
                  About
                </Link>
              </li>
            </ul>
            <ul className="list-unstyled d-flex">
              <li>
                <a
                  className="link-dark btn btn-light border-dark border-0 border-end rounded-0"
                  href="#"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  className="link-dark btn btn-light border-dark border-0 border-start border-end rounded-0"
                  href="#"
                >
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  className="link-dark btn btn-light border-dark border-0 border-start rounded-0"
                  href="#"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <ul className="nav flex-column ">
              <li className="nav-item mb-2 ">
                <a href="https://hpuniv.ac.in/" className="nav-link p-0 text-light">
                  HPU
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://www.himtu.ac.in/" className="nav-link p-0 text-light">
                  HPTU
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="http://ignou.ac.in/" className="nav-link p-0 text-light">
                  IGNOU
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="http://icdeolhpu.org/" className="nav-link p-0 text-light">
                  ICDEOL
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://www.aicte-india.org/" className="nav-link p-0 text-light">
                  AICTE
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="https://www.antiragging.in/" className="nav-link p-0 text-light">
                  Anti - Ragging
                </a>
              </li>
            </ul>
          </div>
          <div className="col mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>

              <div className=" flex-sm-row w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button
                  className="btn text-light d-block mt-3 rounded"
                  type="button"
                  style={{ background: "#af9fff" }}
                >
                  <i className="fa fa-arrow-right"></i>
                </button>
              </div>
            </form>
          </div>
        </footer>
      </div>
      <Outlet />
    </div>
  );
};

export default Footer;
