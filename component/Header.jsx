import React from "react";
import Logo from "../public/logo.png";
import WidgetsIcon from "@mui/icons-material/Widgets";
const Header = () => {
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
      <header className="lg:w-[85%] w-full h-[100px] px-3 flex justify-center items-center">
        <div className="w-full h-auto flex gap-3 justify-between items-center">
          <a className="logo w-auto h-auto p-4">
            <img src={Logo.src} alt="logo" />
          </a>
          <nav className="w-auto h-auto flex justify-center items-center">
            <ul className="w-auto flex justify-center items-center lg:gap-6 gap-3 h-auto">
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
            <div className="sm:hidden block">
                <WidgetsIcon  />
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
