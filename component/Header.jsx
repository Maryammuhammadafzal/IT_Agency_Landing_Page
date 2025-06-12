"use client";
import React, { useState } from "react";
import Logo from "../public/logo.png";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import {
  DisplaySettings,
  Facebook,
  Home,
  Instagram,
  Person,
  Phone,
  Work,
} from "@mui/icons-material";
const Header = () => {
  let [menuOpen, setMenuOpen] = useState(false);
  let nav_data = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "How It Works",
      link: "/works",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
  ];
  return (
    <div className="w-full h-auto flex md:py-7 py-3 justify-center items-center">
      <header className="lg:w-[85%] w-full h-[100px] flex justify-center items-center">
        <div className="w-full relative h-auto flex gap-3 justify-between items-center">
          <a className="logo w-auto h-auto p-4">
            <img src={Logo.src} alt="logo" />
          </a>
          <nav className=" px-3 w-auto h-auto flex justify-center items-center">
            <ul className="w-auto flex justify-center items-center lg:gap-6 gap-2 h-auto">
              {nav_data.map(({ name, link }, index) => (
                <li key={index} className="px-2 py-1">
                  <a
                    href={link}
                    className="lg:text-2xl hover:border-b-4 border-orange-500 hover:mb-2 font-medium md:text-xl sm:text-lg text-base sm:block hidden"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className="sm:hidden block"
            >
              <WidgetsOutlinedIcon />
            </div>
          </nav>
          <div
            className={`${
              menuOpen ? "flex" : "hidden"
            } mobile-menu absolute top-20 z-50 bg-white left-0 right-0 shadow-lg py-10 w-full sm:hidden h-[100px] justify-evenly items-center gap-3`}
          >
            <ul className="w-full h-auto flex justify-evenly  items-center">
              {nav_data.map(({ link, name }, index) => (
                <li key={index} className="px-2 py-1">
                  <a
                    href={link}
                    className="lg:text-2xl hover:border-b-4 border-white hover:mb-2 font-medium md:text-xl text-orange-500 sm:text-lg text-base sm:hidden block"
                  >
                    {(index == 0 && (
                      <div className="flex flex-col justify-center items-center w-auto h-auto">
                        <Home />
                        <p className="text-xs text-black">{name}</p>
                      </div>
                    )) ||
                      (index == 1 && (
                        <div className="flex flex-col justify-center items-center w-auto h-auto">
                          <Person />
                          <p className="text-xs text-black">{name}</p>
                        </div>
                      )) ||
                      (index == 2 && (
                        <div className="flex flex-col justify-center items-center w-auto h-auto">
                          <DisplaySettings />
                          <p className="text-xs text-black">{name}</p>
                        </div>
                      )) ||
                      (index == 3 && (
                        <div className="flex flex-col justify-center items-center w-auto h-auto">
                          <Work />
                          <p className="text-xs text-black">{name}</p>
                        </div>
                      )) ||
                      (index == 4 && (
                        <div className="flex flex-col justify-center items-center w-auto h-auto">
                          <Phone />
                          <p className="text-xs text-black">{name}</p>
                        </div>
                      ))}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
