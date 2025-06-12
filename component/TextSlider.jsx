import React from "react";
import Marquee from "react-fast-marquee";

const TextSlider = () => {
  return (
    <div className="h-auto w-full py-3 lg:py-10 overflow-x-hidden">
        <Marquee autoFill={true} className="w-full whitespace-nowrap flex gap-10 justify-center items-center ">
      <span className="gradient-title text-5xl sm:text-7xl lg:text-9xl font-bold px-6">DIGITAL WALLET</span>
      <span className="gradient-title text-5xl sm:text-7xl lg:text-9xl font-bold px-6">DIGITAL WALLET</span>
      <span className="gradient-title text-5xl sm:text-7xl lg:text-9xl font-bold px-6">DIGITAL WALLET</span>
      <span className="gradient-title text-5xl sm:text-7xl lg:text-9xl font-bold px-6">DIGITAL WALLET</span>
      <span className="gradient-title text-5xl sm:text-7xl lg:text-9xl font-bold px-6">DIGITAL WALLET</span>
      <span className="gradient-title text-5xl sm:text-7xl lg:text-9xl font-bold px-6">DIGITAL WALLET</span>
      <span className="gradient-title text-5xl sm:text-7xl lg:text-9xl font-bold px-6">DIGITAL WALLET</span>
      <span className="gradient-title text-5xl sm:text-7xl lg:text-9xl font-bold px-6">DIGITAL WALLET</span>
    </Marquee>
    </div>
  );
};

export default TextSlider;
