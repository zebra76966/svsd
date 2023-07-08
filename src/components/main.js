import React from "react";
import { useState, useEffect } from "react";
import Carousel from "./carousel";
import Card from "./card";
import Cardn from "./nCard";

import ndata from "./notMock.json";
import Notify from "./nList";
import { useCookies } from "react-cookie";
import Addnotify from "./forms/notificationadd";
import { Link, Outlet, useLocation } from "react-router-dom";
import Axios from "axios";

import AddEvent from "./forms/eventadd";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

const Main = (props) => {
  const [notdataset, setNdata] = useState(ndata);
  const [mouse, setMouse] = useState(0);
  const [form, setForm] = useState("");
  const [stoggle, setToggle] = useState(false);
  const [chk, setChk] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["uToken"]);

  const loc = useLocation();
  const opac = {
    opacity: mouse,
    transition: "all 0.5s ease-in-out",
  };

  const searchToggle = {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    overflow: "auto",
    display: "flex",
    alignItems: "center",
    backdropFilter: "blur(10px)",
    zIndex: "199",
    top: "0",
    left: "0",
    transition: "all 0.5s ease-in-out",
  };

  function handleScroll(e, j) {
    if (e == "rightBtn") {
      document.getElementById(j).scrollLeft += 800;
    } else {
      document.getElementById(j).scrollLeft -= 800;
    }
  }

  const btns = {
    position: "absolute",
    width: "50px",
    zIndex: "9",
    height: "50px",
    right: "3%",
    top: "40%",
    background: "#AF9FFF",
  };
  const btne = {
    position: "absolute",
    width: "50px",
    zIndex: "9",
    height: "50px",
    left: "3%",
    top: "40%",
    background: "#AF9FFF",
  };

  useEffect(() => {
    Axios.get("https://blogpro.tech/svsdApi.php")
      .then((response) => response)
      .then((data) => {
        setNdata(data.data.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  }, [chk]);

  const [index, setIndex] = useState(-1);
  return (
    <>
      <Carousel images={true} />
      <div className="container my-5 " style={{ overflowX: "hidden" }}>
        <div className="row">
          <div className="pt-5 pb-3 col-lg-6 col-12" data-aos="fade-up">
            <h2 className="display-5 text-dark fw-bold text-start mt-5 pt-5">
              From <span style={{ color: "#af9fff" }}>Principal's Desk</span>
            </h2>
            <p className="lead py-4 opacity-75">
              I am overjoyed to present this “Handbook of Information” for admission to college
              during the academic year 2022-23.{" "}
              <span className="d-block">
                I would like to take this opportunity to extend a warm welcome to all new and
                returning students to this institution of higher learning.
              </span>
            </p>
          </div>

          <div className="col-lg-6 col-12" data-aos="fade-up">
            <img
              style={{ height: "100%", objectFit: "cover" }}
              className="img-fluid rounded shadow"
              src="/assets/imgs/p1.jpeg"
            ></img>
          </div>
        </div>
      </div>

      <div className="bg-light w-100">
        <div className="container">
          <div className="pt-5 pb-3">
            <h2 className=" display-4 text-dark fw-bold text-center mt-5 pt-5" data-aos="fade-up">
              Our <span style={{ color: "#af9fff" }}>Courses</span>
            </h2>
          </div>

          <div className="row mb-5">
            {ndata
              .filter((e) => e.type == "course")
              .slice(0, 3)
              .map((ini, i) => {
                return (
                  <div className="col-lg-4 col-12 my-3" data-aos="fade-up">
                    <Card
                      key={i}
                      id={ini.id}
                      record={ini}
                      category="Men"
                      type="Shoes"
                      ogs={props.og}
                      checks={(e) => props.check(e)}
                    />
                  </div>
                );
              })}
            <div className="col-12 my-3 d-flex justify-content-end">
              <Link to="/all-courses/" className="btn btn-lg btn-dark border-0  shadow-lg">
                Show More
                <i className="fa fa-chevron-right ps-3 align-middle" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5 pb-3" style={{ overflowX: "hidden" }}>
        <h2 className=" display-4 text-dark fw-bold text-center mt-5 pt-5" data-aos="fade-up">
          Notice <span style={{ color: "#af9fff" }}>Board</span>
        </h2>
      </div>

      <div className="bg-dark py-5 mb-5">
        <div className="container" style={{ overflowX: "hidden" }}>
          <div className="row mb-5">
            <div className="col-lg-7 col-12">
              <div className="d-flex justify-content-between align-items-center  mt-5 pb-3 pt-5">
                <h3 className=" display-6 text-light fw-bold text-start" data-aos="fade-up">
                  Upcoming Events
                </h3>
                {cookies.uToken !== undefined &&
                  localStorage.getItem("fUserName") == "superuser" && (
                    <button
                      onClick={() => {
                        setForm("event");
                        setToggle(!stoggle);
                      }}
                      className="btn btn-lg btndark text-light rounded shadow-lg fs-5"
                      style={{ background: "#af9fff" }}
                    >
                      Add
                      <i className="fa fa-plus-circle ps-2"></i>
                    </button>
                  )}
              </div>
              {notdataset.filter((e) => e.type == "event").length !== 0 ? (
                <div
                  id="carouselExampleControls"
                  class="carousel bg-none slide h-75"
                  data-bs-ride="carousel"
                  style={{ background: "none" }}
                >
                  <div class="carousel-inner">
                    {notdataset
                      .filter((e) => e.type == "event")
                      .map((ini, i) => {
                        return (
                          <div
                            class={`carousel-item ${
                              [...notdataset.filter((e) => e.type == "event")].length == 1
                                ? "active"
                                : i == 0
                                ? "active"
                                : ""
                            }`}
                          >
                            <div className="row">
                              <div className=" col-12" data-aos="fade-up">
                                <Cardn
                                  key={i}
                                  id={i}
                                  record={ini}
                                  chk={(e) => setChk(e)}
                                  og={chk}
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>

                  <button
                    class="position-absolute top-50 ms-2 btn btn-dark d-flex align-items-center px-3 py-3 rounded-circle"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="position-absolute top-50  end-0 me-2 d-flex align-items-center text-center btn btn-dark px-3 py-3 rounded-circle"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              ) : (
                <div className="h-100 d-flex align-items center py-5 opacity-75 ">
                  <h5 className="display-6 text-light fw-bold "> No Events yet </h5>
                </div>
              )}
            </div>

            <div className="col-lg-5 col-12" style={{ overflowX: "hidden" }}>
              <div className="d-flex justify-content-between align-items-center  mt-5 pb-3 pt-5">
                <h3 className=" display-6 text-light fw-bold text-start" data-aos="fade-up">
                  Notifications
                </h3>
                {cookies.uToken !== undefined &&
                  localStorage.getItem("fUserName") == "superuser" && (
                    <button
                      onClick={() => {
                        setForm("notify");
                        setToggle(!stoggle);
                      }}
                      className="btn btn-lg btndark text-light rounded shadow-lg fs-5"
                      style={{ background: "#af9fff" }}
                    >
                      Add
                      <i className="fa fa-plus-circle ps-2"></i>
                    </button>
                  )}
              </div>
              {notdataset.filter((e) => e.type == "notification").length !== 0 ? (
                <div
                  className="row"
                  style={{ maxHeight: "420px", overflowY: "scroll" }}
                  id="notficationboard"
                >
                  {notdataset
                    .filter((e) => e.type == "notification")
                    .slice(0, 10)
                    .map((ini, i) => {
                      return (
                        <div className="col-12">
                          <Notify
                            key={i}
                            id={ini.id}
                            record={ini}
                            chk={(e) => setChk(e)}
                            og={chk}
                          />
                        </div>
                      );
                    })}
                </div>
              ) : (
                <div className="h-100 d-flex align-items center py-5 opacity-75 ">
                  <h5 className="display-6 text-light fw-bold "> No Events yet </h5>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ overflowX: "hidden" }}>
        <div className="pt-5 pb-3">
          <h2 className=" display-4 text-dark fw-bold text-center " data-aos="fade-up">
            Sneek <span style={{ color: "#af9fff" }}>Peek</span>
          </h2>
        </div>
        {/* itemVid Start===> */}
        <div
          className="row h-100 align-items-center position-relative itemVid mt-5"
          data-aos="zoom-in"
          onMouseEnter={() => setMouse(1)}
          onMouseLeave={() => setMouse(0)}
        >
          <div className="col-12 ">
            <video
              muted
              loop
              poster="logo512.png"
              className=" shadow-lg rounded"
              style={{ width: "100%", objectFit: "cover" }}
              autoPlay="true"
            >
              <source src="assets/videos/3.mp4" type="video/mp4" />
            </video>
          </div>
          <div
            className=" row h-100 w-100 d-flex align-items-center h-100 position-absolute top-0 left-0 m-0 p-0"
            style={opac}
          >
            <div className="col-12 ">
              <h4 className="w-100 h-100 text-dark fw-bold display-1  fw-bold clipVid">
                SKILL UP!
              </h4>
              <Link
                to="/all-courses/"
                className="btn px-3 py-2 fs-4 shadow-lg fw-bold itemPos text-light"
                style={{ background: "#af9fff" }}
              >
                Discover Courses
                <i className="fa fa-globe ps-2"></i>
              </Link>
            </div>
          </div>
        </div>
        {/* itemVid End===> */}
      </div>
      <div className="row position-relative bg-dark mb-0 mt-5 mx-0">
        <div className="container py-4 ">
          <div
            className="imageGrid "
            style={{ position: "relative", overflowY: "hidden" }}
            id="grid1"
          >
            {notdataset
              .filter((e) => e.type == "gallery")
              .slice(0, notdataset.length)
              .map((ini, i) => {
                return (
                  <div
                    style={{ display: "inline-block", width: "350px", aspectRatio: "1" }}
                    className="p-3"
                    data-aos="fade-up"
                  >
                    <img
                      src={ini.slideData.src}
                      className="img-fluid w-100 h-100 rounded shadow"
                      onClick={() => setIndex(i)}
                      style={{ objectFit: "cover", cursor: "pointer" }}
                    />
                  </div>
                );
              })}
          </div>
          <button
            className="btn btn-dark border-0 rounded-circle shadow-lg"
            style={btns}
            onClick={() => handleScroll("rightBtn", "grid1")}
          >
            <i className="fa fa-arrow-right"></i>
          </button>

          <button
            className="btn btn-dark border-0 rounded-circle shadow-lg"
            id="leftBtn"
            style={btne}
            onClick={() => handleScroll("lefttBtn", "grid1")}
          >
            <i className="fa fa-arrow-left"></i>
          </button>

          <div className="col-12 my-3 d-flex justify-content-end">
            <Link to="/gallery" className="btn btn-lg btn-dark border-0  shadow-lg">
              Show All
              <i className="fa fa-chevron-right ps-3 align-middle" />
            </Link>
          </div>
        </div>
      </div>
      <div
        className="bg-dark  d-flex align-items-center mt-0"
        style={{
          height: "80vh",
          background:
            "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),url(/assets/imgs/1.jpg)",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container" style={{ overflowX: "hidden" }} id="about" data-aos="fade-up">
          <h2 className=" display-4 text-light fw-bold text-center mt-5 pt-lg-5 pt-1">
            About Our <span style={{ color: "#af9fff" }}>College</span>
          </h2>
          <p className="text-lead opacity-75 text-center text-light pt-lg-5 pt-3 h-100">
            The college is located on the outskirts of Naya Nangal On Nangal-Santokhgarh road, at a
            distance of 2 Km, from Mehatpur ( One of the leading industrial towns of H.P) and 3 Km
            from Nangal. This college with quiet and serene atmosphere lies in the lap of beautiful
            Shivalik Hills. This college is a service oriented instituion dedicated the the cause of
            nation’s reconstruction and to bind the youth of H.P with employment gainfully. The
            college offer professional undergraduate and post graduate coursed in B.B.A, B.C.A,PGDCA
            B.Ed, M.Com and M.Sc (Maths) apart from three years degree coursed in B.A, B.Sc, and
            B.Com. All these courses are affiliated to H.P.U. Shimla.
          </p>
        </div>
      </div>
      <div className="container ">
        <div
          id="va"
          className="d-flex justify-content-between w-100 my-5 py-2 "
          style={{ mixBlendMode: "luminosity" }}
        >
          <img src="/assets/imgs/logo1.png" style={{ aspectRatio: 1 }} className="img-fluid" />
          <img src="/assets/imgs/logo2.png" style={{ aspectRatio: 1 }} className="img-fluid" />
          <img src="/assets/imgs/logo3.png" style={{ aspectRatio: 1 }} className="img-fluid" />
          <img src="/assets/imgs/logo4.png" style={{ aspectRatio: 1 }} className="img-fluid" />
          <img src="/assets/imgs/logo5.gif" style={{ aspectRatio: 1 }} className="img-fluid" />
        </div>
      </div>

      <Outlet />
      {stoggle && (
        <div style={searchToggle} data-aos="fade-up">
          <div className="d-block w-100">
            <button
              className="btn btn-lg btn-dark fw-bold text-white rounded-circle position-absolute top-0 m-5 end-0"
              onClick={() => setToggle(!stoggle)}
              style={{ zIndex: "999" }}
            >
              <i className="fa fa-times"></i>
            </button>
            <div className=" d-block w-100 px-lg-5 px-2">
              {form === "notify" && <Addnotify chk={(e) => setChk(e)} og={chk} record={ndata} />}
              {form === "event" && <AddEvent chk={(e) => setChk(e)} og={chk} record={ndata} />}
            </div>
          </div>
        </div>
      )}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={notdataset
          .filter((e) => e.type == "gallery")
          .map((ini) => {
            return ini.slideData;
          })}
        plugins={[Captions, Fullscreen, Slideshow, Video, Zoom]}
      />
    </>
  );
};

export default Main;
