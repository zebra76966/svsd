import React, { useEffect, useState } from "react";
import data from "./notMock.json";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import toast, { Toaster } from "react-hot-toast";

const searchToggle = {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  backdropFilter: "blur(10px)",
  zIndex: "199",
  top: "0",
  left: "0",
  transition: "all 0.5s ease-in-out",
};

const Header = (props) => {
  const loc = useLocation();
  const [stoggle, setToggle] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["uToken"]);

  const [search, setSearch] = useState("");

  const [cart, setCart] = useState({});

  const [cPage, setPage] = useState("");

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, [props.check]);

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Toaster />

      <nav
        className={`navbar navbar-expand-lg py-lg-4 px-lg-3 ${
          offset > 200 || loc.pathname !== "/"
            ? "navbar-light bg-light shadow-lg"
            : "navbar-dark bg-none "
        }`}
        style={{
          transition: "all 0.5s ease-in-out",
          top: offset > 200 || loc.pathname !== "/" ? "0" : "2%",
        }}
      >
        <div className="container-fluid d-flex justify-content-between">
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse w-100 " id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0 mx-auto d-flex align-items-center">
              <li className="nav-item">
                <a
                  href="https://admission.svsdbhatoli.in/"
                  target="_blank"
                  className={`nav-link ${cPage == "Ethnics" ? "active" : ""}`}
                  onClick={() => setPage("Ethnics")}
                >
                  Addmissions
                </a>
              </li>
              <li className="nav-item">
                <Link
                  to="/all-courses/"
                  className={`nav-link ${cPage == "Shop All" ? "active" : ""}`}
                  onClick={() => setPage("Shop All")}
                >
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="navbar-brand align-middle m-0" onClick={() => setPage("/")}>
                  <img
                    src={`/assets/imgs/${
                      offset > 200 || loc.pathname !== "/" ? "svsdBW.svg" : "svsdW.svg"
                    }`}
                    className="img-fluid m-0 p-0"
                    style={{
                      aspectRatio: 1,
                      height: offset > 200 || loc.pathname !== "/" ? "50px" : "200px",
                      width: "auto",
                      transition: "all 0.5s ease-in-out",
                    }}
                  />
                </Link>
              </li>

              <li className="nav-item ps-0 ms-0">
                <Link
                  to="/"
                  className={`nav-link ${cPage == "kids" ? "active" : ""}`}
                  onClick={() => setPage("kids")}
                >
                  NCTE
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/gallery"
                  className={`nav-link ${cPage == "gallery" ? "active" : ""}`}
                  onClick={() => setPage("gallery")}
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className={`nav-link ${cPage == "about" ? "active" : ""}`}
                  onClick={() => setPage("about")}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div
            className={`bag px-3 fs-5 d-flex justify-content-between 
          ${
            offset > 200 || loc.pathname !== "/" ? "text-dark" : "text-light"
          } fs-4 position-absolute end-0  pe-4 align-items-center`}
            style={{ top: offset > 200 || loc.pathname !== "/" ? "21%" : "40%" }}
          >
            {/* <div className="position-relative ">
              <Link to="/cart" className="link text-dark">
                {cart !== null && (
                  <span
                    className="position-absolute bg-warning text-light rounded-circle fw-bold top-0 border-1 border-light"
                    style={{
                      height: "20px",
                      width: "20px",
                      textAlign: "center",
                      right: "-10px",
                      fontSize: "14px",
                    }}
                  >
                    {cart.length < 10 ? cart.length : `9+`}
                  </span>
                )}

                <i className="fa fa-shopping-bag" style={{ cursor: "pointer" }}></i>
              </Link>
            </div> */}
            {cookies.uToken !== undefined && cookies.uToken.length !== 0 && (
              <i
                className="fa fa-sign-out mx-4"
                onClick={() =>
                  toast((t) => (
                    <span>
                      {window.location.pathname == "/confirm-order" && (
                        <>
                          <b className="pe-2">Can not logout at Checkout </b>
                          <a className="btn bg-dark text-light" onClick={() => toast.dismiss(t.id)}>
                            <i className="fa fa-times"></i>
                          </a>
                        </>
                      )}
                      {window.location.pathname !== "/confirm-order" && (
                        <>
                          <b>Log Out? </b>
                          <a
                            className="btn bg-info text-light  mx-2"
                            onClick={() => {
                              removeCookie("uToken");
                              toast.dismiss(t.id);
                              window.location.reload();
                            }}
                          >
                            <i className="fa fa-check"></i>
                          </a>
                          <a className="btn bg-dark text-light" onClick={() => toast.dismiss(t.id)}>
                            <i className="fa fa-times"></i>
                          </a>
                        </>
                      )}
                    </span>
                  ))
                }
                style={{ cursor: "pointer" }}
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Logout"
              ></i>
            )}
            {cookies.uToken == undefined && (
              <Link
                to="/user/main"
                className={` link ${
                  offset > 200 || loc.pathname !== "/" ? "text-dark" : "text-light"
                }`}
              >
                <i className="fa fa-user mx-4" style={{ cursor: "pointer" }}></i>
              </Link>
            )}
            <i
              className="fa fa-search"
              onClick={() => setToggle(!stoggle)}
              style={{ cursor: "pointer" }}
            ></i>
          </div>
        </div>
      </nav>
      {stoggle && (
        <div style={searchToggle} data-aos="fade-up">
          <div className="d-block w-100">
            <button
              className="btn btn-lg btn-dark fw-bold text-white rounded-circle position-absolute top-0 m-5 end-0"
              onClick={() => setToggle(!stoggle)}
            >
              X
            </button>
            <div className=" d-block w-100 px-lg-5 px-2">
              <form className="d-flex pe-0 w-100 mx-auto shadow-lg">
                <input
                  className="form-control  rounded-0 rounded-start  py-3 shadow-sm"
                  type="search"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button className="btn btn-dark rounded-0 rounded-end" type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
            <div className="suggestionBox d-block px-lg-5 px-2">
              {data
                .filter((e) => e.type == "course")
                .map((pini, i) => {
                  if (pini.head.toLowerCase().includes(search) && search.length !== 0) {
                    return (
                      <Link to={`/product/${pini.id}`} className="link">
                        <div
                          className="sBox text-dark bg-light w-100 mx-auto d-flex align-items-center justify-content-between p-3 border border-1"
                          onClick={() => setToggle(!stoggle)}
                        >
                          <img
                            src={"https://picsum.photos/seed/picsum/200"}
                            style={{ width: "10%" }}
                          />
                          {pini.head}
                          <span>{pini.title}</span>
                        </div>
                      </Link>
                    );
                  }
                })}
            </div>
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default Header;
