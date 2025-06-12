import React from "react";
import ExploreIcon from "@mui/icons-material/Explore";
import Arrow from "../../public/images/arrow.png";
import Icon1 from "../../public/images/icon-1.svg"
import Icon2 from "../../public/images/icon-2.svg"
import Icon3 from "../../public/images/icon-3.svg"
import Icon4 from "../../public/images/icon-4.svg"
const WorkPage = () => {
  let work_data = [
    {
      icon: Icon1.src,
      title: "Discover",
      description:
        "Share your vision and goals with us during an initial consultation.",
    },
    {
      icon: Icon2.src,
      title: "Planning",
      description:
        "We craft a tailored plan with clear timelines and deliverables.",
    },
    {
      icon: Icon3.src,
      title: "Execution",
      description:
        "Our team brings your ideas to life with creativity and precision.",
    },
    {
      icon: Icon4.src,
      title: "Optimization",
      description:
        "Post-launch, we analyze performance and refine strategies for continued success.",
    },
  ];

  return (
    <div className="w-full h-auto flex justify-center items-center p-4">
      <div className="rounded-3xl flex justify-center items-center w-full text-white bg-orange-500 h-auto p-7">
        <div className="w-full h-auto flex justify-center items-center flex-col gap-12">
          <h1 className="font-extrabold text-center flex flex-col lg:text-8xl  md:text-6xl text-5xl max-sm:text-5xl max-xs:text-4xl">
            How It Works
          </h1>
          <div className="w-full max-sm:flex-col h-auto max-sm:gap-10 flex justify-center items-center">
            {work_data &&
              work_data.map(({ title, description, icon }, index) => (
                <div key={index} className="w-auto h-auto max-sm:flex-col flex justify-center max-sm:items-center items-start">
                  <div className="content lg:w-[230px] md:w-[150px] max-sm:w-[200px] flex justify-center items-center flex-col gap-3">
                    <div className="icon lg:w-32 lg:h-32 md:w-20 md:h-20 w-14 h-14 border-2 border-white rounded-full flex justify-center items-center ">
                      {/* <ExploreIcon fontSize="large" /> */}
                      <img src={icon} alt="icon" className="max-md:w-[28px] max-lg:w-[34px] max-sm:w-[28px]" />
                    </div>
                    <h2 className="lg:text-[32px] sm:text-2xl text-2xl leading-8">{title}</h2>
                    <p className=" text-center xl:leading-5 md:leading-4 leading-3 font-medium sm:text-sm max-sm:text-sm md:text-base">
                      {description}
                    </p>
                  </div>
                  <div className={`${index== 3 ? 'hidden' : 'block'} arrow flex justify-center  items-center pt-10`}>
                    <img src={Arrow.src} alt="arrow" className="lg:w-[70px] md:w-[40px] max-sm:rotate-90 max-sm:w-[35px]" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
