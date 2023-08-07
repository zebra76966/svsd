import React from "react";
const Library = () => {
  return (
    <div style={{ marginTop: "150px" }} data-aos="fade-up">
      <h1 style={{ textAlign: "center" }}>OUR LIBRARY</h1>
      <div className="container-fluid">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                style={{ height: "70vh", objectFit: "cover", width: "100%" }}
                src="assets/contributedAssets/library/m1.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                style={{ height: "70vh", objectFit: "cover", width: "100%" }}
                src="assets/contributedAssets/library/v2.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                style={{ height: "70vh", objectFit: "cover", width: "100%" }}
                src="assets/contributedAssets/library/lib1.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container mt-2 pt-5">
        <div className="row">
          <div className="col-lg-6 ">
            <div className="row">
              <h1 style={{ backgroundColor: "Highlight", textAlign: "center" }} className=" mb-5">
                ABOUT LIBRARY
              </h1>

              <p>
                The S.V.S.D P.G. College library is considered as the heart of academics and acted
                as knowledge resource center which caters the academic needs of around 1500
                students. Our library has 25 Magazines, More than 15 Newspapers and a stock of more
                than 29350 books, Periodicals, National and International Journals, online Databases
                like INFLIBNET (N-List) program in which access to 80409+ E- books and 3828 E-
                journals for updating the knowledge of students and the staff of the college. The
                library provides a peaceful environment that is both stimulating and relaxing for
                academic exercise. To facilitate better referencing, library has two units, one for
                UG and other for PG & professional. The library collection is classified with Dewey
                decimal classification scheme (DDC 23rd Edition), The Library automation is going to
                work with the support of the library committee.
              </p>
              <div className="row">
                <h4 style={{ marginTop: "20px" }}>
                  Trying to fulfil all five laws of Library Science :-
                </h4>
                <ul style={{ marginLeft: "20px" }}>
                  <li>
                    <h6>Books are for Use.</h6>
                  </li>
                  <li>
                    <h6>Every Reader His/her Book.</h6>
                  </li>
                  <li>
                    <h6> Every Book its reader.</h6>
                  </li>
                  <li>
                    <h6>Save the time of the reader.</h6>
                  </li>
                  <li>
                    <h6>The Library is a growing organism.</h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="row">
              <img
                style={{
                  height: "400px",
                  width: "400px",
                }}
                src="assets/contributedAssets/library/a2.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>

            <div className="row">
              <h3 style={{ textAlign: "justify" }}>MR. SUNIL</h3>
              <img
                style={{
                  height: "400px",
                  width: "400px",

                  marginTop: "20px",
                }}
                src="assets/contributedAssets/library/a3.jpg"
                className="card-img-top"
                alt="..."
              />
              <h3>SMT. Ranjeet KAUR</h3>
            </div>
          </div>
        </div>

        <h1 className="head2 mt-3">LIBRARY staff:</h1>

        <div className="tablebody">
          <table className="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Designation</th>
                <th scope="col">Qualification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mr. Sunil</td>
                <td>Librarian</td>
                <td>M.Phil, M.Lib& Inf.Sc.,UGC-NET,PGDCA</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Smt. Ranjeet kaur</td>
                <td>Librarian</td>
                <td>M.Lib</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Smt. Anita Devi</td>
                <td>Librarian Attendant</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 style={{ backgroundColor: "aqua", marginTop: "20px" }} className="head3">
          LIBRARY RULES FOR STUDENTS{" "}
        </h3>
        <div className="information">
          <p>
            1. Every student must his/her ID Card while making use of the library and produce the
            same to the library Staff on entering the library.
          </p>
          <p>
            2. Students can get any book i.e. Textbooks, reference books, Reference sources, Bound
            Volumes, Magazines for reading in the reading room against his/her library Identity
            card.
          </p>
          <p>
            3. Students can borrow only two books on one ID card and keep the book for the specified
            number of days.
          </p>
          <p>
            4. Newspapers and Periodicals are issued against library identity card for reading in
            the Reading Room. Bound volumes of journals will be issued for current reading.
          </p>
          <p>5. C. Ds will be issued to students of respective subjects on overnight basis.</p>
          <p>
            6. When books are issue students should check the pages are found missing, they should
            report the same to the Librarian before leaving the counter. On returning the books if
            pages are found missing the last borrower of the book shall be held accountable for the
            missing pages and shall accordingly are fined.
          </p>
          <p>
            7. It is observed that some of the students do not return the library books on or before
            the due date on the date slip on the book, the fine charge will be as follows: a.
            Fifteen days after the due date Rs. 1/- per day per Book LIBRARY RULES FOR STUDENTS
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <img
                style={{ height: "600px", width: "500px" }}
                src="assets/contributedAssets/library/no.jpg"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="info">
              <h2 style={{ color: "aqua" }}>LIBRARY SERVICES & FACILITIES</h2>
              <div>
                <p> The library caters to the students and staff members of the college.</p>
                <p>  Reference Service.</p> <p> Bibliographic Service.</p>
                <p> Current Awareness Service.</p> <p>  User Education.</p>
                <p>
                   The members of the library can borrow books, periodicals and CDs from the
                  library.
                </p>
                <p>
                   The students are guided for their projects and assignments. The library also
                  provides reference services.
                </p>
                <p>
                   The library has a CAS in form of new additions list and the new titles are on
                  display in the library to have readership for the same in addition to a
                  bibliographic service on current topics.
                </p>
                <p>
                   College is an institutional member of NLIST so that the students and staff
                  members have access to their library collection as well.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <img style={{ marginTop: "20px" }} src="assets/contributedAssets/library/ss1.png" />
        </div>
        <h1
          style={{
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
            marginTop: "20px",
            marginBottom: "20px",
          }}
          className="head4"
        >
          E LIBRARY
        </h1>
        <div className="row">
          <img src="assets/contributedAssets/library/lab.jpg" />
        </div>
        <h4 style={{ marginTop: "20px" }}>
          E RESOURCES:{" "}
          <a href=" www.nlist.inflibnet.ac.in" className="">
            www.nlist.inflibnet.ac.in
          </a>
        </h4>
        <h2
          style={{
            textAlign: "center",
            marginTop: "20px",
            backgroundColor: "black",
            color: "white",
            marginBottom: "20px",
          }}
          className="head5"
        >
          LIBRARY ADVISORY COMMITTEE :
        </h2>
        <div className="row">
          <img src="assets/contributedAssets/library/ss2.png" />
        </div>

        <h2 style={{ marginTop: "20px", fontStyle: "italic" }}>LIBRARY TIMINGS:</h2>

        <div className="row">
          <img src="assets/contributedAssets/library/ss3.png" />
        </div>
        <h1
          style={{
            backgroundColor: "aqua",
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "20px",
          }}
          className="head7"
        >
          IMPORTANT LINKS
        </h1>
        <div className="row">
          <div className="col">
            <h3>NCERT LINKS FOR B.ED:</h3>
            <ul>
              <li>
                <a href="https://ncert.nic.in/journals-and-periodicals.php" className="card-link">
                  https://ncert.nic.in/journals-and-periodicals.php
                </a>
              </li>

              <li>
                <a href="https://ncert.nic.in/ebooks.php?ln=" className="card-link">
                  https://ncert.nic.in/ebooks.php?ln=
                </a>
              </li>
              <li>
                <a
                  href="https://ciet.nic.in/pages.php?id=audiobook&ln=en&ln=en"
                  className="card-link"
                >
                  https://ciet.nic.in/pages.php?id=audiobook&ln=en&ln=en
                </a>
              </li>
              <li>
                <a href="https://ncert.nic.in/accessibility.php" className="card-link">
                  https://ncert.nic.in/accessibility.php
                </a>
              </li>
            </ul>
          </div>
          <h3>PUBLIC DOMAIN RESOURCES:</h3>
          <div style={{ marginRight: "600px" }} className="col">
            <ul>
              <li>
                <a href="https://ncert.nic.in/accessibility.php" className="card-link">
                  E-Gyan Kosh
                </a>
              </li>
              <li>
                <a
                  href="http://ezb.ur.de/ezeit/fl.phtml?bibid=AAAAA&colors=1&lang=en
"
                  className="card-link"
                >
                  Electronic.Journals.Library (8000+ Journals)
                </a>
              </li>
              <li>
                <a href="https://www.khanacademy.org/" className="card-link">
                  KHAN ACADEMY
                </a>
              </li>
              <li>
                <a href="http://www.freemedicaljournals.com/" className="card-link">
                  Free Medical Journals
                </a>
              </li>
              <li>
                <a href="https://epgp.inflibnet.ac.in/" className="card-link">
                  e-PG Pathshala
                </a>
              </li>
              <li>
                <a href="https://shodhganga.inflibnet.ac.in/" className="card-link">
                  Shodhganga
                </a>
              </li>
              <li>
                <a href="https://nptel.ac.in/" className="card-link">
                  NPTEL
                </a>
              </li>
              <li>
                <a href="https://swayam.gov.in/" className="card-link">
                  SWAYAM
                </a>
              </li>
              <li>
                <a href="https://ndl.iitkgp.ac.in/" className="card-link">
                  NDLI
                </a>
              </li>
              <li>
                <a href="https://www.gutenberg.org/" className="card-link">
                  Project Gutenberg
                </a>
              </li>
            </ul>
          </div>
        </div>

        <img className="image8" src="assets/contributedAssets/library/download.png" />
        <div className="row">
          <div className="col">
            <div className=" text-center">
              <p>
                Created by:
                <a
                  href="https://instagram.com/sharmaashutosh28887?igshid=NTc4MTIwNjQ2YQ=="
                  className="text-warning fw-bold"
                  target="_blank"
                >
                  sharmaashutosh28887
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Library;
