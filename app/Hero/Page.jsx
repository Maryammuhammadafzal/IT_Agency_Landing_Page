import React from "react";
import HeroImage from "../../public/images/hero-image.png";
const HeroPage = () => {
  return (
    <div className="home mb-0 w-full font-[Darker Grotesque] h-auto flex justify-center items-start pt-6">
      <div className="w-full p-2 sm:w-[90%] lg:w-[85%]  h-auto flex md:flex-row flex-col justify-center items-center gap-3">
        <div className="left md:w-[50%] w-full h-auto space-y-5">
          <h1 className="font-bold font-[Montserrat] 2xl:text-7xl 2xl:leading-20 xl:text-6xl lg:text-5xl md:text-4xl min-[768px]:text-4xl text-6xl xl:leading-16 lg:leading-14 max-sm:text-5xl max-xs:text-4xl">
            Your Creative Agency for the Digital Age
          </h1>
          <p className="font-medium md:text-sm lg:text-base leading-4 text-base max-xs:text-xs max-sm:text-sm">
            At WebCrafters, we specialize in crafting innovative digital
            solutions that transform ideas into impactful online experiences.
            Whether you're a startup, small business, or established enterprise,
            our team is dedicated to elevating your brand in the digital
            landscape.
          </p>
          <div className="flex gap-12 max-sm:gap-5 py-3 max-xs:py-0">
            <div className="flex flex-col font-semibold">
              <h2 className="text-4xl  md:text-5xl lg:text-7xl max-xs:text-4xl font-extrabold text-orange-500">
                +500
              </h2>
              <p className="text-2xl leading-none md:text-xl max-xs:text-base font-semibold pl-2">
                Website Dilevered
              </p>
            </div>
            <div className="font-medium h-full flex justify-center items-center text-9xl">
              /
            </div>
            <div className="flex flex-col font-semibold">
              <h2 className="text-4xl md:text-5xl  lg:text-7xl max-xs:text-4xl font-extrabold text-orange-500">
                +10
              </h2>
              <p className="text-2xl md:text-xl leading-none max-xs:text-base font-semibold pl-2">
                Year Of Expertise
              </p>
            </div>
          </div>
        </div>
        <div className="right md:w-[50%] w-full h-auto flex justify-center items-center">
          <img src={HeroImage.src} title="Digital Agency" alt="Digital Agency" />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
