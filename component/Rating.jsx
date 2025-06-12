'use client'
import React from "react";
import CountUp from "react-countup";

const Rating = () => {
        let rating_data = [
                {
                        number: 500,
                        type: '+',
                        title: "Website Delivered"
                },
                {
                        number: 10,
                        type: '+',
                        title: "Years of Expertise"
                },
                {
                        number: 1,
                        type: 'M+',
                        title: "Social Media Engagements"
                },
                {
                        number: 5,
                        type: '-Star',
                        title: "Client Reviews"
                },
        ]
  return (
    <div className="w-full h-auto flex justify-center items-center py-10 px-3">
      <div className="lg:w-[80%] md:w-[90%] w-full flex justify-between items-center">
        {rating_data && rating_data.map(({number , title , type}, index)=> (
                <div className="flex flex-col font-semibold">
          <h2 className="text-4xl md:text-5xl  lg:text-7xl max-xs:text-4xl font-extrabold text-orange-500">
            <CountUp end={number} duration={5} />{type}
          </h2>
          <p className="text-base md:text-xl leading-none font-semibold pl-2">
            {title}
          </p>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Rating;
