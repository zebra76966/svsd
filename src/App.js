import logo from "./logo.svg";
import "./App.css";
import Main from "./components/main";
import ProdView from "./components/itemView";

import AllProds from "./components/products";

import About from "./components/about";
import Galleria from "./components/gallery";
import "./components/master.css";
import User from "./components/user";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import { useEffect, useState } from "react";

// student contributed pages==>
import Library from "./components/studentContributed/library/library";
import NCC from "./components/studentContributed/NCC/ncc";
// Student Contrubuted pages end ==>

function App() {
  const [chk, setChk] = useState(false);
  const [confirm, setConfirm] = useState(false);

  return (
    <>
      <Router>
        {console.log(confirm)}
        <Header check={chk} />
        <Routes>
          <Route path="/" element={<Main check={(e) => setChk(e)} og={chk} />} />
          <Route path="/gallery" element={<Galleria check={(e) => setChk(e)} og={chk} />} />
          <Route path="/product/:id" element={<ProdView check={(e) => setChk(e)} og={chk} />} />
          <Route path="/all-courses/" element={<AllProds check={(e) => setChk(e)} og={chk} />} />

          <Route path="/user/:red" element={<User check={(e) => setChk(e)} og={chk} />} />
          <Route path="/about" element={<About />} />

          <Route path="/library" element={<Library />} />
          <Route path="/NCC" element={<NCC />} />
        </Routes>
        <Footer />
      </Router>

      {!confirm && (
        <>
          {" "}
          {window.location.pathname == "/library" || window.location.pathname == "/NCC" ? (
            <div className="contributer-card p-5">
              <div class="card rounded-5 border-0 shadow-lg" style={{ width: "25rem" }}>
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
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
}

export default App;
