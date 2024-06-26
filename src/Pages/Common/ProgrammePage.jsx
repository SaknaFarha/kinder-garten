import React from "react";

function ProgrammePage() {
  return (
    <>
      <div>
        <section className="about-area padding-top-30px padding-bottom-30px overflow-hidden">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 ml-auto">
                <div className="image-box about-img-box">
                  <img
                    src="/assets/images/bt.avif"
                    alt="about-img"
                    className="img__item img__item-1"
                  />
                </div>
              </div>
              {/* end col-lg-5 */}
              <div className="col-lg-6">
                <div className="section-heading margin-bottom-40px margin-top-20px">
                  <h2 className="sec__title margin-bottom-40px">
                    Our Programme
                  </h2>
                  <p className="sec__desc font-size-16 pb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus error deserunt, animi eveniet commodi cum ea
                    tempore maxime optio sint quia amet voluptatem, consequatur
                    magni ratione! Totam cupiditate est hic?Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Voluptates enim
                    alias, quibusdam iste, molestiae possimus impedit ea aliquid
                    quis aut nobis dolorem sint earum dolores a ipsum corporis
                    praesentium natus?Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Aliquid iusto dolorem at odit voluptatem,
                    eius tenetur, nisi rem quam magnam, velit ratione aliquam?
                    Iusto, expedita eligendi commodi iure repellendus dolorum.
                  </p>
                </div>
                {/* end section-heading */}
              </div>
              {/* end col-lg-6 */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>

        <section className="info-area  padding-bottom-70px">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 responsive-column d-flex">
                <div className="card-item ">
                  <div className="card-img">
                    <img src="/assets/images/od.jpeg" alt="about-img" />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title mb-2">Outdoor Classroom</h3>
                    <p className="card-text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Nesciunt eaque quisquam ullam, sed rerum eligendi iste ab
                      cupiditate? Itaque illum eligendi modi pariatur nesciunt.
                      Rerum, aperiam velit. Consequatur, veritatis fuga!
                    </p>
                  </div>
                </div>
                {/* end card-item */}
              </div>
              {/* end col-lg-4 */}
              <div className="col-lg-4 responsive-column d-flex">
                <div className="card-item ">
                  <div className="card-img">
                    <img src="/assets/images/sc.jpg" alt="about-img" />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title mb-2">Small Classroom</h3>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid, incidunt. Assumenda culpa velit unde nostrum
                      quas, quae et accusantium neque earum quasi sed hic
                      tempora suscipit dicta, ratione expedita placeat.
                    </p>
                  </div>
                </div>
                {/* end card-item */}
              </div>
              {/* end col-lg-4 */}
              <div className="col-lg-4 responsive-column d-flex">
                <div className="card-item ">
                  <div className="card-img">
                    <img src="/assets/images/bi.jpg" alt="about-img" />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title mb-2">Fully Bilingual</h3>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Eaque atque quos, nisi ullam, illo vero, quaerat
                      recusandae aspernatur eligendi aut aliquam rerum numquam
                      magni placeat. Maxime sunt doloremque voluptates officia?
                    </p>
                  </div>
                </div>
                {/* end card-item */}
              </div>
              {/* end col-lg-4 */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
      </div>
    </>
  );
}

export default ProgrammePage;
