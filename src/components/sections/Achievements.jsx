import React from 'react'
import Rupee from "@/../../public/rupee.png"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import IIC from "@/../../public/iic.jpg"
import Delta from "@/../../public/delta.jpg"
import Delta2 from "@/../../public/delta2.jpg"
import Codefest2 from "@/../../public/codefest2.jpg"
import Ideathon from "@/../../public/ideathon.jpg"

const Achievements = () => {
  return (
    <section className='lg:grid grid-cols-2'>

      

{/* codefest  */}
        <div className='border border-gray-800 p-6 hover:bg-gray-600/10'>
        
         <div className='lg:h-80 overflow-hidden'>
            <Image loading='lazy' src={Codefest2} alt={ "codefest jeeten.com.np"} width={1000} height={1000} className="rounded-md w-full h-auto lg:h-full ;g:w-auto" />
        </div>
        <div className='mt-4'>
            
            <span className='text-sm text-gray-500'>Team Leader</span>
            <h3 className='text-2xl font-semibold text-white '>Rahat Choice Award | CodeFest Hakathon</h3>
               
            <p className="text-sm text-gray-400 mt-4">
                Created Sambandha Web App, a platform for mental help where users can get suggestions from part of family or an pyschiatrist through an online session. Also an AI model that can detect the mental health of a person through their text and can tell what other people solved similar problems in their life.
            </p>

            <div className='mt-4'>
                <Link href="https://ourbiratnagar.net/2024/12/285032" target="_blank">
                <Button size={"sm"} className="bg-main text-black cursor-pointer text-sm">Show More</Button>
                </Link>
            </div>
            
        </div>
        </div>

  {/* Delta  hackathon  */}
        <div className='border border-gray-800 p-6 hover:bg-gray-600/10'>
        
         <div className='lg:h-80 overflow-hidden'>
            <Image loading='lazy' src={Delta2} alt={ "delta hackathon jeeten.com.np"} width={1000} height={1000} className="rounded-md w-full h-auto" />
        </div>
        <div className='mt-4'>
            
            <span className='text-sm text-gray-500'>Team Leader</span>
            <h3 className='text-2xl font-semibold text-white '>Winner of Delta Hackathon</h3>
               
            <p className="text-sm text-gray-400 mt-4">
                We won the first prize in the Delta Hackathon organized by Delta Tech and ACES TU, Dharan. We created a reward based waste management system where users can earn points by recycling their waste according to category. Users could schedule time and location for the waste to be picked up. Further those recycled materials would be directly supplied to factories.
            </p>

            <div className='mt-4'>
                <Link href="https://purbelinews.com/news/detail/565216/?v=1707061301013" target="_blank">
                <Button size={"sm"} className="bg-main text-black cursor-pointer text-sm">Show More</Button>
                </Link>
            </div>
            
        </div>
        </div>

{/* codefest ideathon  */}
        <div className='border border-gray-800 p-6 hover:bg-gray-600/10'>
        
         <div className='lg:h-80 overflow-hidden'>
            <Image loading='lazy' src={Ideathon} alt={ "codefest jeeten.com.np"} width={1000} height={1000} className="rounded-md w-full h-auto lg:h-full lg:w-auto" />
        </div>
        <div className='mt-4'>
            
            <span className='text-sm text-gray-500'>Team Leader</span>
            <h3 className='text-2xl font-semibold text-white '>Koshi Province Representative | CodeFest Ideathon</h3>
               
            <p className="text-sm text-gray-400 mt-4">
                We were the only team to represent Koshi Province in the final round of the CodeFest Hackathon. In this ideathon, we presented our project "Sambandha" to the judges and received positive feedback. Also the prototype of the project was selected as the best prototype in the ideathon.
            </p>

            <div className='mt-4'>
                <Link href="https://ourbiratnagar.net/2024/11/282890" target="_blank">
                <Button size={"sm"} className="bg-main text-black cursor-pointer text-sm">Show More</Button>
                </Link>
            </div>
            
        </div>
        </div>



{/* IIC  QUEST  */}
        <div className='border border-gray-800 p-6 hover:bg-gray-600/10'>
        
         <div className='lg:h-80 overflow-hidden'>
            <Image loading='lazy' src={IIC} alt={ "iic quest jeeten.com.np"} width={1000} height={1000} className="rounded-md w-full h-auto" />
        </div>
        <div className='mt-4'>
            
            <span className='text-sm text-gray-500'>Team Leader</span>
            <h3 className='text-2xl font-semibold text-white '>Runner Up at IIC Quest Hackathon</h3>
               
            <p className="text-sm text-gray-400 mt-4">
                We created a virtual family web app - "Pariwar". This creative solution allows user to get suggestions and perspective from similar character of different family. People sometimes hesitate to share their problems with their family members. This app allows them to get suggestions from similar character of different family. 
            </p>

            <div className='mt-4'>
                <Link href="#" target="_blank">
                <Button size={"sm"} className="bg-main text-black cursor-pointer text-sm">Show More</Button>
                </Link>
            </div>
            
        </div>
        </div>

    </section>
  )
}

export default Achievements