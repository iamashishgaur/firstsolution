import React from "react";

import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as SiIcons from "react-icons/si";

export const MenuData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-link",
  },
  {
    title: "About",
    path: "/about",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-link",
  },
  {
    title: "Services",
    path: "/services",
    icon: <SiIcons.SiKnowledgebase />,
    cName: "nav-link",
  },

  {
    title: "Contact",
    path: "/contact",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-link",
  },
];
