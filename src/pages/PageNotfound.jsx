import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Pagenotfound = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    width: 100%;
  }
`;

//   color: #fff;
//   border: none;
//   outline: none;
//   padding: 14px 18px;
//   font-size: 1rem;
//   cursor: pointer;
//   border-radius: 4px;
//   background: #4331ed;
//   &:hover {
//     background: #2d1bdb;
//     box-shadow: 0px 1px 4px 1px rgb(0 0 0 / 10%),
//       0px 1px 4px -1px rgb(0 0 0 / 10%), 0px 1px 7px 1px rgb(0 0 0 / 10%);
//   }
// `;

const PageNotfound = () => {
  const nav = useNavigate();
  return (
    <>
      <Pagenotfound>
        <div className="container-xxl wrapper">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 ">
              <ImageContainer>
                <img src="Images/404.svg" alt="404 Page" />
              </ImageContainer>
              <button
                className="btn btn-primary"
                onClick={() => {
                  nav("/");
                }}
              >
                Go to Home Page
              </button>
            </div>
          </div>
        </div>
      </Pagenotfound>
    </>
  );
};

export default PageNotfound;
