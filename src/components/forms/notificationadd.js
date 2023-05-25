import React from "react";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Outlet, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Axios from "axios";
const Addnotify = (props) => {
  document.title = "Show-Editor";

  const [cookies, setCookie, removeCookie] = useCookies(["uToken"]);

  const [response, setResponse] = useState([]);
  const [tresponse, setTresponse] = useState("");
  const [udata, setUdata] = useState({
    type: "notification",
    title: "",
    date: "",
    desc: "",
    file: "",
    id: "",
  });

  const [isLoading, setIsloading] = useState(false);

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
          if (response.data == "Expired token") {
            toast.error("Session Expired");
            removeCookie("uToken");
          } else {
            toast.success("Added Notification");
          }
          props.chk(!props.og);
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
            <h3 className="fw-bold">Add Notification</h3>
            {tresponse.length !== 0 && <p className="fw-bold text-info">{tresponse}</p>}
            <hr />
            <div className="col-12">
              <label for="Username" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control bg-light text-dark shadow border-0 p-3"
                id="Username"
                autoComplete="user-name"
                placeholder="Dave Jonas"
                value={udata.title}
                onChange={(e) => setUdata({ ...udata, title: e.target.value })}
              />
            </div>
            <div className="col-12 my-3">
              <label for="EpImg">File or Image "(docx, pdf, png, jpg - supported)":</label>
              <input
                type="file"
                onChange={(e) => {
                  if (e.target.files[0] !== undefined) {
                    let reader = new FileReader();
                    reader.addEventListener("load", () => {
                      // Get the Base64-encoded string from the FileReader result
                      let base64String = reader.result;
                      setUdata({ ...udata, file: base64String });
                      // Do something with the Base64-encoded string, such as display it in an <img> tag
                    });

                    reader.readAsDataURL(e.target.files[0]);
                  } else {
                    setUdata({ ...udata, file: "" });
                  }
                }}
                className="shadow rounded"
                id="EpImg"
                placeholder="Upload Signature"
                required
              />
            </div>
            <div className="col-12">
              <label for="description" className="form-label">
                Description
              </label>
              <textarea
                rows="4"
                cols="50"
                className="form-control bg-light text-dark shadow border-0 p-3"
                id="description"
                autoComplete="description"
                placeholder="Some Description..."
                value={udata.desc}
                onChange={(e) => setUdata({ ...udata, desc: e.target.value })}
              />
            </div>
            <div className="col-md-6 col-12">
              <label for="date" className="form-label">
                Date
              </label>
              <input
                type="date"
                className="form-control bg-light text-dark shadow border-0 p-3"
                id="date"
                autoComplete="date"
                value={udata.date}
                onChange={(e) => setUdata({ ...udata, date: e.target.value })}
              />
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
export default Addnotify;
