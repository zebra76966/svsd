import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const [mouse, setMouse] = useState(0);

  function handleCart(e) {
    // if (localStorage.getItem("cart") !== null) {
    //   let newItem = {
    //     itemName: props.record.product_name,
    //     itemPrice: props.record.price,
    //     itemCat: props.record.gender,
    //     itemId: props.id,
    //     itemThumb: props.record.image_urls[0],
    //   };
    //   console.log(newItem);
    //   let arr = JSON.parse(localStorage.getItem("cart"));
    //   arr = [...arr, newItem];
    //   localStorage.setItem("cart", JSON.stringify(arr));
    //   props.checks(!props.ogs);
    // } else if (localStorage.getItem("cart") == null) {
    //   let newItem = [
    //     {
    //       itemName: props.record.product_name,
    //       itemPrice: props.record.price,
    //       itemCat: props.record.gender,
    //       itemId: props.id,
    //       itemThumb: props.record.image_urls[0],
    //     },
    //   ];
    //   console.log(newItem);
    //   localStorage.setItem("cart", JSON.stringify(newItem));
    //   props.checks(!props.ogs);
    // }
  }

  return (
    <div className="card border-0 shadow h-100">
      <Link to={`/product/${props.id}`} className="link">
        <img
          src={props.record.thumb}
          className="card-img-top"
          alt="..."
          onMouseEnter={() => setMouse(1)}
          onMouseLeave={() => setMouse(0)}
        />
      </Link>
      <div className="card-body">
        <Link to={`/product/${props.id}`} className="link">
          <h5 className="card-title fw-bold text-dark text-truncate">{props.record.head}</h5>

          <h6 className="text-dark text-truncate">{props.record.descm}</h6>
          <h5 className="text-dark py-2 opacity-75 fw-bold">
            <i className="fa fa-user"></i> {props.record.seats}
          </h5>
        </Link>

        <div className="d-flex justify-content-between">
          <Link to={`/product/${props.id}`} className="btn btn-dark w-100 rounded">
            Course Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
