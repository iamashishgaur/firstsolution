import React from "react";
import styled from "styled-components";
import { Button, ResumeHeaderTitle } from "../style/Commenstyle";

import banner from "../assets/banner.png";

import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const HerobannerContainer = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeroBannermain = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 3rem 0;
`;
const BannerLeft = styled.div`
  width: 100%;
  margin-top: 4rem;
`;

const BannerRight = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  width: 550px;
  & > img {
    width: 100%;
    height: 100%;
  }
`;
const HeroBanner = () => {
  const nav = useNavigate();
  return (
    <>
      <HerobannerContainer>
        <Layout>
          <HeroBannermain>
            <BannerLeft>
              <ResumeHeaderTitle>
                <span>Build a professional resume for free</span>
                <p>
                  Create your resume easily with our free builder and
                  professional templates.
                </p>
              </ResumeHeaderTitle>
              <Button
                style={{ marginTop: "1.5rem", padding: "15px 30px" }}
                onClick={() => {
                  nav("/resume");
                }}
              >
                Explore More
              </Button>
            </BannerLeft>
            <BannerRight>
              <ImageContainer>
                <img src={banner} alt="" />
              </ImageContainer>
            </BannerRight>
          </HeroBannermain>
        </Layout>
      </HerobannerContainer>
    </>
  );
};

export default HeroBanner;
