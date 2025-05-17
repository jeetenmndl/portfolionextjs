"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import Rupee from "@/../public/rupee.png"
import Hamrodera from "@/../public/hamrodera.png"
import Mis from "@/../public/mis.png"
import Tesla from "@/../public/tesla.png"
import Link from 'next/link'
import { InteractiveHoverButton } from '../magicui/interactive-hover-button'
import { ShimmerButton } from '../magicui/shimmer-button'
import { Button } from '../ui/button'

const Projects = () => {

    const [projectActive, setProjectActive] = useState("rupee")
  return (
    <div className='lg:grid lg:grid-cols-5'>

        <div className="border border-gray-800 col-span-2 px-4 py-6 flex flex-col gap-4">

           <div className={ (projectActive == "rupee") ? "bg-gray-400/10 border border-gray-800 rounded-md p-4 cursor-pointer": "rounded-md border border-gray-800 p-4  hover:bg-gray-400/10 cursor-pointer transition-all duration-200 ease-in-out" } onClick={() => setProjectActive("rupee")}>
                <div className="flex items-center justify-between">
                    <h3 className='text-lg font-semibold text-white'>Rupee API</h3> 
                    {
                        projectActive === "rupee" ?
                        <span className="rounded-lg bg-main px-2 py-0.5 text-xs ">
                            active
                        </span>  
                        :
                        " "
                    } 
                </div>
                <p className='text-sm text-gray-400'>A payment aggregator that allows developers connect multiple payment gateways.</p>
            </div>

            <div className={ (projectActive == "hamrodera") ? "bg-gray-400/10 border border-gray-800 rounded-md p-4 cursor-pointer": "rounded-md border border-gray-800 p-4  hover:bg-gray-400/10 cursor-pointer transition-all duration-200 ease-in-out" } onClick={() => setProjectActive("hamrodera")}>
                <div className="flex items-center justify-between">
                    <h3 className='text-lg font-semibold text-white'>Hamrodera</h3>  
                    {
                        projectActive === "hamrodera" ?
                        <span className="rounded-lg bg-main px-2 py-0.5 text-xs ">
                            active
                        </span>  
                        :
                        " "
                    }
                </div>
                <p className='text-sm text-gray-400'>A room rental platform that allows users find rooms and post room details.</p>
            </div>

             <div className={ (projectActive == "mis") ? "bg-gray-400/10 border border-gray-800 rounded-md p-4 cursor-pointer": "rounded-md border border-gray-800 p-4  hover:bg-gray-400/10 cursor-pointer transition-all duration-200 ease-in-out" } onClick={() => setProjectActive("mis")}>
                <div className="flex items-center justify-between">
                    <h3 className='text-lg font-semibold text-white'>College MIS</h3>  
                    {
                        projectActive === "mis" ?
                        <span className="rounded-lg bg-main px-2 py-0.5 text-xs ">
                            active
                        </span>  
                        :
                        " "
                    }
                </div>
                <p className='text-sm text-gray-400'>A protal for Nepal Business College to manage and automate tasks.</p>
            </div>

             <div className={ (projectActive == "tesla") ? "bg-gray-400/10 border border-gray-800 rounded-md p-4 cursor-pointer": "rounded-md border border-gray-800 p-4  hover:bg-gray-400/10 cursor-pointer transition-all duration-200 ease-in-out" } onClick={() => setProjectActive("tesla")}>
                <div className="flex items-center justify-between">
                    <h3 className='text-lg font-semibold text-white'>Tesla Stock ML Model</h3>  
                    {
                        projectActive === "tesla" ?
                        <span className="rounded-lg bg-main px-2 py-0.5 text-xs ">
                            active
                        </span>  
                        :
                        " "
                    }
                </div>
                <p className='text-sm text-gray-400'>Predicts the price of tesla stock using machine learning model.</p>
            </div>

        </div>

        {/* show projects here */}
        <div className="border border-gray-800 col-span-3 p-4">

            {/* rupee  */}
            <div className={ (projectActive == "rupee") ? "block" : "hidden"}>
                <div>
                    <Image loading='lazy' src={Rupee} alt={projectActive + " jeeten.com.np"} width={1000} height={1000} className="rounded-md w-full h-auto" />
                </div>
                <div>
                    <div className="flex items-baseline justify-between">
                        <h3 className='text-2xl font-semibold text-white mt-5'>Rupee API</h3>
                        <div className="flex items-baseline gap-4">

                        <div className="p-1 rounded-full bg-white">
                            <Image loading='lazy' src={"https://simpleicons.org/icons/nextdotjs.svg"} alt={projectActive + " jeeten.com.np"} width={20} height={20} className="rounded-full w-5 h-5 " />
                        </div>

                        <div className="p-1 rounded-full bg-[#5FA04E]">
                            <Image loading='lazy' src={"https://simpleicons.org/icons/nodedotjs.svg"} alt={projectActive + " jeeten.com.np"} width={20} height={20} className="rounded-full w-5 h-5 " />
                        </div>
                        <div className="p-1 rounded-full bg-green-400">

                            <Image loading='lazy' src={"https://simpleicons.org/icons/mongodb.svg"} alt={projectActive+ " jeeten.com.np"} width={20} height={20} className="rounded-full w-5 h-5" />
                        </div>
                        <div className="p-1 rounded-full bg-[#6C47FF]">

                            <Image loading='lazy' src={"https://simpleicons.org/icons/shadcnui.svg"} alt={projectActive + " jeeten.com.np"} width={20} height={20} className="rounded-full w-5 h-5 " />
                        </div>
                        </div>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                        A payment aggregator that allows developers connect multiple payment gateways. It has a simple and easy to use API that allows developers to integrate multiple payment gateways in their applications. It also has a dashboard for users to manage their payments and transactions.
                    </p>

                    <div className='mt-2'>
                        <Link href="https://rupeeapi.vercel.app" target="_blank">
                        <Button size={"sm"} className="bg-main text-black cursor-pointer text-sm">Visit Site</Button>
                        </Link>
                    </div>
                    
                </div>
            </div>

             {/* hamrodera  */}
            <div className={ (projectActive == "hamrodera") ? "block" : "hidden"}>
                <div>
                    <Image loading='lazy' src={Hamrodera} alt={projectActive + " jeeten.com.np"} width={1000} height={1000} className="rounded-md w-full h-auto" />
                </div>
                <div>
                    <div className="flex items-baseline justify-between">
                        <h3 className='text-2xl font-semibold text-white mt-5'>Hamrodera</h3>
                        <div className="flex items-baseline gap-4">

                        <div className="p-1 rounded-full bg-white">
                            <Image loading='lazy' src={"https://simpleicons.org/icons/nextdotjs.svg"} alt={" nextjs jeeten.com.np"} width={20} height={20} className="rounded-full w-5 h-5 " />
                        </div>

                        <div className="p-1 rounded-full bg-[#5FA04E]">
                            <Image loading='lazy' src={"https://simpleicons.org/icons/nodedotjs.svg"} alt={ " node.js jeeten.com.np"} width={20} height={20} className="rounded-full w-5 h-5 " />
                        </div>
                        <div className="p-1 rounded-full bg-green-400">

                            <Image loading='lazy' src={"https://simpleicons.org/icons/mongodb.svg"} alt={" mongodb jeeten.com.np"} width={20} height={20} className="rounded-full w-5 h-5" />
                        </div>
                        <div className="p-1 rounded-full bg-[#3448C5]">

                            <Image loading='lazy' src={"https://simpleicons.org/icons/cloudinary.svg"} alt={" cloudinary jeeten.com.np"} width={20} height={20} className="rounded-full w-5 h-5 " />
                        </div>
                        </div>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                        A room rental platform that allows users find rooms and post room details. It has a simple and easy to use interface that allows users to search for rooms based on their requirements. It also has a dashboard for users to manage their rooms and bookings.
                    </p>

                    <div className='mt-2'>
                        <Link href="https://hamrodera.vercel.app" target="_blank">
                        <Button size={"sm"} className="bg-main text-black cursor-pointer text-sm">Visit Site</Button>
                        </Link>
                    </div>
                    
                </div>
            </div>

            {/* mis  */}
            <div className={ (projectActive == "mis") ? "block" : "hidden"}>
            <div>
                <Image loading='lazy' src={Mis} alt={projectActive + " jeeten.com.np"} width={1000} height={1000} className="rounded-md w-full h-auto" />
            </div>
            <div>
                <div className="flex items-baseline justify-between">
                    <h3 className='text-2xl font-semibold text-white mt-5'>Management Information System</h3>
                    <div className="flex items-baseline gap-4">

                    <div className="p-1 rounded-full bg-white">
                        <Image loading='lazy' src={"https://simpleicons.org/icons/nextdotjs.svg"} alt={" nextjs jeeten.com.np"} width={20} height={20} className="rounded-full w-5 h-5 " />
                    </div>

                    <div className="p-1 rounded-full bg-[#5FA04E]">
                        <Image loading='lazy' src={"https://simpleicons.org/icons/nodedotjs.svg"} alt={ " node.js jeeten.com.np"} width={20} height={20} className="rounded-full w-5 h-5 " />
                    </div>
                    <div className="p-1 rounded-full bg-green-400">

                        <Image loading='lazy' src={"https://simpleicons.org/icons/mongodb.svg"} alt={" mongodb jeeten.com.np"} width={20} height={20} className="rounded-full w-5 h-5" />
                    </div>
                    <div className="p-1 rounded-full bg-[#EA4335]">

                        <Image loading='lazy' src={"https://simpleicons.org/icons/gmail.svg"} alt={" gmail jeeten.com.np"} width={20} height={20} className=" w-5 h-5 " />
                    </div>
                    </div>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                    A portal for Nepal Business College to manage and automate tasks. It has a simple and easy to use interface that allows faculty and administration to manage daily tasks and projects. It also has a dashboard for stuents, teachers, and admin to manage their tasks and projects.
                </p>

                
            </div>
             </div>

             {/* tesla  */}
            <div className={ (projectActive == "tesla") ? "block" : "hidden"}>
            <div>
                <Image loading='lazy' src={Tesla} alt={projectActive + " jeeten.com.np"} width={1000} height={1000} className="rounded-md w-full h-auto" />
            </div>
            <div>
                <div className="flex items-baseline justify-between">
                    <h3 className='text-2xl font-semibold text-white mt-5'>Tesla Stock Price Prediction</h3>
                    <div className="flex items-baseline gap-4">

                    <div className="p-1 rounded-full bg-[#3776AB]">
                        <Image loading='lazy' src={"https://simpleicons.org/icons/python.svg"} alt={" python jeeten.com.np"} width={20} height={20} className="rounded-full w-5 h-5 " />
                    </div>

                    <div className="p-1 rounded-full bg-[#20BEFF]">
                        <Image loading='lazy' src={"https://simpleicons.org/icons/kaggle.svg"} alt={ " node.js jeeten.com.np"} width={20} height={20} className="rounded-full w-5 h-5 " />
                    </div>
                    <div className="p-1 rounded-full bg-[#013243]">

                        <Image loading='lazy' src={"https://simpleicons.org/icons/numpy.svg"} alt={" mongodb jeeten.com.np"} width={20} height={20} className="rounded-full w-5 h-5" />
                    </div>
                    <div className="p-1 rounded-full bg-[#150458]">

                        <Image loading='lazy' src={"https://simpleicons.org/icons/pandas.svg"} alt={" gmail jeeten.com.np"} width={20} height={20} className=" w-5 h-5 " />
                    </div>
                     <div className="p-1 rounded-full bg-[#F7931E]">

                        <Image loading='lazy' src={"https://simpleicons.org/icons/scikitlearn.svg"} alt={" gmail jeeten.com.np"} width={20} height={20} className=" w-5 h-5 " />
                    </div>
                    
                    </div>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                    Predicts the price of tesla stock using machine learning model.Regression model is used to predict the price of tesla stock. It has a simple and easy to use interface that allows users to predict the price of tesla stock using machine learning model.
                </p>

                
            </div>
             </div>
        </div>


    </div>
  )
}

export default Projects