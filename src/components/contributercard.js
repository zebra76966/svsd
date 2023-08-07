import React from "react";
import { useEffect, useState } from "react";
const ContributedCard = () => {
  const [confirm, setConfirm] = useState(false);

  if (!confirm) {
    return (
      <div className="contributer-card p-5">
        <div
          class="card rounded-5 border-0 shadow-lg"
          style={{ width: "25rem" }}
          data-aos="slide-down"
        >
          <img
            src="assets/imgs/contri.webp"
            class="card-img-top rounded-5"
            alt="..."
            style={{ maxHeight: "280px", objectFit: "contain" }}
          />
          <div class="card-body">
            <h5 class="card-title fw-bold">Become a Contributer</h5>
            <p class="card-text pb-0 mb-0">This page is part of the Student Contributions</p>
            <p class="card-text ">
              If you are interested in contributing, contact Professor{" "}
              <strong className="text-info"> Arbind Rana</strong>.
            </p>
            <button
              onClick={() => {
                setConfirm(true);
              }}
              href="#"
              class="btn btn-dark  rounded-5"
            >
              Close <i className="fa fa-times-circle ps-3"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default ContributedCard;
