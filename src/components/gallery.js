import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import toast, { Toaster } from "react-hot-toast";
import Axios from "axios";

import ndata from "./notMock.json";

import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import GalleryAdd from "./forms/galleryadd";

const Galleria = (props) => {
  const [notdataset, setNdata] = useState(ndata);
  const { pathname } = useLocation();
  const [index, setIndex] = useState(-1);
  const [form, setForm] = useState("");
  const [stoggle, setToggle] = useState(false);
  const [chk, setChk] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["uToken"]);
  const [isLoading, setIsloading] = useState(false);
  const [isLoadingm, setIsloadingm] = useState(false);

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

  useEffect(() => {
    setIsloadingm(true);
    Axios.get("https://blogpro.tech/svsdApi.php")
      .then((response) => response)
      .then((data) => {
        setNdata(data.data.reverse());
        setIsloadingm(false);
      })
      .catch((error) => {
        console.log(error);
        setIsloadingm(false);
      });
  }, [chk]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  function handleDelete(e) {
    // setIsloading(true);
    console.log(e);

    Axios.post(`https://blogpro.tech/apiPhp/myFiles/svsdAdd.php?type=2&id=${e}&token=` + cookies.uToken)
      .then((response) => {
        console.log(response);
        setIsloading(false);
        if (response.data == "Expired token") {
          toast.error("Session Expired");
          removeCookie("uToken");
        } else {
          toast.success("Deleted Image");
        }
        setChk(!chk);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something Went Wrong");
        setIsloading(false);
      });
  }

  return (
    <>
      {isLoadingm && (
        <div className="loader">
          <div className="border border-1 border-dark p-4 rounded shadow-lg">
            <img src="/assets/imgs/svsdBW.svg" className="img-fluid" />
            <h5 className="text-dark fw-bold text-center">PROCESSING</h5>
          </div>
        </div>
      )}

      {/* {console.log((dataset.filter(e=>e.type=="gallery").length-1))} */}
      <div style={{ marginTop: "100px" }} className="bg-dark py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center  pt-2 pb-3">
            <h2 className="display-5 text-light fw-bold text-start " data-aos="zoom-out">
              College's <span style={{ color: "#af9fff" }}>Gallery</span>
            </h2>
            {cookies.uToken !== undefined && localStorage.getItem("fUserName") == "superuser" && (
              <button
                onClick={() => {
                  setForm("gallery");
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
          <div className="row">
            <div className="col-md-4 col-12 pe-0">
              {notdataset
                .filter((e) => e.type == "gallery")
                .slice(0, Math.ceil(notdataset.length / 3) - 1)
                .map((ini, i) => {
                  return (
                    <>
                      <img src={ini.slideData.src} onClick={() => setIndex(i)} className="img-fluid pb-2  w-100 rounded-4 shadow" data-aos="fade-up" />
                      {cookies.uToken !== undefined && localStorage.getItem("fUserName") == "superuser" && (
                        <button id={ini.id} onClick={() => handleDelete(ini.id)} className="btn rounded btn-danger" disabled={isLoading}>
                          {isLoading ? <i class="fa fa-spinner fa-spin"></i> : <i className="fa fa-trash-o "></i>}
                        </button>
                      )}
                    </>
                  );
                })}
            </div>
            <div className="col-md-4 col-12 pe-0">
              {notdataset
                .filter((e) => e.type == "gallery")
                .slice(Math.ceil(notdataset.length / 3) - 1, 2 * Math.floor(notdataset.length / 3))
                .map((ini, i) => {
                  return (
                    <>
                      <img src={ini.slideData.src} onClick={() => setIndex(i)} className="img-fluid pb-2  w-100 rounded-4 shadow" data-aos="fade-up" />
                      {cookies.uToken !== undefined && localStorage.getItem("fUserName") == "superuser" && (
                        <button id={ini.id} onClick={() => handleDelete(ini.id)} className="btn rounded btn-danger" disabled={isLoading}>
                          {isLoading ? <i class="fa fa-spinner fa-spin"></i> : <i className="fa fa-trash-o "></i>}
                        </button>
                      )}
                    </>
                  );
                })}
            </div>
            <div className="col-md-4 col-12 pe-0">
              {notdataset
                .filter((e) => e.type == "gallery")
                .slice(2 * Math.floor(notdataset.length / 3), notdataset.length)
                .map((ini, i) => {
                  return (
                    <>
                      <img src={ini.slideData.src} onClick={() => setIndex(i)} className="img-fluid pb-2  w-100 rounded-4 shadow" data-aos="fade-up" />
                      {cookies.uToken !== undefined && localStorage.getItem("fUserName") == "superuser" && (
                        <button id={ini.id} onClick={() => handleDelete(ini.id)} className="btn rounded btn-danger" disabled={isLoading}>
                          {isLoading ? <i class="fa fa-spinner fa-spin"></i> : <i className="fa fa-trash-o "></i>}
                        </button>
                      )}
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <Outlet />

      {stoggle && (
        <div style={searchToggle} data-aos="fade-up">
          <div className="d-block w-100">
            <button className="btn btn-lg btn-dark fw-bold text-white rounded-circle position-absolute top-0 m-5 end-0" onClick={() => setToggle(!stoggle)} style={{ zIndex: "999" }}>
              <i className="fa fa-times"></i>
            </button>
            <div className=" d-block w-100 px-lg-5 px-2">{form === "gallery" && <GalleryAdd chk={(e) => setChk(e)} og={chk} record={ndata} />}</div>
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

export default Galleria;
