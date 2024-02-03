import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeLogo = () => {
  return (
    <>
      {/* Marquee Start*/}
      <div className="container-xxl wrapper mb-5 mt-3">
        <Marquee>
          <div className="marquee-container">
            <div className="marq-box">
              <img src="Images/logo/SBI.jpg" alt="logo" />
            </div>
            <div className="marq-box">
              <img src="Images/logo/hdfc-sales.svg" alt="logo" />
            </div>
            <div className="marq-box">
              <img src="Images/logo/IndiaFirst.png" alt="logo" />
            </div>
            <div className="marq-box">
              <img src="Images/logo/kotak.png" alt="logo" />
            </div>
            <div className="marq-box">
              <img src="Images/logo/max.png" alt="logo" />
            </div>
            <div className="marq-box">
              <img src="Images/logo/niva.png" alt="logo" />
            </div>
            <div className="marq-box">
              <img src="Images/logo/reliance.png" alt="logo" />
            </div>
            <div className="marq-box">
              <img src="Images/logo/star-helth.png" alt="logo" />
            </div>
            <div className="marq-box">
              <img src="Images/logo/TATA_AIG.png" alt="logo" />
            </div>
            <div className="marq-box">
              <img src="Images/logo/ManipalCigna.png" alt="logo" />
            </div>
            <div className="marq-box">
              <img src="Images/logo/ICICI_Lombard.png" alt="logo" />
            </div>
            <div className="marq-box">
              <img src="Images/logo/future-generali.png" alt="logo" />
            </div>
            <div className="marq-box">
              <img src="Images/logo/adityab.webp" alt="logo" />
            </div>
            <div className="marq-box">
              <img src="Images/logo/edelwise.png" alt="logo" />
            </div>
            <div className="marq-box" style={{ marginRight: "50px" }}>
              <img src="Images/logo/max.png" alt="logo" />
            </div>
          </div>
        </Marquee>
      </div>
      {/* Marquee End*/}
    </>
  );
};

export default MarqueeLogo;
