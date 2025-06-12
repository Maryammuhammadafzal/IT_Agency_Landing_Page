import { Button } from '@mui/material'
import React from 'react'

const ServicesPage = () => {

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
            <span className="text-black ">Services</span>{" "}
            <span className="text-orange-500">We Offer</span>
          </h1>
          <div className="flex justify-start w-full h-auto items-start py-3">
            <div className="flex flex-wrap justify-between items-start gap-4 w-full h-auto">
           
           <div className="card w-auto h-auto flex justify-center items-center p-3 border-2  border-orange-500 rounded-lg">
            <div className=' w-full h-full flex flex-col gap-3 justify-center items-center text-center'>
              <h2 className="gradient-number min-[350px]:text-8xl text-7xl xl:text-9xl">Web Development</h2>
               <p className="text-black/75 xl:leading-5 sm:leading-4 leading-3 pr-2 font-medium sm:text-sm text-xs md:text-base">
                   Build responsive, high-performance websites that engage and convert visitors. Our developers leverage the latest technologies to deliver exceptional user experiences.
                  </p>
                  <Button></Button>
            </div>
           </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
