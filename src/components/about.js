import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";

const About = () => {
  const [rimages, setRimages] = useState([{}]);

  return (
    <>
      {" "}
      <div>
        <div
          className="bg-dark  d-flex align-items-center mt-0"
          style={{
            height: "100vh",
            background:
              "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),url(/assets/imgs/1.jpg)",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container" style={{ overflowX: "hidden" }} id="about">
            <h2 className=" display-4 text-light fw-bold text-center mt-5 pt-5" data-aos="zoom-out">
              About Our <span style={{ color: "#af9fff" }}>College</span>
            </h2>
            <p className="text-lead opacity-75 text-center text-light pt-5" data-aos="fade-up">
              The college is located on the outskirts of Naya Nangal On Nangal-Santokhgarh road, at
              a distance of 2 Km, from Mehatpur ( One of the leading industrial towns of H.P) and 3
              Km from Nangal. This college with quiet and serene atmosphere lies in the lap of
              beautiful Shivalik Hills. This college is a service oriented instituion dedicated the
              the cause of nation’s reconstruction and to bind the youth of H.P with employment
              gainfully. The college offer professional undergraduate and post graduate coursed in
              B.B.A, B.C.A,PGDCA B.Ed, M.Com and M.Sc (Maths) apart from three years degree coursed
              in B.A, B.Sc, and B.Com. All these courses are affiliated to H.P.U. Shimla.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
