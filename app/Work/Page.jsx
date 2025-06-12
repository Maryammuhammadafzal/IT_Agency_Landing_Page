import React from "react";
import ExploreIcon from "@mui/icons-material/Explore";
import Arrow from "../../public/images/arrow.png";
const WorkPage = () => {
  let work_data = [
    {
      title: "Discover",
      description:
        "Share your vision and goals with us during an initial consultation.",
    },
    {
      title: "Planning",
      description:
        "We craft a tailored plan with clear timelines and deliverables.",
    },
    {
      title: "Execution",
      description:
        "Our team brings your ideas to life with creativity and precision.",
    },
    {
      title: "Optimization",
      description:
        "Post-launch, we analyze performance and refine strategies for continued success.",
    },
  ];

  return (
    <div className="w-full h-auto flex justify-center items-center p-4">
      <div className="rounded-3xl flex justify-center items-center w-full text-white bg-orange-500 h-auto p-7">
        <div className="w-full h-auto flex justify-center items-center flex-col gap-12">
          <h1 className="font-extrabold flex flex-col lg:text-8xl  md:text-6xl text-5xl max-sm:text-5xl max-xs:text-4xl">
            How It Works
          </h1>
          <div className="w-full h-auto flex justify-center items-center">
            {work_data &&
              work_data.map(({ title, description }, index) => (
                <div className="w-auto h-auto flex justify-center items-center">
                  <div className="content w-[250px] flex justify-center p-2 items-center flex-col gap-3">
                    <div className="icon w-18 h-18 border-2 border-white rounded-full flex justify-center items-center ">
                      <ExploreIcon fontSize="large" />
                    </div>
                    <h2 className="text-[32px] leading-8">{title}</h2>
                    <p className=" text-center xl:leading-5 sm:leading-4 leading-3 pr-2 font-medium sm:text-sm text-xs md:text-base">
                      {description}
                    </p>
                  </div>
                  <div className="arrow flex justify-center items-center">
                    <img src={Arrow.src} alt="arrow" className="w-[70px]" />
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
