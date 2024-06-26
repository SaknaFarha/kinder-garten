import React, { useContext } from "react";

function Header() {
  return (
    <header className="header-area">
      <div className="header-menu-wrapper padding-right-100px padding-left-100px">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="menu-wrapper">
                <a href="#" className="down-button">
                  <i className="la la-angle-down" />
                </a>
                <div className="logo">
                  <a href="/">
                    <img
                      src="/assets/images/kg.png"
                      alt="logo"
                      height={50}
                      width={45}
                    />
                  </a>
                  <div className="menu-toggler">
                    <i className="la la-bars" />
                    <i className="la la-times" />
                  </div>
                </div>
                <div className="main-menu-content">
                  <nav>
                    <ul>
                      <li
                        className={`${
                          window.location.pathname === "/" ? "selected" : ""
                        }`}
                      >
                        <a href="/">Home</a>
                      </li>
                      <li
                        className={`${
                          window.location.pathname === "/programme"
                            ? "selected"
                            : ""
                        }`}
                      >
                        <a href="/programme">Programme </a>
                      </li>
                      <li
                        className={`${
                          window.location.pathname === "/programme"
                            ? "selected"
                            : ""
                        }`}
                      >
                        <a href="programme">About Us</a>
                      </li>
                      <li
                        className={`${
                          window.location.pathname === "/programme"
                            ? "selected"
                            : ""
                        }`}
                      >
                        <a href="programme">Blogs</a>
                      </li>
                      <li
                        className={`${
                          window.location.pathname === "/programme"
                            ? "selected"
                            : ""
                        }`}
                      >
                        <a href="">Admission</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
