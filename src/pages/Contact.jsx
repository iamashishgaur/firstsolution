import React from "react";

const Contact = () => {
  return (
    <>
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
        <h1 class="display-5 mb-5">Contact Us For First Solution</h1>
      </div>

      <div className="container-xxl wrapper py-5 mb-5">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <h1 class="display-5 mb-4">
              If You Have Any Query, Please Contact Us
            </h1>
            <form>
              <div class="row g-3">
                <div class="col-md-6">
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                    <label for="name">Your Name</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                    <label for="email">Your Email</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control"
                      id="subject"
                      placeholder="Subject"
                      spellcheck="false"
                      data-ms-editor="true"
                    />
                    <label for="subject">Subject</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating">
                    <textarea
                      class="form-control message"
                      placeholder="Leave a message here"
                      id="message"
                      spellcheck="false"
                      data-ms-editor="true"
                    ></textarea>
                    <label for="message">Message</label>
                  </div>
                </div>
                <div class="col-12">
                  <button class="btn btn-primary py-3 px-5" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
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
    </>
  );
};

export default Contact;
