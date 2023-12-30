import React from "react";

export function Footer(){
    return (
        <div className="container-fluid bg-dark text-white py-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-sm-4 col-12">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      About the Portal
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Site Map{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-sm-4 col-12">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Link to us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Linking Policy{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-sm-4 col-12">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Terms of Use
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Help
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Contact Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Copyright Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-sm-6 col-12 text-sm-center">
                <div style={{ width: "100%", height: "120px" }}>
                  <img src="./QRcode.jpg" alt="" className="img-fluid h-100" />
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12 my-2 my-sm-0">
                <div style={{ height: "50px" }}>
                  <img src="./logo1.png" alt="" className="img-fluid h-100" />
                </div>
                <p className="my-2">
                Smile Foundation
                161 B/4, 3rd Floor, Gulmohar House, Yusuf Sarai Community Centre New Delhi - 110049 Delhi, India

                Contact Us: Tel: +91-11-43123700 | E-mail: info@smilefoundationindia.org
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}