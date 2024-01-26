import React from "react";
import { FiMenu } from "react-icons/fi";
import { FaRegCheckCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import {
  BannerLeft,
  AboutusContainer,
  ServicesContainer,
  Testimonial,
  HeaderTitle,
} from "../style/Commenstyle";

const Home = () => {
  const nav = useNavigate();

  return (
    <>
      <div className="container-xxl wrapper py-5 mb-5">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <BannerLeft>
              <HeaderTitle>
                <span>
                  Build a Career By First Solution Recruitment Consultancy
                </span>
                <p>
                  Never Ending Solution Make Our Career Easily with our First
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
          <div className="col-lg-6 col-md-12 col-sm-12 flex-col-reverse">
            <div className="main-banner position-relative ">
              <img
                src="Images/banner.png"
                className="img-fluid rounded"
                alt="main-banner"
              />
            </div>
          </div>
        </div>
      </div>
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
          <h1 class=" mb-5" style={{ fontSize: "2rem", fontWeight: "bold" }}>
            About For First Solution
          </h1>
        </div>
        <div className="container-xxl wrapper">
          <div className="row ">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="main-banner position-relative ">
                <img
                  src="Images/avatar-3.jpg"
                  className="img-fluid rounded"
                  alt="main-banner"
                />
              </div>
            </div>
            <div className="writepen col-lg-6 col-md-12 col-sm-12">
              <img
                src="Images/pen.jpg"
                className="img-fluid rounded"
                alt="main-banner"
              />
              <div className="mt-2">
                <p className="abouttext">
                  A team of first generation entrepreneurs promotes First
                  Solution global organizations in recruitment & resourcing,
                  solution development, people management, administration and
                  marketing. First Solution understand what it takes a company
                  to hire the right professional for the right position.
                </p>
                <p className="abouttext">
                  Given the mix of collective skills & experience, commitment to
                  deadlines and a strong culture of ethics. In keeping with the
                  current industry requirements, First Solution has developed a
                  mix of professionals with domain and functional experience,
                  who act as a like-minded sounding board to the customer - who
                  could be an organization or a candidate.
                </p>
                <p className="abouttext">
                  Given the mix of collective skills & experience, commitment to
                  deadlines and a strong culture of ethics.
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
      <div class="container-xxl feature py-5 mt-5 mb-5">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div
              class="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{
                visibility: "visible",
                animationDelay: "0.7s",
                animationName: "fadeIn",
              }}
            >
              <p class="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
                What We Do !
              </p>
              <h1 class="mb-4" style={{ fontSize: "3rem", fontWeight: "bold" }}>
                Few Reasons Why People Choosing Us!
              </h1>
              <p class="mb-4">
                Many firms that place newspaper advertisements for staff are
                unaware of the benefits of a professional recruitment firm like
                First Solution . We are able to offer our clients access to many
                qualified candidates who are gainfully employed and are not
                necessarily looking for opportunities or responding to
                advertisements. These potential applicants will rarely admit
                that they might consider a move for fear they might jeopardize
                their current job. However, when professionally and discretely
                approached by a trained First Solution , our candidates tend to
                respond.
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
                        <h4 class="mb-3">Fast Executions</h4>
                        <p class="mb-3">
                          Clita erat ipsum et lorem et sit, sed stet lorem sit
                          clita duo justo erat amet
                        </p>
                        <Link class="fw-semi-bold" href="">
                          Read More <i class="fa fa-arrow-right ms-1"></i>
                        </Link>
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
                        <h4 class="mb-3">Guide &amp; Support</h4>
                        <p class="mb-3">
                          Clita erat ipsum et lorem et sit, sed stet lorem sit
                          clita duo justo erat amet
                        </p>
                        <Link class="fw-semi-bold" href="">
                          Read More <i class="fa fa-arrow-right ms-1"></i>
                        </Link>
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
                    <h4 class="mb-3">Financial Secure</h4>
                    <p class="mb-3">
                      Clita erat ipsum et lorem et sit, sed stet lorem sit clita
                      duo justo erat amet
                    </p>
                    <Link
                      class="fw-semi-bold"
                      to=""
                      style={{ fontWeight: "500" }}
                    >
                      Read More <i class="fa fa-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServicesContainer className="py-3 mt-5">
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
            Our Services
          </p>
          <h1 class=" mb-5" style={{ fontSize: "2rem", fontWeight: "bold" }}>
            Awesome Services For First Solution
          </h1>
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
                  <h5 class="servicesname m-0 d-flex gap-3">
                    <FiMenu size={25} />
                    Banking
                  </h5>
                </button>
                <button
                  class="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-2"
                  type="button"
                >
                  <h5 class="servicesname m-0 d-flex gap-3">
                    <FiMenu size={25} />
                    Finance
                  </h5>
                </button>
                <button
                  class="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-3"
                  type="button"
                >
                  <h5 class="servicesname m-0 d-flex gap-3">
                    <FiMenu size={25} />
                    Securities
                  </h5>
                </button>
                <button
                  class="nav-link w-100 d-flex align-items-center text-start border p-4 mb-0 "
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-4"
                  type="button"
                >
                  <h5 class="servicesname m-0 d-flex gap-3">
                    <FiMenu size={25} />
                    Insurance
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
                      <h3 class="mb-4">
                        25 Years Of Experience In Financial Support
                      </h3>
                      <p class="mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo erat
                        amet.
                      </p>
                      <p className="d-flex gap-2 align-items-center">
                        <FaRegCheckCircle />
                        Secured Loans
                      </p>
                      <p className="d-flex gap-2 align-items-center">
                        <FaRegCheckCircle />
                        Credit Facilities
                      </p>
                      <p className="d-flex gap-2 align-items-center">
                        <FaRegCheckCircle />
                        Cash Advanced
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
                      <h3 class="mb-4">
                        25 Years Of Experience In Financial Support
                      </h3>
                      <p class="mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo erat
                        amet.
                      </p>
                      <p className="d-flex gap-2 align-items-center">
                        <FaRegCheckCircle />
                        Secured Loans
                      </p>
                      <p className="d-flex gap-2 align-items-center">
                        <FaRegCheckCircle />
                        Credit Facilities
                      </p>
                      <p className="d-flex gap-2 align-items-center">
                        <FaRegCheckCircle />
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
                      <h3 class="mb-4">
                        25 Years Of Experience In Financial Support
                      </h3>
                      <p class="mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo erat
                        amet.
                      </p>
                      <p className="d-flex gap-2 align-items-center">
                        <FaRegCheckCircle />
                        Secured Loans
                      </p>
                      <p className="d-flex gap-2 align-items-center">
                        <FaRegCheckCircle />
                        Credit Facilities
                      </p>
                      <p className="d-flex gap-2 align-items-center">
                        <FaRegCheckCircle />
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
                      <h3 class="mb-4">
                        25 Years Of Experience In Financial Support
                      </h3>
                      <p class="mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo erat
                        amet.
                      </p>
                      <p className="d-flex gap-2 align-items-center">
                        <FaRegCheckCircle />
                        Secured Loans
                      </p>
                      <p className="d-flex gap-2 align-items-center">
                        <FaRegCheckCircle />
                        Credit Facilities
                      </p>
                      <p className="d-flex gap-2 align-items-center">
                        <FaRegCheckCircle />
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
      <Testimonial>
        <Testimonial>
          <MDBContainer className="py-5 mb-5">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol md="10" xl="8" className="text-center">
                <h3 className="mb-4">Testimonials</h3>
                <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugit, error amet numquam iure provident voluptate esse quasi,
                  veritatis totam voluptas nostrum quisquam eum porro a pariatur
                  veniam.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="text-center d-flex align-items-stretch">
              <MDBCol
                md="4"
                className="mb-5 mb-md-0 d-flex align-items-stretch"
              >
                <MDBCard className="testimonial-card">
                  <div
                    className="card-up"
                    style={{ backgroundColor: "#9d789b" }}
                  ></div>
                  <div className="avatar mx-auto bg-white">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                      className="rounded-circle img-fluid "
                      alt=""
                    />
                  </div>
                  <MDBCardBody>
                    <h4 className="mb-4">Maria Smantha</h4>
                    <hr />
                    <p className="dark-grey-text mt-4">
                      <MDBIcon fas icon="quote-left" className="pe-2" />
                      Lorem ipsum dolor sit amet eos adipisci, consectetur
                      adipisicing elit.
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol
                md="4"
                className="mb-5 mb-md-0 d-flex align-items-stretch"
              >
                <MDBCard className="testimonial-card">
                  <div
                    className="card-up"
                    style={{ backgroundColor: "#7a81a8" }}
                  ></div>
                  <div className="avatar mx-auto bg-white">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                      className="rounded-circle img-fluid"
                      alt=""
                    />
                  </div>
                  <MDBCardBody>
                    <h4 className="mb-4">Lisa Cudrow</h4>
                    <hr />
                    <p className="dark-grey-text mt-4">
                      <MDBIcon fas icon="quote-left" className="pe-2" />
                      Neque cupiditate assumenda in maiores repudi mollitia
                      architecto.
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol
                md="4"
                className="mb-5 mb-md-0 d-flex align-items-stretch"
              >
                <MDBCard className="testimonial-card">
                  <div
                    className="card-up"
                    style={{ backgroundColor: "#6d5b98" }}
                  ></div>
                  <div className="avatar mx-auto bg-white">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                      className="rounded-circle img-fluid"
                      alt=""
                    />
                  </div>
                  <MDBCardBody>
                    <h4 className="mb-4">John Smith</h4>
                    <hr />
                    <p className="dark-grey-text mt-4">
                      <MDBIcon fas icon="quote-left" className="pe-2" />
                      Delectus impedit saepe officiis ab aliquam repellat rem
                      unde ducimus.
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </Testimonial>
      </Testimonial>
    </>
  );
};

export default Home;
