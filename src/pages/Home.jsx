import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import styled from "styled-components";
import Testimonials from "../component/Testimonials";
import GoToTop from "../component/Gototop";
import MarqueeLogo from "../component/MarqueeLogo";
import {
  BannerLeft,
  AboutusContainer,
  ServicesContainer,
  HeaderTitle,
} from "../style/Commenstyle";
const HeroBanner = styled.div`
  background-color: #e1f5fe63;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const nav = useNavigate();

  return (
    <>
      {/* Home Banner Start  */}
      <HeroBanner>
        <div className="container-xxl wrapper py-5 mb-5">
          <div className="row gy-3 herobanner ">
            <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
              <BannerLeft>
                <HeaderTitle>
                  <span>
                    Build Your Career With First Solution Recruitment
                    Consultancy
                  </span>
                  <p>
                    Never Ending Solution Make Your Career Easy with our First
                    Solution Recruitment Consultancy.
                  </p>
                </HeaderTitle>
                <button
                  class="btn btn-primary"
                  style={{
                    marginTop: "1.5rem",
                    padding: "15px 30px",
                    fontWeight: "500",
                  }}
                  onClick={() => {
                    nav("/");
                  }}
                >
                  Explore More <MdKeyboardDoubleArrowRight size={25} />
                </button>
              </BannerLeft>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 herobanner">
              <div className="main-banner position-relative ">
                <img
                  src="Images/first-solution-banner.webp"
                  className="img-fluid rounded"
                  alt="main-banner"
                />
              </div>
            </div>
          </div>
        </div>
      </HeroBanner>
      .{/* Home Banner End */}
      <MarqueeLogo />
      <AboutusContainer className="py-3 mt-5 mb-5">
        <motion.div
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          class="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{
            maxWidth: "600px",
            visibility: "visible",
            animationDelay: "0.1s",
            animationName: "fadeInUp",
            fontWeight: "bold",
          }}
        >
          <p class="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
            About Us
          </p>
          <h1 class=" mb-5" style={{ fontSize: "2rem", fontWeight: "bold" }}>
            About First Solution
          </h1>
        </motion.div>
        <div className="container-xxl wrapper mt-5">
          <div className="row ">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="main-banner position-relative ">
                <img
                  src="Images/about.jpg"
                  className="img-fluid rounded"
                  alt="main-banner"
                />
              </div>
            </div>
            <div className="writepen col-lg-6 col-md-12 col-sm-12">
              <div className="founder mt-3">
                <img
                  src="Images/pen.jpg"
                  className="img-fluid rounded"
                  alt="main-banner"
                />
                <span>
                  <p className="mb-1">Founder</p>
                  <h4>Gayatriprasad Dubey</h4>
                  <Link className="btn btn-primary" to="/about-founder">
                    About Founder
                  </Link>
                </span>
              </div>

              <div className="mt-2 ">
                <p className="abouttext">
                  A team of first generation entrepreneurs promotes First
                  Solution globally in recruitment & resourcing, solution
                  development, people management, administration and marketing
                  organizations's. First Solution understand what it takes a
                  company to hire the right professional for the right position.
                </p>
                <p className="abouttext">
                  Given the mix of collective skills & experience, commitment to
                  deadlines and a strong culture of ethics. In keeping with the
                  current industry requirements, First Solution has developed a
                  mix of professionals with domain and functional experience,
                  who act a like-minded sounding board to the customer. who
                  could be an organization or a candidate.
                </p>

                <button
                  className="btn btn-primary text-center py-3 px-5 ml-5"
                  style={{ fontWeight: "500" }}
                  onClick={() => {
                    nav("/about");
                  }}
                >
                  Know More About <MdKeyboardDoubleArrowRight size={25} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </AboutusContainer>
      <div
        class="container-xxl wrapper feature py-5 mt-5 mb-5"
        style={{ backgroundColor: "#e1f5fe63" }}
      >
        <div class="row  align-items-center">
          <div
            class="col-lg-6 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{
              visibility: "visible",
              animationDelay: "0.7s",
              animationName: "fadeIn",
              fontWeight: "bold",
            }}
          >
            <p class="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
              What We Do !
            </p>
            <h1 class="mb-4" style={{ fontSize: "2.6rem", fontWeight: "bold" }}>
              Few Reasons Why People Choosing First Solution!
            </h1>
            <p class="mb-4">
              Many firms that place newspaper advertisements for staff are
              unaware of the benefits of a professional recruitment firm like
              First Solution . We are able to offer our clients access to many
              qualified candidates who are gainfully employed and are not
              necessarily looking for opportunities or responding to
              advertisements.
            </p>
            <Link class="btn btn-primary py-3 px-5" href="">
              Explore More <MdKeyboardDoubleArrowRight size={25} />
            </Link>
          </div>
          <div class="col-lg-6">
            <div class="row g-4 align-items-center">
              <div class="col-md-6">
                <div class="row g-4">
                  <div
                    class="col-12 wow fadeIn"
                    data-wow-delay="0.3s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.7s",
                      animationName: "fadeIn",
                    }}
                  >
                    <div class="feature-box border rounded p-4">
                      <i class="fa fa-check fa-3x text-primary mb-3"></i>
                      <h4 class="mb-3">Best Place</h4>
                      <p class="mb-3">
                        First solution recruitment consultancy Provides jobs at
                        best places.
                      </p>
                    </div>
                  </div>
                  <div
                    class="col-12 wow fadeIn"
                    data-wow-delay="0.5s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.7s",
                      animationName: "fadeIn",
                    }}
                  >
                    <div class="feature-box border rounded p-4">
                      <i class="fa fa-check fa-3x text-primary mb-3"></i>
                      <h4 class="mb-3">Job &amp; Guarantee</h4>
                      <p class="mb-3">
                        First solution recruitment consultancy provides jobs
                        With Job Guarantee.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-md-6 wow fadeIn"
                data-wow-delay="0.7s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.7s",
                  animationName: "fadeIn",
                }}
              >
                <div class="feature-box border rounded p-4">
                  <i class="fa fa-check fa-3x text-primary mb-3"></i>
                  <h4 class="mb-3">Fast Service</h4>
                  <p class="mb-3">
                    First solution recruitment consultancy provides jobs With
                    Fast Services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us End */}
      {/* Services Start */}
      <ServicesContainer className="py-3 mt-5">
        <div
          class="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{
            maxWidth: "600px",
            visibility: "visible",
            animationDelay: "0.1s",
            animationName: "fadeInUp",
            fontWeight: "bold",
          }}
        >
          <p class="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
            Our Services
          </p>
          <h1 class=" mb-5">Awesome Services From First Solution</h1>
        </div>
        <div className="container-xxl wrapper">
          <div
            class="row g-4 wow fadeInUp services"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDelay: "0.3s",
              animationName: "fadeInUp",
            }}
          >
            <div class="col-lg-4 ">
              <div class="nav nav-pills d-flex justify-content-between w-100 h-100 me-4">
                <button
                  class="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4 active"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-1"
                  type="button"
                >
                  <h5 class="servicesname m-0 d-flex gap-2">
                    Banking
                    <MdKeyboardDoubleArrowRight size={25} />
                  </h5>
                </button>
                <button
                  class="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-2"
                  type="button"
                >
                  <h5 class="servicesname m-0 d-flex gap-2">
                    Finance <MdKeyboardDoubleArrowRight size={25} />
                  </h5>
                </button>
                <button
                  class="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-3"
                  type="button"
                >
                  <h5 class="servicesname m-0 d-flex gap-2">
                    Securities
                    <MdKeyboardDoubleArrowRight size={25} />
                  </h5>
                </button>
                <button
                  class="nav-link w-100 d-flex align-items-center text-start border p-4 mb-0 "
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-4"
                  type="button"
                >
                  <h5 class="servicesname m-0 d-flex gap-2">
                    Insurance
                    <MdKeyboardDoubleArrowRight size={25} />
                  </h5>
                </button>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="tab-content w-100">
                <div class="tab-pane fade active show " id="tab-pane-1">
                  <div class="row g-4">
                    <div class="col-md-6" style={{ minHeight: "400px" }}>
                      <div class="position-relative h-100">
                        <img
                          class="position-absolute rounded w-100 h-100"
                          src="Images/Banking.webp"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <h3 class="mb-4">Banking</h3>
                      <p class="mb-4">
                        If you are looking for a banking field job. First
                        Solution Recruitment Consultancy provides best banking
                        jobs.
                      </p>
                      <p className="d-flex gap-2 align-items-center">
                        <FaRegCheckCircle style={{ color: "green" }} />
                        Best Places
                      </p>
                      <p className="d-flex gap-2 align-items-center">
                        <FaRegCheckCircle style={{ color: "green" }} />
                        Job Garanity
                      </p>
                      <p className="d-flex gap-2 align-items-center">
                        <FaRegCheckCircle style={{ color: "green" }} />
                        Fast Services
                      </p>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="tab-pane-2">
                  <div class="row g-4">
                    <div class="col-md-6" style={{ minHeight: "400px" }}>
                      <div class="position-relative h-100">
                        <img
                          class="position-absolute rounded w-100 h-100"
                          src="Images/Finance.webp"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <h3 class="mb-4">Finance</h3>
                      <p class="mb-4">
                        If you are looking for a Finace field job. First
                        Solution Recruitment Consultancy provides best Finance
                        jobs.
                      </p>
                      <p className="d-flex gap-2 align-items-center">
                        <FaRegCheckCircle style={{ color: "green" }} />
                        Secured Loans
                      </p>
                      <p className="d-flex gap-2 align-items-center">
                        <FaRegCheckCircle style={{ color: "green" }} />
                        Credit Facilities
                      </p>
                      <p className="d-flex gap-2 align-items-center">
                        <FaRegCheckCircle style={{ color: "green" }} />
                        Cash Advanced
                      </p>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="tab-pane-3">
                  <div class="row g-4">
                    <div class="col-md-6" style={{ minHeight: "400px" }}>
                      <div class="position-relative h-100">
                        <img
                          class="position-absolute rounded w-100 h-100"
                          src="Images/Securities.webp"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <h3 class="mb-4">Securities</h3>
                      <p class="mb-4">
                        If you are looking for a Securities field job. First
                        Solution Recruitment Consultancy provides best Security
                        Gaurds jobs.
                      </p>
                      <p className="d-flex gap-2 align-items-center">
                        <FaRegCheckCircle style={{ color: "green" }} />
                        Secured Loans
                      </p>
                      <p className="d-flex gap-2 align-items-center">
                        <FaRegCheckCircle style={{ color: "green" }} />
                        Credit Facilities
                      </p>
                      <p className="d-flex gap-2 align-items-center">
                        <FaRegCheckCircle style={{ color: "green" }} />
                        Cash Advanced
                      </p>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade " id="tab-pane-4">
                  <div class="row g-4">
                    <div class="col-md-6" style={{ minHeight: "400px" }}>
                      <div class="position-relative h-100">
                        <img
                          class="position-absolute rounded w-100 h-100"
                          src="Images/Insurance.webp"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <h3 class="mb-4">Insurance</h3>
                      <p class="mb-4">
                        If you are looking for a Insurance field job. First
                        Solution Recruitment Consultancy provides best Insurance
                        jobs.
                      </p>
                      <p className="d-flex gap-2 align-items-center">
                        <FaRegCheckCircle style={{ color: "green" }} />
                        Secured Loans
                      </p>
                      <p className="d-flex gap-2 align-items-center">
                        <FaRegCheckCircle style={{ color: "green" }} />
                        Credit Facilities
                      </p>
                      <p className="d-flex gap-2 align-items-center">
                        <FaRegCheckCircle style={{ color: "green" }} />
                        Cash Advanced
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="btn btn-primary text-center "
            style={{
              padding: "20px 30px",
              margin: "5rem auto",
              fontWeight: "500",
              display: "flex",
              justifyContent: "center",
            }}
            onClick={() => {
              nav("/services");
            }}
          >
            Explore More Services <MdKeyboardDoubleArrowRight size={25} />
          </button>
        </div>
      </ServicesContainer>
      {/* Services End */}
      {/* Testimonials Start */}
      <Testimonials />
      {/* Testimonials End */}
      <GoToTop />
    </>
  );
};

export default Home;
