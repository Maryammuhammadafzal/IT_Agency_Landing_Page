import React from "react";
import Logo from "../public/images/footer-logo.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Facebook, Instagram } from "@mui/icons-material";
const Footer = () => {
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
    <div className="w-full flex h-auto p-3  font-[Darker Grotesque] justify-center items-center">
      <div className="w-[95%] flex justify-center rounded-4xl items-center shadow-2xl">
        <div className="w-full h-full flex-col flex justify-center items-center">
          <div className="h-[100px] w-full p-4 flex justify-center items-center rounded-tl-4xl rounded-tr-4xl text-white bg-orange-500">
            <ul className="w-full h-auto flex justify-evenly items-center">
              {nav_data.map(({ name, link }, index) => (
                <li key={index} className="px-2 py-1">
                  <a
                    href={link}
                    className="lg:text-2xl hover:border-b-4 border-white hover:mb-2 font-medium md:text-xl sm:text-lg text-base sm:block hidden"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full h-auto flex  justify-center items-center py-10">
            <div className="w-full h-auto flex flex-col justify-center items-center gap-7">
              <a className="logo w-auto h-auto">
                <img src={Logo.src} alt="logo"/>
              </a>
              <div className="links py-3 flex gap-10 text-3xl text-orange-500 justify-center items-center h-auto w-full">
                <LinkedInIcon sx={{fontSize: 50}} />
                <Instagram sx={{fontSize: 50}} />
                <Facebook sx={{fontSize: 50}} />
              </div>
              <div className="w-full md:text-xl text-lg flex justify-center items-center font-medium px-3">
                © 2021 all copyright reserved. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
