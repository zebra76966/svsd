import React, { useEffect } from "react";
import { useState } from "react";

import ndata from "./notMock.json";
import { useParams, useLocation, Link, Outlet, location } from "react-router-dom";
import Card from "./card";

import BedAch from "./addOns/bed/bedAchievers";
const ProdView = (props) => {
  const params = useParams();

  const [curnProd, setCurrenProd] = useState({
    id: params.id !== "all" ? params.id : -1,
  });
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setCurrenProd({
      ...curnProd,
      id: params.id !== "all" ? params.id : "bca1",
    });
  }, [params]);

  const [crnt, setCrnt] = useState(0);

  const [item, setItemDesc] = useState({
    itemName: "",
    itemSize: null,
  });

  const szeStyle = {
    background: "black",
    color: "white",
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="pt-5 pb-5 col-lg-12 col-12" data-aos="zoom-out">
            <h2 className="display-5 fw-bold text-center mt-5 pt-5">
              {ndata
                .filter((e) => e.id == params.id)
                .map((ini) => {
                  return ini.title.slice(0, ini.title.indexOf(" "));
                })}
              <span style={{ color: "#af9fff" }}>
                {" "}
                {ndata
                  .filter((e) => e.id == params.id)
                  .map((ini) => {
                    return ini.title.slice(ini.title.indexOf(" "), ini.length);
                  })}
              </span>
            </h2>
            <p className="lead py-4 opacity-75 text-center">
              {ndata
                .filter((e) => e.id == params.id)
                .map((ini) => {
                  return ini.descsm;
                })}
            </p>
            <img
              src={ndata
                .filter((e) => e.id == params.id)
                .map((ini) => {
                  return ini.thumb;
                })}
              className="w-100 rounded shadow"
              style={{ objectFit: "cover", maxHeight: "500px" }}
            />
          </div>
        </div>
        <div className="row justify-content-md-between align-items-md-start" data-aos="fade-up">
          <div className="col-lg-6">
            <div className="admission_discription">
              <h4>
                {" "}
                {ndata
                  .filter((e) => e.id == params.id)
                  .map((ini) => {
                    return ini.head;
                  })}
              </h4>
              <div className="star-rating fs-5">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
              </div>

              <p>
                {ndata
                  .filter((e) => e.id == params.id)
                  .map((ini) => {
                    return ini.desc;
                  })}
              </p>
              <ul className="list-group py-3 pb-5 d-none">
                <li className="list-group-item d-flex  align-items-center">
                  <i className="fa fa-check-circle text-success pe-3" />
                  An item
                </li>
                <li className="list-group-item d-flex  align-items-center">
                  <i className="fa fa-check-circle text-success pe-3" />
                  An item
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-12" data-aos="fade-up">
            <ul className="admission_rating rounded shadow">
              <li>
                Ratings<span>:</span>
              </li>
              <li className="admission_star">5 Star</li>
              <li className="admission_star-second">
                Starts<span>:</span>
              </li>
              <li className="admission_star">August</li>
              <li>
                Duration<span>:</span>
              </li>
              <li className="admission_star">
                {" "}
                {ndata
                  .filter((e) => e.id == params.id)
                  .map((ini) => {
                    return ini.dura;
                  })}
              </li>
              <li className="admission_star-second">
                Timing<span>:</span>
              </li>
              <li className="admission_star">9 am - 2 pm</li>

              <li className="border-0">
                Seats avilable<span>:</span>
              </li>
              <li className="admission_star">
                {" "}
                {ndata
                  .filter((e) => e.id == params.id)
                  .map((ini) => {
                    return ini.seats;
                  })}
              </li>
            </ul>
            {ndata
              .filter((e) => e.id == params.id)
              .map((ini) => {
                if (ini.file !== "") {
                  return (
                    <div className=" p-3 rounded border-1 text-light d-flex align-items-center justify-content-between" style={{ background: "rgb(175, 159, 255)" }}>
                      <h5 className="m-0 p-0">More Details</h5>
                      <a className="btn btn-dark btn-lg" href={ini.file} download={ini.head}>
                        <i className="fa fa-file-pdf-o"></i>
                      </a>
                    </div>
                  );
                }
              })}
          </div>

          <div className="row mt-5">
            {ndata.map((ini) => {
              if (ini.id == params.id) {
                return ini.instructors.map((jini) => {
                  return (
                    <div className="col-lg-4 col-12  mb-5" data-aos="fade-up">
                      <div className="card w-100 border-0 shadow rounded-4 text-light h-100" style={{ background: "#af9fff" }}>
                        <img src={jini.dpimg} className="card-img-top" alt="..." style={{ height: "350px", objectFit: "cover" }} />
                        <div className="card-body py-3">
                          <h5 className="card-title py-2">{jini.name}</h5>
                          <p className="text-lead">{jini.desig}</p>
                        </div>
                      </div>
                    </div>
                  );
                });
              }
            })}
          </div>

          {/* Extras==> */}
        </div>
      </div>
      <div className="w-100 bg-dark pt-5">
        <div className="container py-4 pt-5">
          <h4 className="fs-1  text-light text-center" data-aos="fade-up">
            Young Achievers of the College <i className="fa fa-star text-warning"></i>{" "}
          </h4>
          <h5 className="fs-4 opacity-75  text-light text-center fw-light pb-4" data-aos="fade-up">
            HP TET & CTET Qualified Students (Session 2020-22 & 2021-23)
          </h5>

          {params.id == "bed1" && <BedAch />}
        </div>
      </div>
    </>
  );
};

export default ProdView;
