import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import img from "../../assets/g12.png";
import { VscMenu } from "react-icons/vsc";
import logo2 from "../../assets/logo2.png";
import logo1 from "../../assets/logo1.png";

function Navbarnew() {
  const [ham, setHam] = useState(false);
  const showham = () => {
    setHam(!ham);
  };
  return (
    <>
      <div className="navbarWrapper">
        <div className="logos">
          <div className="logo1">
            <img src={logo1} id="img1" />
          </div>
          <div className="logo2">
            <img src={logo2} id="img2" />
          </div>
        </div>
        <div className="nav-links">
          <ul className="pageNames">
            <li>
              <Link to="/" className="links">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/events" className="links">
                EVENTS
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="links">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link to="/register" className="links">
                REGISTER
              </Link>
            </li>
          </ul>
          <div className="mobile">
            <VscMenu className="mob-icon" onClick={showham} />
          </div>
        </div>
      </div>

      {ham ? (
        <>
          <div className="ham">
            <ul className="nav-i">
              <li>
                <Link to="/" className="links">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/events" className="links">
                  EVENTS
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="links">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link to="/register" className="links">
                  REGISTER
                </Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        " "
      )}
    </>
  );
}

export default Navbarnew;