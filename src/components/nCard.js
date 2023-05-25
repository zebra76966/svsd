import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useCookies } from "react-cookie";
import Axios from "axios";

const Cardn = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(["uToken"]);
  const [response, setResponse] = useState([]);
  const [tresponse, setTresponse] = useState("");
  const [isLoading, setIsloading] = useState(false);

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
          toast.success("Deleted Event");
        }
        props.chk(!props.og);
        // window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something Went Wrong");
        setIsloading(false);
      });
  }

  return (
    <>
      <div className="card  h-100 bg-dark text-light">
        <img
          src={props.record.img}
          className="card-img-top rounded-5 bg-none "
          style={{ objectFit: "cover", height: "290px" }}
          alt="..."
        />

        <div className="card-body text-light">
          <div className="d-flex justify-content-between">
            <h5 className="card-title fw-bold">{props.record.title}</h5>
            {cookies.uToken !== undefined && localStorage.getItem("fUserName") == "superuser" && (
              <button
                id={props.record.id}
                onClick={handleDelete}
                className="btn rounded btn-danger"
                disabled={isLoading}
              >
                {isLoading ? (
                  <i class="fa fa-spinner fa-spin"></i>
                ) : (
                  <i className="fa fa-trash-o "></i>
                )}
              </button>
            )}
          </div>

          <h5 className=" py-2 opacity-75 fw-bold">
            <i className="fa fa-clock-o"></i> {props.record.date}
          </h5>
        </div>
      </div>
    </>
  );
};

export default Cardn;
