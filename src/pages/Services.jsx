import React from "react";
import { ServicesContainer } from "../style/Commenstyle";
import { FaRegCheckCircle } from "react-icons/fa";
import Meta from "../component/Meta";
import GoToTop from "../component/Gototop";
import { ServicesName } from "../data/ServicesName";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Services = () => {
  return (
    <>
      <Meta title={"Services"} />
      <ServicesContainer className="py-3 mt-5">
        <div
          class="text-center mx-auto wow fadeInUp "
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
          <h1 class=" mb-5">Awesome Services For First Solution</h1>
        </div>
        <div className="container-xxl wrapper mb-5">
          <div
            class="row g-4 wow fadeInUp"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDelay: "0.3s",
              animationName: "fadeInUp",
            }}
          >
            <div className="writepen col-lg-12 col-md-12 col-sm-12">
              <img
                src="Images/pen.jpg"
                className="img-fluid rounded"
                alt="main-banner"
              />
              <p className="abouttext">
                First Solution most important strength is its domain knowledge
                of the various industry sectors it operates in. First Solution
                aims at providing practical and cost effective end-to-end
                manpower recruitment solutions to Insurance, Non Insurance and
                Finance enabled services organizations. We offer customized
                solutions in line with organizations business needs as we
                believe each requirement is specific and so are the processes
                and systems required for it's accomplishment. We are keenly
                aware of the integral role that an individual plays in an
                organization's success.
              </p>
            </div>
            <div class="col-lg-4">
              <div class="nav nav-pills d-flex justify-content-between w-100 h-100 me-4">
                {ServicesName.map((item, index) => {
                  return (
                    <button
                      id={index}
                      class="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4 "
                      data-bs-toggle="pill"
                      data-bs-target={item.serviceslink}
                      type="button"
                    >
                      <h5 class="servicesname m-0 d-flex gap-2">
                        {item.servicestitle}
                        <MdKeyboardDoubleArrowRight size={25} />
                      </h5>
                    </button>
                  );
                })}
              </div>
            </div>
            <div class="col-lg-8">
              <div class="tab-content w-100">
                <div class="tab-pane fade active show " id="tab-pane-1">
                  <div class="row g-4">
                    <div class="col-md-12" style={{ minHeight: "400px" }}>
                      <div class="position-relative h-100">
                        <img
                          class="position-absolute rounded w-100 h-100"
                          src="Images/Banking.webp"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <h3 class="mb-4">Banking</h3>
                      {/* <p class="mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo erat
                        amet.
                      </p> */}
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
                    <div class="col-md-12" style={{ minHeight: "400px" }}>
                      <div class="position-relative h-100">
                        <img
                          class="position-absolute rounded w-100 h-100"
                          src="Images/Finance.webp"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <h3 class="mb-4">Finance</h3>
                      {/* <p class="mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo erat
                        amet.
                      </p> */}
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
                      {/* <Link href="" class="btn btn-primary py-3 px-5 mt-3">
                        Read More
                      </Link> */}
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="tab-pane-3">
                  <div class="row g-4">
                    <div class="col-md-12" style={{ minHeight: "400px" }}>
                      <div class="position-relative h-100">
                        <img
                          class="position-absolute rounded w-100 h-100"
                          src="Images/Securities.webp"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <h3 class="mb-4">Securities</h3>
                      {/* <p class="mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo erat
                        amet.
                      </p> */}
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
                      {/* <Link href="" class="btn btn-primary py-3 px-5 mt-3">
                        Read More
                      </Link> */}
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade " id="tab-pane-4">
                  <div class="row g-4">
                    <div class="col-md-12" style={{ minHeight: "400px" }}>
                      <div class="position-relative h-100">
                        <img
                          class="position-absolute rounded w-100 h-100"
                          src="Images/Insurance.webp"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <h3 class="mb-4">Insurance</h3>
                      {/* <p class="mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo erat
                        amet.
                      </p> */}
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
                      {/* <Link href="" class="btn btn-primary py-3 px-5 mt-3">
                        Read More
                      </Link> */}
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade " id="tab-pane-5">
                  <div class="row g-4">
                    <div class="col-md-12" style={{ minHeight: "400px" }}>
                      <div class="position-relative h-100">
                        <img
                          class="position-absolute rounded w-100 h-100"
                          src="Images/Telecom.webp"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <h3 class="mb-4">Telecom</h3>
                      {/* <p class="mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo erat
                        amet.
                      </p> */}
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
                      {/* <Link href="" class="btn btn-primary py-3 px-5 mt-3">
                        Read More
                      </Link> */}
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade " id="tab-pane-6">
                  <div class="row g-4">
                    <div class="col-md-12" style={{ minHeight: "400px" }}>
                      <div class="position-relative h-100">
                        <img
                          class="position-absolute rounded w-100 h-100"
                          src="Images/Retail.webp"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <h3 class="mb-4">Retail</h3>
                      {/* <p class="mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo erat
                        amet.
                      </p> */}
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
                      {/* <Link href="" class="btn btn-primary py-3 px-5 mt-3">
                        Read More
                      </Link> */}
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade " id="tab-pane-7">
                  <div class="row g-4">
                    <div class="col-md-12" style={{ minHeight: "400px" }}>
                      <div class="position-relative h-100">
                        <img
                          class="position-absolute rounded w-100 h-100"
                          src="Images/Pharma.webp"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <h3 class="mb-4">Pharma</h3>
                      {/* <p class="mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo erat
                        amet.
                      </p> */}
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
                      {/* <Link href="" class="btn btn-primary py-3 px-5 mt-3">
                        Read More
                      </Link> */}
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade " id="tab-pane-8">
                  <div class="row g-4">
                    <div class="col-md-12" style={{ minHeight: "400px" }}>
                      <div class="position-relative h-100">
                        <img
                          class="position-absolute rounded w-100 h-100"
                          src="Images/Automobiles.webp"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <h3 class="mb-4">Automobiles</h3>
                      {/* <p class="mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo erat
                        amet.
                      </p> */}
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
                      {/* <Link href="" class="btn btn-primary py-3 px-5 mt-3">
                        Read More
                      </Link> */}
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade " id="tab-pane-9">
                  <div class="row g-4">
                    <div class="col-md-12" style={{ minHeight: "400px" }}>
                      <div class="position-relative h-100">
                        <img
                          class="position-absolute rounded w-100 h-100"
                          src="Images/ITSector.webp"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <h3 class="mb-4">IT Sector</h3>
                      {/* <p class="mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo erat
                        amet.
                      </p> */}
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
                      {/* <Link href="" class="btn btn-primary py-3 px-5 mt-3">
                        Read More
                      </Link> */}
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade " id="tab-pane-10">
                  <div class="row g-4">
                    <div class="col-md-12" style={{ minHeight: "400px" }}>
                      <div class="position-relative h-100">
                        <img
                          class="position-absolute rounded w-100 h-100"
                          src="Images/BPO.webp"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <h3 class="mb-4">BPO</h3>
                      {/* <p class="mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo erat
                        amet.
                      </p> */}
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
                      {/* <Link href="" class="btn btn-primary py-3 px-5 mt-3">
                        Read More
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ServicesContainer>
      <GoToTop />
    </>
  );
};

export default Services;
