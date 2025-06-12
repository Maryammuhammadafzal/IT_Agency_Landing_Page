import React from "react";
import DiceImage from "../../public/images/dice-image.png";
import CallMadeIcon from '@mui/icons-material/CallMade';
const ContactPage = () => {
  return (
    <div className="home mb-0 lg:py-20 py-10 w-full font-[Darker Grotesque] h-auto flex justify-center items-start">
      <div className="w-full p-2 sm:w-[90%] lg:w-[85%]  h-auto flex md:flex-row flex-col justify-center items-center gap-3">
        <div className="left md:w-[70%] w-full h-auto space-y-5">
          <h1 className="font-bold font-[Montserrat] 2xl:text-7xl flex flex-col 2xl:leading-20 xl:text-6xl lg:text-5xl md:text-6xl sm:text-5xl xl:leading-16 lg:leading-14 max-sm:text-3xl">
            <span className="text-black ">Let’s Shape the</span>{" "}
            <span className="text-orange-500">Future Together</span>
          </h1>
          <p className="font-medium md:text-sm lg:text-lg max-w-3xl  leading-5 text-base max-sm:text-sm">
            WebCrafters is more than just a digital agency; we are your partners
            in growth. Let’s collaborate to turn your ideas into reality and
            create a lasting impact in the digital world. <br/>
             Contact us today and
            discover how WebCrafters can drive your success. Together, we’ll
            craft the future of your digital presence.
          </p>
          <div className="flex justify-start items-center py-3">
            <button className="button relative w-[170px] text-white my-3 font-bold capitalize text-xl h-12 flex justify-between items-center gap-3 pr-1 pl-5 py-3 bg-orange-500 rounded-full">
              <span id="text">Contact Us</span>{" "}
              <div className="arrow-btn w-8 h-8 rounded-full flex justify-center items-center bg-white">
                <CallMadeIcon fontSize="small" className="text-orange-500" />
              </div>
            </button>
          </div>
        </div>
        <div className="right md:w-[30%] w-full max-sm:p-5 h-auto flex justify-center items-center">
          <img src={DiceImage.src} title="Dice" alt="Dice-image" className="max-sm:w-[70%]" />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
