import React from "react";
import { data } from "../data/TestimonialData";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Testimonials = () => {
  return (
    <>
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
          Testimonials
        </p>
        <h1 class=" mb-3" style={{ fontSize: "2rem", fontWeight: "bold" }}>
          Review For Some Student who get a Job by First Solution Recruitment
          Consultancy
        </h1>
      </div>
      <div
        id="carouselMultiItemExample"
        class="carousel slide carousel-dark text-center"
        data-mdb-ride="carousel"
      >
        <div class="container-xxl wrapper py-5 mb-3">
          <div class="row wrapper">
            <Carousel
              autoPlay="true"
              infiniteLoop="true"
              showThumbs={false}
              showStatus={false}
              stopOnHover={true}
            >
              {data.map((item, index) => {
                return (
                  <div class="col  testimonialsbox" id={index}>
                    <img
                      class="rounded-circle shadow-1-strong mb-4"
                      src={item.img}
                      alt="Profile"
                      style={{ width: "150px" }}
                    />
                    <h5 class="mb-3">{item.name}</h5>
                    <p>{item.designation}</p>
                    <p>
                      <i class="fas fa-quote-left pe-2"></i>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod eos id officiis hic tenetur quae quaerat ad velit ab
                      hic tenetur.
                    </p>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;