import React from "react";

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
        <div className="w-full h-full flex justify-center items-center">
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
          <div className="w-full h-auto flex  justify-center items-center p-5 ">
            <div className="w-full h-auto flex flex-col justify-center items-center gap-7">
              <a className="logo w-auto h-auto p-4">
                <img src={Logo.src} alt="logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
