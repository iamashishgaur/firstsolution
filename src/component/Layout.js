import React from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  padding: 0 5rem;
`;
const Layout = ({ children }) => {
  return (
    <>
      <AppContainer>{children}</AppContainer>
    </>
  );
};

export default Layout;
