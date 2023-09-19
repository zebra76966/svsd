import React from "react";
import data from "./bedAchievers.json";
import { useState } from "react";

const BedAch = () => {
  const stuDat = data;
  const [len, setLen] = useState(false);

  return (
    <div className="row mt-5 ">
      {console.log(stuDat)}
      {stuDat.slice(0, len ? stuDat.length : 3).map((ini) => {
        return (
          <div className="col-lg-4 col-12  mb-5" data-aos="fade-up">
            <div className="card w-100 border-0 shadow rounded-4 text-light h-100 bg-dark">
              <img src={"/assets/students/bed/" + ini.img} className="card-img-top" alt="..." style={{ height: "350px", objectFit: "cover" }} />
              <div className="card-body py-3">
                <h5 className="card-title py-2">{ini.name}</h5>
                <p className="text-lead pt-1 mt-0">{ini.year}</p>
                <h5 className="card-title py-2">{ini.exam}</h5>
              </div>
            </div>
          </div>
        );
      })}
      <div className="w-100 col-12 text-center">
        <button
          className="btn text-light btn-lg  shadow-lg"
          style={{ background: "#af9fff" }}
          onClick={() => {
            setLen(!len);
          }}
        >
          {!len && (
            <>
              Show All <i className="fa fa-angle-down"></i>
            </>
          )}

          {len && (
            <>
              Show Less <i className="fa fa-angle-up"></i>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default BedAch;
