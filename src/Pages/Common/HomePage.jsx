import React from "react";

function HomePage() {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="hero-box">
          <div className="video-bg">
            <img
              src="/assets/images/kgbge.jpg"
              alt="logo"
              height={709}
              width={1400}
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto responsive--column-l pt-3 pb-3">
                <div className="hero-content pb-5">
                  <div className="section-heading">
                    <h1 className="sec__title cd-headline zoom">
                      WELCOME TO OUR
                      <br />
                      <span className="cd-words-wrapper">
                        <b></b>
                      </span>
                      KINDERGARTEN
                    </h1>

                    <div className="pt-3">
                      <a href="" className="theme-btn mr-2">
                        Book a Tour
                      </a>
                    </div>
                  </div>
                </div>

                <div className="section-tab text-center pl-4">
                  <ul className="nav nav-tabs" id="myTab" role="tablist"></ul>
                </div>
              </div>
              <div className="col-lg-12">
                <a href="#" className="btn btn-main" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="info-area info-bg padding-top-100px padding-bottom-60px text-center">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4"
              style={{
                cursor: "pointer",
                border: "1px solid #D3D3D3",
                borderRadius: "30px",
              }}
              onClick={() => (window.location.href = "/about-us")}
            >
              <div className="icon-box mt-2">
                <div className="info-icon">
                  <i className="la la-leaf" />
                </div>
                <div className="info-content">
                  <h4 className="info__title">Outdoor Classes</h4>
                  <p className="info__desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea pariatur, delectus magnam mollitia..</p>
                </div>
                <a href="/programme" className="theme-btn mt-2">
                  Learn More
                </a>
              </div>
            </div>

            <div
              className="col-lg-4 "
              style={{
                cursor: "pointer",
                border: "1px solid #D3D3D3",
                borderRadius: "30px",
              }}
              onClick={() => (window.location.href = "/about-us")}
            >
              <div className="icon-box mt-2">
                <div className="info-icon">
                  <i className="la la-home" />
                </div>
                <div className="info-content">
                  <h4 className="info__title">Small Class Rooms</h4>
                  <p className="info__desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea pariatur, delectus magnam mollitia..
                  </p>
                </div>
                <a href="/programme" className="theme-btn mt-2">
                  Learn More
                </a>
              </div>
            </div>

            <div
              className="col-lg-4"
              style={{
                cursor: "pointer",
                border: "1px solid #D3D3D3",
                borderRadius: "30px",
              }}
              onClick={() => (window.location.href = "/about-us")}
            >
              <div className="icon-box mt-2">
                <div className="info-icon">
                  <i className="la la-book" />
                </div>
                <div className="info-content">
                  <h4 className="info__title">Fully Bilingual</h4>
                  <p className="info__desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea pariatur, delectus magnam mollitia..
                  </p>
                </div>
                <a href="/programme" className="theme-btn mt-2">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="destination-area margin-top-60px padding margin-bottom-40px"
        style={{ backgroundColor: "#00514D" }}
      >
        <div className="container-spread">
          <div className="row ">
            <div
              className="col-lg-6 responsive-column extended-image"
              style={{
                backgroundImage: "url(/assets/images/1.jpg)",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="col-lg-6 extended-column">
              <div className="section-heading margin-bottom-40px">
                <h2 className="sec__title color_white">
                  KINDERGARTEN
                  <br /> NURSERY
                </h2>
                <h4 className="title font-size-16 line-height-26 pt-4 pb-2 color_white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  cupiditate perspiciatis quam aliquam neque, animi deleniti
                  cumque amet nam modi sint, incidunt temporibus ut esse aperiam
                  praesentium mollitia, porro vitae.
                </h4>
                <a href="/programme" className="theme-btn mt-2">
                  Learn More
                </a>
              </div>
            </div>

            <div
              className="col-lg-6 responsive-column extended-image"
              style={{
                backgroundImage: "url(/assets/images/turf-book.jpg)",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </div>
      </section>

      <section className="destination-area section--padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="section-heading" style={{ textAlign: "center" }}>
                <h2 className="sec__title">Our Curriculum</h2>
                <p className="sec__desc pt-3"></p>
              </div>
              <p>
                Explore our diverse programs - Arabic Classes, EYFS Curriculum,
                and the Reggio Emilia Approach. We foster curiosity,
                inclusivity, and lifelong learning. Join us in shaping
                tomorrow's leaders
              </p>
            </div>
          </div>

          <div className="row padding-top-50px">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="card-item destination-card"
                style={{ width: "100%" }}
              >
                <div className="card-img ">
                  <img
                    src="/assets/images/bt3.avif"
                    style={{ height: "246px", width: "100%" }}
                    alt="destination-img"
                  />
                </div>
                <h5 className="mt-2 mb-2">Arabic Classes</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  commodi quia impedit deleniti iusto. Autem, voluptatibus
                  architecto eligendi labore animi ullam ab sapiente minima
                  doloribus, deleniti ducimus exercitationem perspiciatis quo!
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="card-item destination-card"
                style={{ width: "100%" }}
              >
                <div className="card-img">
                  <img
                    src="/assets/images/bt4.webp"
                    style={{ height: "246px", width: "100%" }}
                    alt="destination-img"
                  />
                  <h5 className="mt-2 mb-2">Reggio Emilia Approach</h5>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptates tempore eos laudantium, numquam nam ipsa.
                    Voluptatibus ullam officiis quasi. Unde ex veniam harum in
                    ducimus! Culpa architecto doloribus delectus reprehenderit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="card-item destination-card"
                style={{ width: "100%" }}
              >
                <div className="card-img">
                  <img
                    src="/assets/images/bt5.jpeg"
                    style={{ height: "246px", width: "100%" }}
                    alt="destination-img"
                  />
                  <h5 className="mt-2 mb-2">Early Years Foundation Stage</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aut commodi quia impedit deleniti iusto. Autem, voluptatibus
                    architecto eligendi labore animi ullam ab sapiente minima
                    doloribus, deleniti ducimus exercitationem perspiciatis quo!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
