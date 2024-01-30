import React from "react";
import Meta from "../component/Meta";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { GiRotaryPhone } from "react-icons/gi";
import GoToTop from "../component/Gototop";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us "} />
      <div
        class="text-center mx-auto wow fadeInUp mt-5"
        data-wow-delay="0.1s"
        style={{
          maxWidth: "600px",
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeInUp",
        }}
      >
        <p class="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
          Contact Us
        </p>
        <h1 class=" mb-5">Contact Us For First Solution</h1>
      </div>

      <div className="container-xxl wrapper py-5 mb-5">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <h1 class=" mb-4">If You Have Any Query, Please Contact Us</h1>
            <div className="addressbox">
              <span>
                  <FaLocationDot />
              </span>
              <p className="">
                <i
                  class="fas fa-quote-left pe-2"
                  style={{ color: "#b5ca59" }}
                ></i>
                Office No. 45 Sonam Mayuresh Chs Ltd. Near Blue Moon Club,
                Golden Nest Phase-3 Bhayander East, Thane- 401105.
              </p>
              <ul class="company-footer-contact-list">
                <li className="d-flex gap-2">
                  <MdCall
                    size={20}
                    style={{ color: "#011a41", fontWeight: "500" }}
                  />
                  <a
                    href="tel:+91 9320020421"
                    style={{ color: "#011a41", fontWeight: "500" }}
                  >
                    +91 9320020421 | 8424000595 | 8424000955
                  </a>
                </li>
                <li className="d-flex gap-2">
                  <GiRotaryPhone
                    size={20}
                    style={{ color: "#011a41", fontWeight: "500" }}
                  />
                  <a
                    href="tel:+91 9320020421"
                    style={{ color: "#011a41", fontWeight: "500" }}
                  >
                    02279619595
                  </a>
                </li>
                <li className="d-flex gap-2">
                  <IoIosMail
                    size={20}
                    style={{ color: "#011a41", fontWeight: "500" }}
                  />
                  <a
                    href="mailto:first_solution@rediffmail.com "
                    style={{ color: "#011a41", fontWeight: "500" }}
                  >
                    first_solution@rediffmail.com{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482633.0405020231!2d72.55150845680824!3d19.082606792016964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1692602010963!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="map"
              allowFullScreen=""
              loading="lazy"
              title="map"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <GoToTop />
    </>
  );
};

export default Contact;
