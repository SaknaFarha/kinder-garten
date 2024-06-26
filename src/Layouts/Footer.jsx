import React from "react";

function Footer() {
  return (
    <div>
      <section className="footer-area section-bg-main padding-top-100px padding-bottom-30px">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 responsive-column">
              <div className="footer-item">
                <h4
                  className="title curve-shape pb-3 margin-bottom-20px color_white"
                  data-text="curvs"
                >
                  Contact Us
                </h4>

                <ul>
                  <li>
                    <a href="">equiry@kindergarten.com</a>
                  </li>
                  <li>
                    <a href="">+971 56 776 5881</a>
                  </li>
                </ul>
              </div>
              {/* end footer-item */}
            </div>

            <div className="col-lg-3 responsive-column">
              <div className="footer-item">
                <h4
                  className="title curve-shape pb-3 margin-bottom-20px color_white"
                  data-text="curvs"
                >
                  Locations
                </h4>
                <ul className="list-items list--items">
                  <li>
                    <p href={undefined}>Dubai</p>
                  </li>
                  <li>
                    <p href={undefined}>Sharjah</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 responsive-column">
              <div className="footer-item">
                <h4
                  className="title curve-shape pb-3 margin-bottom-20px color_white"
                  data-text="curvs"
                >
                  Locations
                </h4>
                <ul className="list-items list--items">
                  <li>
                    <p href={undefined}>Dubai</p>
                  </li>
                  <li>
                    <p href={undefined}>Sharjah</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 responsive-column">
              <div className="footer-item">
                <h4
                  className="title curve-shape pb-3 margin-bottom-20px color_white"
                  data-text="curvs"
                >
                  Working Hours
                </h4>
                <p className="footer__desc pb-3 color_white">
                  Office
                  <br />
                  Monday - Saturday <br />
                  From 9AM to 6PM <br />
                </p>
              </div>
              {/* end footer-item */}
            </div>
            {/* end col-lg-3 */}
          </div>
          {/* end row */}
          <div className="row align-items-left">
            <div className="col-lg-8">
              <div className="term-box footer-item">
                <ul className="list-items list--items d-flex align-items-center">
                  <li>© Copyright Xtra Sports 2023.</li>
                </ul>
              </div>
            </div>
            {/* end col-lg-8 */}
            <div className="col-lg-4">
              <div className="footer-social-box text-right">
                <ul className="social-profile">
                  <li>
                    <a
                      href=""
                      target="__blank"
                    >
                      <i className="lab la-facebook-f color_white" />
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      target="__blank"
                    >
                      <i className="lab la-twitter color_white" />
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      target="__blank"
                    >
                      <i className="lab la-instagram color_white" />
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      target="__blank"
                    >
                      <i className="lab la-linkedin-in color_white" />
                    </a>
                  </li>
                  <li>
                    <li>
                      <a
                        href=""
                        target="__blank"
                      >
                        <i className="lab la-youtube color_white" />
                      </a>
                    </li>
                  </li>
                </ul>
              </div>
            </div>
            {/* end col-lg-4 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
        <div className="section-block mt-4" />

        {/* end container */}
      </section>

      <div id="back-to-top">
        <i className="la la-angle-up" title="Go top" />
      </div>
    </div>
  );
}

export default Footer;
