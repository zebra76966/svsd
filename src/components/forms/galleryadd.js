import React from "react";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Outlet, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Axios from "axios";
const GalleryAdd = (props) => {
  document.title = "Event Adder";

  const [cookies, setCookie, removeCookie] = useCookies(["uToken"]);

  const [response, setResponse] = useState([]);
  const [tresponse, setTresponse] = useState("");
  const [udata, setUdata] = useState({
    type: "gallery",
    id: "",
    slideData: {
      src: "",
      srcSet: [{}],
    },
  });

  const [isLoading, setIsloading] = useState(false);

  // Image Compression
  function compressAndConvertToBase64(image, callback) {
    var canvas = document.createElement("canvas");
    var maxWidth = 800;
    var maxHeight = 800;

    var width = image.width;
    var height = image.height;

    if (width > maxWidth || height > maxHeight) {
      if (width > height) {
        height = Math.round((height * maxWidth) / width);
        width = maxWidth;
      } else {
        width = Math.round((width * maxHeight) / height);
        height = maxHeight;
      }
    }

    canvas.width = width;
    canvas.height = height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, width, height);

    canvas.toBlob(
      function (blob) {
        var reader = new FileReader();
        reader.onloadend = function () {
          var compressedBase64 = reader.result;
          callback(compressedBase64);
        };
        reader.readAsDataURL(blob);
      },
      "image/jpeg",
      0.8
    );
  }
  // Image Compression

  useEffect(() => {
    // ID genration

    let eid = "";
    let isUnique = false;

    while (!isUnique) {
      eid = crypto.randomUUID();
      isUnique = !props.record.some((item) => item.id === eid);
    }
    console.log(eid);

    setUdata({ ...udata, id: eid });
  }, [props]);

  const handlesubmit = (e) => {
    setIsloading(true);
    e.preventDefault();
    console.log(udata);

    if (udata.contents !== "" || udata.contents !== "null") {
      console.log(udata.contents);
      const FD = new FormData();
      let stringDat = JSON.stringify(udata);
      // console.log(JSON.parse(stringDat));
      FD.append("data", stringDat);
      console.log([...FD.entries()]);

      Axios.post(
        `https://blogpro.tech/apiPhp/myFiles/svsdAdd.php?type=1&token=` + cookies.uToken,
        FD
      )
        .then((response) => {
          console.log(response);
          // setResponse(response.data.statusText);
          // setCookie("uToken", response.data.rtoken.token, { path: "/" });
          // props.udata(response.data.userData);
          // setUdata({ course: "", batch: "" });
          // e.target.FileUp.value = "";
          setIsloading(false);
          props.chk(!props.og);
          if (response.data == "Expired token") {
            toast.error("Session Expired");
            removeCookie("uToken");
          } else {
            toast.success("Added Event");
          }
        })
        .catch((error) => {
          console.log(error);
          setResponse(error.message);
          toast.error("Something Went Wrong");
          setIsloading(false);
        });
    }
  };

  return (
    <>
      {isLoading && (
        <div className="loader">
          <div className="border border-1 border-dark p-4 rounded shadow-lg">
            <h5 className="text-dark fw-bold text-center">PROCESSING</h5>
          </div>
        </div>
      )}

      <div className="card" style={{ background: "transparent", border: "none", height: "100%" }}>
        <div className="d-flex h-100 align-items-center justify-content-center">
          <form
            id="uform"
            onSubmit={handlesubmit}
            className="row g-3 col-11 col-md-5 p-4 my-5 text-dark rounded shadow-lg bg-light"
            // style={{ background: "#36393f" }}
            data-aos="fade-down"
          >
            <h3 className="fw-bold">Add Images</h3>
            {tresponse.length !== 0 && <p className="fw-bold text-info">{tresponse}</p>}
            <hr />

            <div className="col-12 my-3">
              <label for="EpImg">Image "(png, jpg - supported)":</label>
              <input
                type="file"
                onChange={(e) => {
                  if (e.target.files[0] !== undefined) {
                    let reader = new FileReader();
                    reader.addEventListener("load", () => {
                      let image = new Image();
                      image.onload = () => {
                        compressAndConvertToBase64(image, (compressedBase64) => {
                          setUdata({
                            ...udata,
                            slideData: {
                              src: compressedBase64,
                              width: 2048,
                              height: 1365,
                              srcSet: [{ src: compressedBase64, width: 320, height: 213 }],
                            },
                          });
                        });
                      };
                      image.src = reader.result;
                    });
                    reader.readAsDataURL(e.target.files[0]);
                  } else {
                    setUdata({ ...udata, src: "" });
                  }
                }}
                className="shadow rounded"
                id="EpImg"
                placeholder="Add Gallery Image"
                required
              />
              {udata.slideData.src !== "" && (
                <img
                  src={udata.slideData.src}
                  height="100"
                  width="100"
                  style={{ objectFit: "contain" }}
                />
              )}
            </div>

            <div className="col-12 py-2">
              <button type="submit" className="btn w-100 fw-bold py-2 btn-lg btn-dark">
                Add
              </button>
            </div>
            {/* <p className="lead">
              Don't have an Account?
              <Link
                to="/user/main"
                state={{ check: "SignUp" }}
                className="link-info text-decoration-none fw-bold"
              >
                {" "}
                Sign Up
              </Link>
            </p> */}
          </form>
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default GalleryAdd;
