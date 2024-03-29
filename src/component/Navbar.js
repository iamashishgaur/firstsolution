import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MenuData } from "../data/MenuData";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";

const NavbarContainer = styled.div`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 20px;
  a {
    text-decoration: none;
    font-size: 1.1rem;
    color: #011a41;
    font-weight: 500;
  }
  .nav-link {
    display: flex;
    align-items: center;
    gap: 7px;
  }
`;

const Navbar = () => {
  const nav = useNavigate();
  const [isMobile, setMobile] = useState(false);
  const handleclick = () => setMobile(!isMobile);
  return (
    <>
      <NavbarContainer>
        <div className="navbar">
          <div className="navlogo" onClick={() => nav("/")}>
            <img src="images/First.jpg" alt="" className="img-fluid rounded" />
          </div>
          <div className="menu-icons" onClick={handleclick}>
            {isMobile ? <AiOutlineClose /> : <RiMenu3Fill />}
          </div>
          <NavMenu className={isMobile ? "nav-menu active" : "nav-menu"}>
            {MenuData.map((item, index) => {
              return (
                <li key={index} onClick={handleclick}>
                  <NavLink className={item.cName} to={item.path}>
                    {item.icon}
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </NavMenu>
        </div>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
