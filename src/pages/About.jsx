import React from "react";
import { AboutusContainer } from "../style/Commenstyle";
import { Link } from "react-router-dom";
import { FaRegCheckCircle } from "react-icons/fa";
import { BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import Meta from "../component/Meta";
import GoToTop from "../component/Gototop";
import MarqueeLogo from "../component/MarqueeLogo";
import { FaFacebook } from "react-icons/fa";

const About = () => {
  return (
    <>
      <Meta title={"About Us"} />
      <AboutusContainer className="py-3 mt-5 mb-5">
        <div
          class="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{
            maxWidth: "600px",
            visibility: "visible",
            animationDelay: "0.1s",
            animationName: "fadeInUp",
          }}
        >
          <p class="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
            About Us
          </p>
          <h1 class=" mb-5">About First Solution</h1>
        </div>
        <div className="container-xxl wrapper">
          <div className="row ">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="main-banner position-relative ">
                <img
                  src="Images/first-about.jpeg"
                  className="img-fluid rounded"
                  alt="main-banner"
                />
              </div>
            </div>
            <div className="writepen col-lg-6 col-md-12 col-sm-12">
              <div className="founder">
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
              <div className="mt-2">
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
                <div className="social-icons-2" style={{ marginTop: "20px" }}>
                  <h2
                    className="abouttext"
                    style={{ fontWeight: "bold", fontSize: "40px" }}
                  >
                    Follow Us :
                  </h2>
                  <div>
                    <span>
                      <Link
                        target="_new"
                        to="https://www.linkedin.com/in/firstsolution-consultancy-a0923011a/"
                      >
                        <BsLinkedin />
                      </Link>
                    </span>
                    <span>
                      <Link
                        target="_new"
                        to="https://www.facebook.com/people/First-Solution/100039596475714/"
                      >
                        <FaFacebook />
                      </Link>
                    </span>
                    <span>
                      <Link to="">
                        <BsInstagram />
                      </Link>
                    </span>
                    <span>
                      <Link to="">
                        <BsYoutube className="fs-4" />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xxl wrapper ">
          <div className="row ">
            <div className="writepen col-lg-12 col-md-12 col-sm-12">
              <p className="abouttext" style={{ marginTop: "20px" }}>
                In keeping with the current industry requirements, First
                Solution has developed a mix of professionals with domain and
                functional experience, who act as a like-minded sounding board
                to the customer - who could be an organization or a candidate.
              </p>

              <div className="mt-2">
                <h2 style={{ fontWeight: "bold" }}>
                  What Business are we into ?
                </h2>
                <p className="abouttext">
                  First Solution is an eminent placement firm that is committed
                  to provide superior value-added service to our clients and
                  candidates like thereby becoming the most respected and
                  effective recruitment/search firm for permanent placements in
                  the Insurance, Non-insurance, Retail, IT, BPO, Telecom, Pharma
                  and Finance industries.
                </p>
                <p className="abouttext">
                  We are focused on delivering complete quality solutions for
                  organizational Human Resource needs. With the right
                  combination of robust delivery models and measured processes,
                  we are committed to a long-term partnership with our clients.
                </p>
                <h2 style={{ fontWeight: "bold", marginTop: "20px" }}>
                  Resources how do we search ?
                </h2>
                <p className="abouttext">
                  Our talent search is simply another methodology that
                  identifies First Solution consultants from others. Our
                  consultants undertake a preliminary market study to determine
                  the specific search universe from which suitable candidates
                  can be sourced. We then decide which one or more methods to
                  use for sourcing the candidates - through advertisements,
                  referrals, headhunting, and referring to our extensive
                  database.
                </p>
                <p className="abouttext">
                  We take pride in our ability to recruit and evaluate quality
                  professionals that our clients demand. We are focused on
                  finding the right opportunities for individuals based on their
                  talent and aspirations. We excel in locating and hiring
                  exceptional talent to enhance the development and retention of
                  the skilled professionals that companies need today to retain
                  their competitive edge.
                </p>
                <p className="abouttext">
                  The first Solution is a team-based work culture that ensures
                  that employees have the opportunity to learn, develop new
                  skills, or pick up new competencies relevant to the company's
                  growth.
                </p>
                <p className="abouttext">
                  First Solution respects the stringent expectations of highly
                  competitive, new economy firms that value commitment and
                  quality from their business partners. The first Solution
                  strives to meet their expectations and are proud to be
                  associated with such clients.
                </p>
                <h2 style={{ fontWeight: "bold", marginTop: "20px" }}>
                  Recruitment :)
                </h2>
                <p className="abouttext" style={{ marginLeft: "20px" }}>
                  We at First Solution :
                </p>
                <div
                  className="col-md-12"
                  style={{ marginLeft: "40px", lineHeight: "30px" }}
                >
                  <p className="abouttext d-flex gap-3 align-items-center">
                    <FaRegCheckCircle size={30} style={{ color: "green" }} />
                    Ensures Client Satisfaction at all times.
                  </p>
                  <p className="abouttext d-flex gap-3 align-items-center">
                    <FaRegCheckCircle size={30} style={{ color: "green" }} />
                    Sources the right talent in the shortest span of time.
                  </p>
                  <p className="abouttext d-flex gap-3 align-items-center">
                    <FaRegCheckCircle size={30} style={{ color: "green" }} />
                    We Do not waste our and your time meeting unsuitable
                    candidates.
                  </p>
                  <p className="abouttext d-flex gap-3 align-items-center">
                    <FaRegCheckCircle size={30} style={{ color: "green" }} />
                    Utilizes the regularly updated database or search for the
                    specified requirement.
                  </p>
                  <p className="abouttext d-flex gap-3 align-items-center">
                    <FaRegCheckCircle size={30} style={{ color: "green" }} />
                    Understand the organizational needs and drive specific
                    models for fulfilling them.
                  </p>

                  <p className="abouttext d-flex gap-3 align-items-center">
                    <FaRegCheckCircle size={30} style={{ color: "green" }} />
                    Have the inner strength in Executive Search & selection to
                    source any specific talent required.
                  </p>
                  <p className="abouttext d-flex gap-3 align-items-center">
                    <FaRegCheckCircle size={30} style={{ color: "green" }} />
                    Based on the requirements provided to us, we will screen
                    potential candidates and select only the most qualified
                    personnel for the organizations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AboutusContainer>
      <MarqueeLogo />
      <GoToTop />
    </>
  );
};

export default About;
