import React from 'react'
import { Button } from '../ui/button'
import { Github, Linkedin, Mail, Terminal } from 'lucide-react'
import Link from 'next/link'
import { MorphingText } from '../magicui/morphing-text'

const Footer = () => {
  return (
    <>
    <div className='  bg-background/10 py-3  px-2 md:px-10 lg:px-20 xl:px-64'>
      
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <Terminal className="text-white" />
          <h1 className='text-xl text-white font-semibold ml-2'>Jeeten Mandal</h1>
        </div>
        <div className='flex items-center gap-4'>
            <Link href="mailto:jeetenmandal848@gmail.com" target="_blank">
                <Button size="icon" className="p-3 bg-gray-400/20 hover:text-black cursor-pointer">
                  <Mail />
                </Button>
                </Link>

              <Link href="https://github.com/jeetenmndl" target="_blank">
                <Button size="icon" className="p-3 bg-gray-400/20 hover:text-black cursor-pointer">
                  <Github />
                </Button>
              </Link>

              <Link href="https://www.linkedin.com/in/jeeten-mandal-47616a216/" target="_blank">
                <Button size="icon" className="p-3 bg-gray-400/20 hover:text-black cursor-pointer">
                  <Linkedin />
                </Button>
              </Link>
        </div>
      </div>

      <div className='flex justify-center lg:justify-between items-center mt-4'>
        <div className='hidden lg:flex items-center'>
          
        </div>
        <div className='text-sm text-gray-500'>
            This Website was built without using any AI tools.
        </div>
      </div>



    </div>

    <div className="my-16 w-full">
        <MorphingText className={"text-white p-0"} texts={["Jeeten Mandal", "Fullstack Developer", "Workflow Designer", "AI/ML Enthusiast"]} />
      </div>
    </>
  )
}

export default Footer