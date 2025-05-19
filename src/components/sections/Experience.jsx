import React from 'react'
import { Ripple } from '../magicui/ripple'
import RupeeLogo from "@/../../public/rupeeLogo.png"
import Image from 'next/image'
import { Particles } from '../magicui/particles'

const Experience = () => {
  return (
   <div className="border border-gray-800 py-20 px-32 text-center overflow-hidden relative ">

    
        {/* <div className=" absolute left-1/2 -translate-x-1/2 top-1/2  flex items-center justify-center">
            <Image src={RupeeLogo} alt="Rupee Logo" width={100} height={100} className="rounded-full h-20 w-20 mb-10  animate-pulse opacity-10" />
        </div> */}

         <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />


        <h2 className='text-4xl font-bold text-white z-30'>
            Wroked as Project Lead at Rupee API
        </h2>
        <p className=" text-gray-400 mt-8 z-30">
            Led a team of developers in creating a comprehensive API for integrating multiple Payment gateways at one platform. My role involved creating the workflow, overseeing the development process, ensuring code quality.
        </p>

        <Ripple />



   </div>
  )
}

export default Experience