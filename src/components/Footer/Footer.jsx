import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer className="text-center pt-1 text-lg-start bg-dark text-light" id='footer'>

      <div className="container text-center text-md-start">

        <div className="row mt-3">

          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

            <h6 className="text-uppercase fw-bold mb-4">
              <img src={"https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2022/01/NCM-Logo-White.png?resize=300%2C150&ssl=1"}
                className="card-img-top" width={"100%"} />
             
            </h6>
            <p>
              Nepal Can Move, your full-service courier & logistic partner,
              Fast. Secure. Reliable. You can count on us for your success and growth.
              Experience service like never before.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

            <h2 className="text-uppercase fw-bold mb-4">Company</h2>
            <p>
              <a href="/" className="text-reset">
                Home
              </a>
            </p>
            <p>
              <a href="/about" className="text-reset">
                About
              </a>
            </p>
            <p>
              <a href="/services" className="text-reset">
                Services
              </a>
            </p>
            <p>
              <a href="/contact" className="text-reset">
                Contact
              </a>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

            <h2 className="text-uppercase fw-bold mb-4">Business</h2>
            <p>
              <a href="/about" className="text-reset">
                Mission & Vision
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                6-D Process
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                FAQs
              </a>
            </p>

          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

            <h2 className="text-uppercase fw-bold mb-4">Contact</h2>
            <p>
              <i className="fas fa-home me-3" /> Nepal Can Move Building, 51 Muni Bhairab Marga, Tinkune, KMC-32, Kathmandu, Nepal
            </p>
            <p>
              <i className="fas fa-envelope me-3" />
              sales@nepalcanmove.com

            </p>
            <p>

              <i className="fas fa-envelope me-3" />
              support@nepalcanmove.com
            </p>
            <p>
              <i className="fas fa-phone me-3" /> +977 01-5199684
            </p>
          </div>

        </div>

      </div>


      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        Copyright © 2023 Nepal Can Move | Powered by Nepal Can Move

      </div>

    </footer>
  );
}

export default Footer;
