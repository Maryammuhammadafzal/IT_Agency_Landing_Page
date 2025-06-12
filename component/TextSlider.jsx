import React from "react";
import Marquee from "react-fast-marquee";

const TextSlider = ({text}) => {
  return (
    <div className="h-auto w-full py-3 lg:py-10">
        <Marquee autoFill={true} className="w-full h-auto overflow-hidden flex gap-10 justify-center items-center ">
      <span className="gradient-title text-5xl sm:text-7xl lg:text-9xl font-bold px-6">{text}</span>
      <span className="gradient-title text-5xl sm:text-7xl lg:text-9xl font-bold px-6">{text}</span>
      <span className="gradient-title text-5xl sm:text-7xl lg:text-9xl font-bold px-6">{text}</span>
      <span className="gradient-title text-5xl sm:text-7xl lg:text-9xl font-bold px-6">{text}</span>
      <span className="gradient-title text-5xl sm:text-7xl lg:text-9xl font-bold px-6">{text}</span>
      <span className="gradient-title text-5xl sm:text-7xl lg:text-9xl font-bold px-6">{text}</span>
      <span className="gradient-title text-5xl sm:text-7xl lg:text-9xl font-bold px-6">{text}</span>
      <span className="gradient-title text-5xl sm:text-7xl lg:text-9xl font-bold px-6">{text}</span>
    </Marquee>
    </div>
  );
};

export default TextSlider;
