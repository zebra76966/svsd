import React from "react";
import Card from "./card";
import data from "./notMock.json";
import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";

const AllProds = (props) => {
  const products = data;
  const params = useParams();
  const { pathname } = useLocation();
  const [stoggle, setToggle] = useState(false);

  const [search, setSearch] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="container" style={{ marginTop: "150px" }}>
        <div className="row" data-aos="zoom-in">
          <div className="col-12">
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
        </div>

        <div className="row">
          {products
            .filter((e) => e.type == "course")
            .map((ini, i) => {
              if (ini.head.toLowerCase().includes(search)) {
                return (
                  <div className="col-lg-4 col-12 my-3" data-aos="fade-up">
                    <Card
                      key={i}
                      id={ini.id}
                      record={ini}
                      ogs={props.og}
                      checks={(e) => props.check(e)}
                    />
                  </div>
                );
              }
            })}
        </div>
      </div>
    </>
  );
};

export default AllProds;
