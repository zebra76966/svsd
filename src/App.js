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
import NCC from "./components/studentContributed/NCC/ncc1";
// Student Contrubuted pages end ==>

function App() {
  const [chk, setChk] = useState(false);

  return (
    <>
      <Router>
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
    </>
  );
}

export default App;
