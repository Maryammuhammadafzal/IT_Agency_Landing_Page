import { Button } from '@mui/material'
import React from 'react'
import CallMadeIcon from '@mui/icons-material/CallMade';

const ServicesPage = () => {

   let services_data = [
    {
      title : "web development",
      description: "Build responsive, high-performance websites that engage and convert visitors. Our developers leverage the latest technologies to deliver exceptional user experiences."
    },
    {
      title : "Graphic Design",
      description: "Enhance your visual identity with stunning logos, banners, and promotional materials that capture your brand’s essence."
    },
    {
      title : "SEO & Content Marketing",
      description: "Boost your online visibility with strategic SEO and content that ranks. From keyword optimization to blog writing, we help drive traffic and engagement."
    },
    {
      title : "Social Media Management",
      description: "Connect with your audience on platforms that matter. We create and manage compelling social media campaigns to grow your brand presence."
    },
    {
      title : "Brand Strategy",
      description: "Develop a strong and cohesive brand strategy that sets you apart from competitors and fosters customer loyalty."
    },
  ]

  return (
    <div className="home mb-0 py-10 w-full font-[Darker Grotesque] h-auto flex justify-center items-start">
      <div className="w-full p-2 sm:w-[90%] lg:w-[85%]  h-auto flex gap-3">
        <div className=" w-full h-auto space-y-5">
          <h1 className="font-extrabold flex flex-col lg:text-8xl  md:text-6xl text-5xl max-sm:text-5xl max-xs:text-4xl">
            <span className="text-black ">Services</span>{" "}
            <span className="text-orange-500">We Offer</span>
          </h1>
          <div className="flex justify-start w-full h-auto items-start py-3">
            <div className="flex flex-wrap justify-center items-start gap-10 w-full h-auto">
           
         {services_data && services_data.map(({title , description}, index) => (
            <div key={index} className="card w-[340px] h-[330px] flex justify-center items-center p-3 border-2  border-orange-500 rounded-3xl">
            <div className=' w-full h-full flex flex-col gap-4 justify-center items-center text-center'>
              <h2 className="text-[40px] font-bold">{title}</h2>
               <p className="text-black/75 xl:leading-5 sm:leading-4 leading-3 pr-2 font-medium sm:text-base text-xs md:text-xl">
                  {description}
                  </p>
                  <button className='button relative w-[170px] text-white my-3 font-bold capitalize text-xl h-10 flex justify-between items-center gap-3 pr-1 pl-5 py-3 bg-orange-500 rounded-full'>
                    <span id='text'>view more</span> <div className="arrow-btn w-8 h-8 rounded-full flex justify-center items-center bg-white">
                      <CallMadeIcon fontSize='small' className='text-orange-500'/>
                    </div>
                  </button>
            </div>
           </div>
         ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
