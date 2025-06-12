import React from "react";

const AboutPage = () => {

  let about_data = [
    {
      title : "Top-Tier Security",
      description: "We understand that every business is unique. Our team works closely with you to develop customized strategies that align with your goals and resonate with your target audience."
    },
    {
      title : "Cutting-Edge Design",
      description: "Stand out with visually stunning and user-centric designs. From websites to social media campaigns, our creative team ensures your brand looks its best across all platforms."
    },
    {
      title : "Full Services",
      description: "From web development and graphic design to SEO and digital marketing, we offer a full suite of services to meet all your digital needs."
    },
    {
      title : "Data-Driven Results",
      description: "Make informed decisions with detailed analytics and performance reports. We provide insights to help you optimize your digital presence and achieve measurable growth."
    },
  ]

  return (
    <div className="home mb-0 py-10 w-full font-[Darker Grotesque] h-auto flex justify-center items-start">
      <div className="w-full p-2 sm:w-[90%] lg:w-[85%]  h-auto flex gap-3">
        <div className=" w-full h-auto space-y-5">
          <h1 className="font-extrabold flex flex-col lg:text-8xl  md:text-6xl text-5xl max-sm:text-5xl max-xs:text-4xl">
            <span className="text-black ">Why Choose</span>{" "}
            <span className="text-orange-500">WebCrafters?</span>
          </h1>
          <p className="font-medium md:text-base lg:text-lg max-w-2xl md:leading-5 leading-4 text-sm">
            At WebCrafters, we specialize in crafting innovative digital
            solutions that transform ideas into impactful online experiences.
            Whether you're a startup, small business, or established enterprise,
            our team is dedicated to elevating your brand in the digital
            landscape.
          </p>
          <div className="flex justify-start w-full h-auto items-start py-3">
            <div className="flex flex-wrap justify-between items-start gap-4 w-full h-auto">
              {about_data && about_data.map(({title , description}, index)=> (
                <div key={index} className="card md:w-[48%] w-full min-[430px]:w-[400px] lg:w-[45%] md:h-[200px] h-[150px] flex gap-1 p-1">
                <div className="w-fit h-full flex items-start">
                  <h2 className="gradient-number min-[350px]:text-8xl text-7xl xl:text-9xl">{index + 1}.</h2>
                </div>
                <div className="w-auto h-full flex flex-col gap-2 justify-end">
                  <h3 className="xl:text-5xl lg:text-4xl min-[350px]:text-3xl text-xl font-extrabold leading-10">{title}</h3>
                  <p className="text-black/75 xl:leading-5 sm:leading-4 leading-3 pr-2 font-medium sm:text-sm text-xs md:text-base">
                   {description}
                  </p>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
