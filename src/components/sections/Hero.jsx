import React from 'react'
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text"
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { Button } from '../ui/button';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { Ripple } from '../magicui/ripple';
import Link from 'next/link';
import { Particles } from '../magicui/particles';



const Hero = () => {
  return (
    <div className='border-x-gray-800 border-x '>
     
        <div className=" lg:grid lg:grid-cols-[60%_40%] gap-2 p-12">
          <div>


          <div className='group w-fit rounded-full border border-black/5 bg-purple-400/20 text-base  transition-all ease-in'>
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out text-main hover:text-neutral-600 hover:duration-300"> ✨ Hello, I am Jeeten</AnimatedShinyText>

          </div>

            <h1 className='mt-10'>
            <AnimatedGradientText
              speed={1}
              colorFrom="#4ade80"
              colorTo="#b392f0"
              className="text-5xl font-semibold tracking-tight"
            >
              Full Stack Developer
            </AnimatedGradientText>
            </h1>

            <p className="mt-8">
              <span className="text-gray-300 text-lg">
                I am a full-stack developer with 3 years of expertise in React, Next, Node.js, and MongoDB. I am passionate for creating innovative and responsive web applications.
              </span>
            </p>

            <div className="mt-6 flex gap-2">
              <Button className="bg-main  mr-4 cursor-pointer flex gap-2 items-center text-gray-800 hover:bg-main/90 py-5 px-6">
                <Terminal />
                <span>Get Started</span>

                </Button>

                <Link href="mailto:jeetenmandal848@gmail.com" target="_blank">
                <Button size="icon" className="p-5 bg-gray-400/20 hover:text-black cursor-pointer">
                  <Mail />
                </Button>
                </Link>

              <Link href="https://github.com/jeetenmndl" target="_blank">
                <Button size="icon" className="p-5 bg-gray-400/20 hover:text-black cursor-pointer">
                  <Github />
                </Button>
              </Link>

              <Link href="https://www.linkedin.com/in/jeeten-mandal-47616a216/" target="_blank">
                <Button size="icon" className="p-5 bg-gray-400/20 hover:text-black cursor-pointer">
                  <Linkedin />
                </Button>
              </Link>
            </div>

            <div className="mt-2">
              <span className="text-gray-300 text-xs">
                Available for freelance work and jobs.
              </span>
            </div>

          </div>

          <div>
          <div className="relative h-full w-full">
            <Ripple mainCircleSize={30} numCircles={5} mainCircleOpacity={1} className="text-white "/>
          </div>
          </div>

        </div>
    </div>

  )
}

export default Hero