import React from "react";
import { Certificates } from "../data/Certificate";
import GoToTop from "../component/Gototop";
import Meta from "../component/Meta";

const AboutFounder = () => {
  return (
    <>
      <Meta title={"About Founder"} />
      <h3 class="mb-3 text-center aboutheading">About Us Founder</h3>
      <section class="py-3 py-md-5">
        <div class="container-xxl wrapper">
          <div class="row gy-3 gy-md-4 gy-lg-0 mt-5 about-founder">
            <div class="col-lg-7 col-md-6 col-sm-6 ">
              <h2 class="mb-3">Mr. Gayatri Dubey</h2>
              <p class=" mb-3">
                Mr. Gayatri Dubey is a founder of the company First Solution. He
                is an MBA by qualification from the renowned institute of
                Wellingkars, Mumbai. He has more than 12 years of experience in
                the field of Recruitment Consultancy.
              </p>
              <p class="mb-5">
                We are a fast-growing company, but we have never lost sight of
                our core values. We believe in collaboration, innovation, and
                customer satisfaction. We are always looking for new ways to
                improve our products and services.
              </p>
            </div>
            <div class="col-md-12 col-lg-5 col-sm-6 ">
              <img
                class="img-fluid rounded "
                loading="lazy"
                src="Images/Gayatridubey.jpg"
                alt="About 1"
              />
            </div>
          </div>
          <div class="row gy-3 gy-md-4 gy-lg-0 mt-5 mb-5 ">
            <h2 class="mb-3">Our Achievement</h2>
            {Certificates.map((item, index) => {
              return (
                <div class="col-lg-4 col-md-6 col-sm-6 mt-5" id={index}>
                  <div class="certificatebox">
                    <img
                      class="img-fluid rounded"
                      loading="lazy"
                      src={item.cimg}
                      alt="About 1"
                    />
                    <div className="c-name">{item.CertificateName}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <GoToTop />
    </>
  );
};

export default AboutFounder;
