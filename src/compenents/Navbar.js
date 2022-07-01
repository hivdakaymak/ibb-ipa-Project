import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Col, Row, Button } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux/es/exports";

const Navbars = (props) => {
  const [showMenu, setShowMenu] = React.useState(false);
  let userData = localStorage.getItem("user-data");
  const userInfo = useSelector(state => state.eventList.loginUser)
  // userData = JSON.parse(userData);
  useEffect(()=>{
    console.log(userInfo, "hivdaaa");
  }, [userInfo])

  return (
    <Navbar>
      <Col md={3} className="d-flex justify-content-start">
        <Link to={"/"}>
          <img
            className="nav-logo"
            src={
              "https://ipa.istanbul/wp-content/uploads/2020/02/istanbul_planlama_ajansi_logo_orj.png"
            }
          />
        </Link>
      </Col>
      <Col md={6} className="d-flex justify-content-center text-center">
        <h3>{props.title}</h3>
      </Col>
      <Col md={3} className="d-flex justify-content-end">
        <div className="dropdownMenu">
          <div className="d-flex ipaUser align-items-center justify-content-between">
            {/* <div>{userData && userData.name}</div>{" "} */}
           <div>{userInfo ? userInfo : "Giriş yap"}</div>
           
            <div>
              <img src="/img/arrow.png" />
            </div>
          </div>

          <div>
            <ul>
              <li>
                <Link to={"/"}>Etkinlik Tanımlama</Link>
              </li>
              <li>
                <Link to={"/social-policy"}>Sosyal Politikalar</Link>
              </li>
              <li>
                <Link to={"/events"}>Etkinliklerim</Link>
              </li>
              <li>
                <Link to={"/policy-form"}>Politika Formu</Link>
              </li>
              <li>
                <Link to={"/event-date"}>Etkinlik Takvimi</Link>
              </li>
              <li>
                <Link to={"/event-place"}>Etkinlik Tanımlama</Link>
              </li>
              <li>
                <Link to={"/policy-user-list"}>S-P Katılımcı Listesi</Link>
              </li>
              <li>
                <Link to={"/verification"}>Onay Sayfası</Link>
              </li>
            </ul>
          </div>
        </div>
      </Col>
      <button
        className="mobile-button d-block d-md-none  "
        onClick={() => setShowMenu(!showMenu)}
      >
        {" "}
        <GiHamburgerMenu />
      </button>
      {showMenu && (
        <div style={{ zIndex: 999 }} className="w-100 d-md  position-fixed">
          <div className="mobile-button  end-0 e bg-light  z-1  ">
            <button onClick={() => setShowMenu(false)}>x</button>
            <div className="mobile-navbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to={"/"}>
                    Etkinlik Tanımlama
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/offices"}>
                    Takvim
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/social-policy"}>
                    Sosyal Politikalar
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/policy-form"}>
                    Politika Formu
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/events"}>
                    Etkinlikler
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/event-date"}>
                    Etkinlik Takvimi
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/event-place"}>
                    Etkinlik Tanımlama
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/policy-user-list"}>
                    S-P Katılımcı Listesi
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/verification"}>
                    Onay Sayfası
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </Navbar>
  );
};

export default Navbars;
