import React, { useState } from "react";
import Axios from "axios";
import { useCookies } from "react-cookie";
import toast, { Toaster } from "react-hot-toast";

const Notify = (props) => {
  const [notoggle, setNotoggle] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["uToken"]);
  const [response, setResponse] = useState([]);
  const [tresponse, setTresponse] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const base64Data = props.record.file;

  let contentType = base64Data.substring(base64Data.indexOf(":") + 1, base64Data.indexOf(";"));
  let base64Content = base64Data.substring(base64Data.indexOf(",") + 1);

  // Create a Blob object from the base64 data
  let blob = b64toBlob(base64Content);

  // Create a download link

  let downloadLink = URL.createObjectURL(blob);
  let downloadName = props.record.title + "." + contentType.split("/")[1];

  // Convert base64 to Blob
  function b64toBlob(b64Data) {
    let byteCharacters = decodeBase64(b64Data);
    let byteArrays = [new Uint8Array(byteCharacters.length)];

    for (let i = 0; i < byteCharacters.length; i++) {
      byteArrays[0][i] = byteCharacters[i];
    }

    return new Blob(byteArrays, { type: contentType });
  }

  // Decode base64 to byte array
  function decodeBase64(base64Data) {
    let padding = "=".repeat((4 - (base64Data.length % 4)) % 4);
    let base64 = (base64Data + padding).replace(/-/g, "+").replace(/_/g, "/");

    let rawData = window.atob(base64);
    let dataLength = rawData.length;
    let uint8Array = new Uint8Array(dataLength);

    for (var i = 0; i < dataLength; ++i) {
      uint8Array[i] = rawData.charCodeAt(i);
    }

    return uint8Array;
  }

  function handleDelete() {
    setIsloading(true);

    Axios.post(
      `https://blogpro.tech/apiPhp/myFiles/svsdAdd.php?type=2&id=${props.record.id}&token=` +
        cookies.uToken
    )
      .then((response) => {
        console.log(response);
        setIsloading(false);
        if (response.data == "Expired token") {
          toast.error("Session Expired");
          removeCookie("uToken");
        } else {
          toast.success("Deleted Notification");
        }
        props.chk(!props.og);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something Went Wrong");
        setIsloading(false);
      });
  }

  return (
    <>
      {console.log(props.record.id)}
      {notoggle && (
        <div
          data-aos="fade-in"
          className="w-100 p-5 d-flex align-items-center justify-content-center"
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            zIndex: "999",
            background: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(1px)",
          }}
        >
          <i
            style={{ cursor: "pointer" }}
            className="bg-dark p-3 m-5 fs-5 rounded-circle text-light position-fixed top-0 end-0 fa fa-times"
            onClick={() => setNotoggle(!notoggle)}
          ></i>
          <div className="bg-dark rounded-3 text-light p-5" data-aos="zoom-in">
            <h5 className=" fw-bold ">{props.record.title}</h5>
            <p className="lead py-2">{props.record.desc}</p>
            <h5 className=" py-2 opacity-75 fw-bold">
              <i className="fa fa-clock-o"></i> {props.record.date}
            </h5>
            <a
              className="btn rounded d-block"
              style={{ background: "#af9fff" }}
              href={downloadLink}
              download={downloadName}
            >
              Download <i className="fa fa-download "></i>
            </a>
          </div>
        </div>
      )}
      <div className="d-flex justify-content-between align-items-center bg-dark text-light mb-3 rounded-4 shadow p-3">
        <h5
          className=" fw-bold text-truncate w-50"
          style={{ cursor: "pointer" }}
          onClick={() => setNotoggle(!notoggle)}
        >
          {props.record.title}
        </h5>
        <div class="vr"></div>

        <h6
          className=" py-2 opacity-75 fw-bold"
          style={{ cursor: "pointer" }}
          onClick={() => setNotoggle(!notoggle)}
        >
          <i className="fa fa-clock-o"></i> {props.record.date}
        </h6>
        <div class="vr"></div>

        <a
          className="btn rounded"
          style={{ background: "#af9fff" }}
          href={downloadLink}
          download={downloadName}
        >
          <i className="fa fa-download "></i>
        </a>
        {cookies.uToken !== undefined && localStorage.getItem("fUserName") == "superuser" && (
          <button
            id={props.record.id}
            onClick={handleDelete}
            className="btn rounded btn-danger"
            disabled={isLoading}
          >
            {isLoading ? <i class="fa fa-spinner fa-spin"></i> : <i className="fa fa-trash-o "></i>}
          </button>
        )}
      </div>
    </>
  );
};

export default Notify;
