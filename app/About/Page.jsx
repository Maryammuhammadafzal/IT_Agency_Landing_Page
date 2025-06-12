import React from 'react'

const AboutPage = () => {
  return (
    <div className="home mb-0 py-10 w-full font-[Darker Grotesque] h-auto flex justify-center items-start">
      <div className="w-full p-2 sm:w-[90%] lg:w-[85%]  h-auto flex gap-3">
        <div className=" w-full h-auto space-y-5">
          <h1 className="font-extrabold flex flex-col lg:text-8xl  md:text-6xl text-5xl max-sm:text-5xl max-xs:text-4xl">
          <span className='text-black '>Why Choose</span> <span className='text-orange-500'>WebCrafters?</span>
          </h1>
          <p className="font-medium md:text-base lg:text-lg max-w-2xl leading-5  text-sm">
            At WebCrafters, we specialize in crafting innovative digital
            solutions that transform ideas into impactful online experiences.
            Whether you're a startup, small business, or established enterprise,
            our team is dedicated to elevating your brand in the digital
            landscape.
          </p>
          <div className="flex justify-start w-full h-auto items-start py-3">
            <div className="flex flex-wrap justify-start items-start gap-10 w-full h-auto">
             <div className='w-[300px] h-auto flex gap-1 p-1'>
              <div className='w-fit h-full flex items-start'>
                <h2 className='gradient-number text-9xl'>1.</h2>
              </div>
              <div className='w-auto h-full flex items-end'></div>
             </div>
            </div>
            <div className="font-medium h-full flex justify-center items-center lg:text-9xl md:text-7xl text-5xl">
              /
            </div>
            <div className="flex flex-col font-semibold">
              <h2 className="text-4xl md:text-5xl  lg:text-7xl max-xs:text-4xl font-extrabold text-orange-500">
                {/* +<CountUp end={10} duration={5}/> */}
              </h2>
              <p className="text-base md:text-xl leading-none font-semibold pl-2">
                Year Of Expertise
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
