import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../style/Commenstyle";
import Layout from "./Layout";
import FirstLogo from "../assets/First_Solution logo.jpg";
import { MenuData } from "../data/MenuData";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiMenu3Fill } from "react-icons/ri";

const NavbarContainer = styled.div`
  /* width: 100%; */
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

// const NavLogo = styled.div`
//   color: var(--footer);
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   & > h2 {
//     display: flex;
//     font-weight: bold;
//     justify-content: center;
//     /* align-items: center; */
//     gap: 5px;
//     & > img {
//       width: 60px;
//       height: 60px;
//     }
//   }
//   span {
//     position: relative;
//     top: 12px;
//     right: 49%;
//     font-size: 15px;
//   }
// `;
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
            <button className="btn btn-primary">Get Start</button>
          </NavMenu>
        </div>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
