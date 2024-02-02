import React, { useEffect, useState } from "react";
import "../style/Footerstyle.css";
import { Link } from "react-router-dom";
import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { GiRotaryPhone } from "react-icons/gi";

const Footer = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const [visible, isVisible] = useState(false);

  const listentoscroll = () => {
    let heighttoHidden = 150;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heighttoHidden) {
      isVisible(true);
    } else {
      isVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listentoscroll);
    return () => window.removeEventListener("scroll", listentoscroll);
  }, [visible]);
  return (
    <>
      <footer class="footer-section">
        <div class="footer-top py-5 ">
          <div class="container-xxl footer wrapper">
            <div class="row ">
              <div class="col-lg-3 col-md-6 col-sm-6 ">
                <div class="widget company-intro-widget">
                  <a href="index.html" class="site-logo">
                    <img src="Images/Firstsolution.png" alt="logo" />
                  </a>
                  <p>
                    Office No. 45 Sonam Mayuresh Chs Ltd. Near Blue Moon Club,
                    Golden Nest Phase-3 Bhayander East, Thane- 401105.
                  </p>
                  <ul class="company-footer-contact-list">
                    <li className="d-flex gap-2">
                      <MdCall size={20} />
                      <a
                        href="tel:+91 9320020421"
                        style={{ color: "white", fontWeight: "500" }}
                      >
                        +91 9320020421 / 8424000595
                      </a>
                    </li>
                    <li className="d-flex gap-2">
                      <GiRotaryPhone size={20} />
                      <a
                        href="tel:+91 9320020421"
                        style={{ color: "white", fontWeight: "500" }}
                      >
                        02279619595
                      </a>
                    </li>
                    <li className="d-flex gap-2">
                      <IoIosMail size={20} />
                      <a
                        href="mailto:first_solution@rediffmail.com "
                        style={{ color: "white", fontWeight: "500" }}
                      >
                        first_solution@rediffmail.com{" "}
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <div className="social-icons">
                  <span>
                    <Link className="text-white" to="">
                      <BsLinkedin />
                    </Link>
                  </span>
                  <span>
                    <Link className="text-white" to="">
                      <FaFacebook />
                    </Link>
                  </span>
                  <span>
                    <Link className="text-white" to="">
                      <BsInstagram />
                    </Link>
                  </span>
                  <span>
                    <Link className="text-white" to="">
                      <BsYoutube className="fs-4" />
                    </Link>
                  </span>
                </div> */}
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6  footer">
                <div
                  class="widget course-links-widget"
                  // style={{ marginLeft: "50px" }}
                >
                  <h5 class="widget-title font-semibold">Services</h5>
                  <ul class="courses-link-list">
                    <li>
                      <a href="#tab-pane-1">
                        <MdKeyboardDoubleArrowRight size={25} />
                        Banking
                      </a>
                    </li>
                    <li>
                      <a href="#tab-pane-2">
                        <MdKeyboardDoubleArrowRight size={25} />
                        Finance
                      </a>
                    </li>
                    <li>
                      <a href="#tab-pane-3">
                        <MdKeyboardDoubleArrowRight size={25} />
                        Insurance
                      </a>
                    </li>
                    <li>
                      <a href="#tab-pane-4">
                        <MdKeyboardDoubleArrowRight size={25} />
                        IT Sector
                      </a>
                    </li>
                    <li>
                      <a href="#tab-pane-5">
                        <MdKeyboardDoubleArrowRight size={25} />
                        Telecom
                      </a>
                    </li>
                    <li>
                      <a href="#tab-pane-6">
                        <MdKeyboardDoubleArrowRight size={25} />
                        Retail
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 footer">
                <div class="widget courses-link-list">
                  <h5 class="widget-title">Quick Link</h5>
                  <ul class="courses-link-list">
                    <li>
                      <Link to="/">
                        <MdKeyboardDoubleArrowRight size={25} />
                        Privacy & Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <MdKeyboardDoubleArrowRight size={25} />
                        Term's & Condition
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 footer">
                <div class="widget newsletter-widget">
                  <h5 class="widget-title">Get In Touch</h5>
                  <div className="social-icons">
                    <span>
                      <Link className="text-white" to="">
                        <BsLinkedin />
                      </Link>
                    </span>
                    <span>
                      <Link className="text-white" to="">
                        <FaFacebook />
                      </Link>
                    </span>
                    <span>
                      <Link className="text-white" to="">
                        <BsInstagram />
                      </Link>
                    </span>
                    <span>
                      <Link className="text-white" to="">
                        <BsYoutube className="fs-4" />
                      </Link>
                    </span>
                  </div>
                  <div class="footer-newsletter mt-3">
                    <p>
                      Sign Up to Our Newsletter to Get Latest Updates & Services
                    </p>
                    <form class="news-letter-form">
                      <input
                        type="email"
                        name="news-email"
                        id="news-email"
                        placeholder="Your email address"
                      />
                      <input type="submit" value="Send" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container-xxl ">
            <div class="row text-center">
              <span class="copy-right-text">
                © 2024 <a href="https://firstsolution.in">First Solution</a> All
                Rights Reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
