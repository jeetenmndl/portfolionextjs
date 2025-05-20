import React from 'react'
import { Card } from '../ui/card'
import { ArrowLeftRight, Braces, Code, Database, Server } from 'lucide-react'
import { OrbitingCircles } from '../magicui/orbiting-circles'
import Image from 'next/image'

const Skills = () => {
  return (
    <div className='lg:grid lg:grid-cols-3'>

    {/* first grid */}
        <div className='border border-gray-800 border-collapse'>
            <div className='lg:h-75 p-6 border-b border-gray-800 [&>div]:mb-2 group overflow-hidden'>
                {/* cards  */}
                <div className={" p-4 bg-background border border-gray-800 transition-all duration-300 ease-in-out hover:shadow-sm hover:shadow-main/20 rounded-md group-hover:-translate-y-20 group-hover:-translate-x-5"}> 
                    <div className='flex gap-2 items-center'>

                        <div className='bg-blue-400 h-8 w-8 rounded-full grid place-items-center'>
                            <Code className='text-white' size={16} />
                        </div>
                        <div>
                            <span className='font-medium text-white'>Interactive Frontend</span>
                            <p className='text-gray-400 text-sm'> React, Next.js, Tailwind CSS.</p>
                        </div>

                    </div>

                </div>
                <div className={" lg:translate-x-3 p-4 z-20 bg-background border border-gray-800 transition-all duration-300 ease-in-out hover:shadow-sm hover:shadow-main/20 rounded-md group-hover:-translate-y-20 group-hover:-translate-x-0"}> 
                    <div className='flex gap-2 items-center'>

                        <div className='bg-green-400 h-8 w-8 rounded-full grid place-items-center'>
                            <Database className='text-white' size={16} />
                        </div>
                        <div>
                            <span className='font-medium text-white'>Database Handling</span>
                            <p className='text-gray-400 text-sm'> MongoDB, PostgreSQL.</p>
                        </div>

                    </div>

                </div>
                <div className={"p-4 bg-background border border-gray-800 transition-all duration-300 ease-in-out hover:shadow-sm hover:shadow-main/20 rounded-md group-hover:-translate-y-20 group-hover:translate-x-3"}> 
                    <div className='flex gap-2 items-center'>

                        <div className='bg-red-400 h-8 w-8 rounded-full grid place-items-center'>
                            <Server className='text-white' size={16} />
                        </div>
                        <div>
                            <span className='font-medium text-white'>ServerSide Logic</span>
                            <p className='text-gray-400 text-sm'> Node.js, express, python.</p>
                        </div>

                    </div>

                </div>
                 <div className={" bottom-4 lg:-translate-x-5 -z-10 p-4 bg-background border border-gray-800 transition-all duration-300 ease-in-out hover:shadow-sm hover:shadow-main/20 rounded-md group-hover:-translate-y-20 group-hover:translate-x-0"}> 
                    <div className='flex gap-2 items-center'>

                        <div className='bg-yellow-500 h-8 w-8 rounded-full grid place-items-center'>
                            <ArrowLeftRight className='text-white' size={16} />
                        </div>
                        <div>
                            <span className='font-medium text-white'>API Handling</span>
                            <p className='text-gray-400 text-sm'> REST , Postman, Thunder Client</p>
                        </div>

                    </div>

                </div>

            </div>
            <div className='p-6'>
                <h3 className='text-lg text-white font-medium'>Programming Capabilities</h3>
                <p className="text-gray-400 text-sm leading-5 mt-2">Tasks that I can handle in a project along with tech I use.</p>
            </div>
        </div>

    {/* second grid */}
        <div className='border border-gray-800 border-collapse'>
            <div className='lg:h-75 p-6 border-b border-gray-800 [&>div]:mb-2 group overflow-hidden'>
                {/* cards  */}
                <div className={" p-4 bg-background border border-gray-800 transition-all duration-300 ease-in-out hover:shadow-sm hover:shadow-main/20 rounded-md group-hover:-translate-y-20"}> 
                    <div className='flex gap-2 items-center'>

                        <div className='bg-blue-400 min-h-8 min-w-8 rounded-full grid place-items-center'>
                            <Braces className='text-white' size={16} />
                        </div>
                        <div>
                            <span className='font-medium text-white'>Fullstack Developer</span>
                            <p className='text-gray-400 text-sm'> Building complex and interactive web apps.</p>
                        </div>

                    </div>

                </div>
                <div className={"p-4 z-20 bg-background border border-gray-800 transition-all duration-300 ease-in-out hover:shadow-sm hover:shadow-main/20 rounded-md group-hover:-translate-y-20"}> 
                    <div className='flex gap-2 items-center'>

                        <div className='bg-green-400 min-h-8 min-w-8 rounded-full grid place-items-center'>
                            <Database className='text-white' size={16} />
                        </div>
                        <div>
                            <span className='font-medium text-white'>System Analysis & Design</span>
                            <p className='text-gray-400 text-sm'> Designing workflows, system architecture, and diagrams.</p>
                        </div>

                    </div>

                </div>
                <div className={"p-4 bg-background border border-gray-800 transition-all duration-300 ease-in-out hover:shadow-sm hover:shadow-main/20 rounded-md group-hover:-translate-y-20"}> 
                    <div className='flex gap-2 items-center'>

                        <div className='bg-red-400 min-h-8 min-w-8 rounded-full grid place-items-center'>
                            <Server className='text-white' size={16} />
                        </div>
                        <div>
                            <span className='font-medium text-white'>Project Lead</span>
                            <p className='text-gray-400 text-sm'> Guiding team members, ensuring projects stay on track.</p>
                        </div>

                    </div>

                </div>

            </div>
            <div className='p-6'>
                <h3 className='text-lg text-white font-medium'>Role Expertise</h3>
                <p className="text-gray-400 text-sm leading-5 mt-2">Roles and responsibilities that I can handle.</p>
            </div>
        </div>

        {/* third card  */}
          <div className='border border-gray-800 border-collapse'>
            <div className='h-75 border-b border-gray-800 [&>div]:mb-2 group overflow-hidden  shadow-lg shadow-background inset-16'>

           
            <div className='absolute bg-main/10 w-50 h-50 rounded-full translate-x-15 translate-y-12 blur-2xl'>
            
            
            </div>

               
               <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
                <OrbitingCircles iconSize={40} radius={45}>
                    <div className="p-1 rounded-full bg-white">
                        <Image src={"https://simpleicons.org/icons/nextdotjs.svg"} alt="nextjs" width={20} height={20} className="h-6 w-6" />
                    </div>
                </OrbitingCircles>

                <OrbitingCircles iconSize={30} radius={90} reverse speed={2} path={true}>
                     <div className="p-1 rounded-full bg-blue-400">
                        <Image src={"https://simpleicons.org/icons/react.svg"} alt="react" width={20} height={20} className="h-6 w-6" />
                    </div>
                     <div className="p-1 rounded-full bg-white">
                        <Image src={"https://simpleicons.org/icons/shadcnui.svg"} alt="shadcn" width={20} height={20} className="h-6 w-6" />
                    </div>
                   
                    <div className="p-1 rounded-full bg-blue-300">
                        <Image src={"https://simpleicons.org/icons/tailwindcss.svg"} alt="tailwindcss" width={20} height={20} className="h-6 w-6" />
                    </div>
                </OrbitingCircles>

                <OrbitingCircles iconSize={30} radius={140} speed={1} path={true}>
                     <div className="p-1 rounded-full bg-green-400">
                        <Image src={"https://simpleicons.org/icons/mongodb.svg"} alt="mongodb" width={20} height={20} className="h-6 w-6" />
                    </div>
                    <div className="p-1 rounded-full bg-green-700">
                        <Image src={"https://simpleicons.org/icons/nodedotjs.svg"} alt="nodejs" width={20} height={20} className="h-6 w-6" />
                    </div>
                    <div className="p-1 rounded-full bg-yellow-500">
                        <Image src={"https://simpleicons.org/icons/javascript.svg"} alt="javascript" width={20} height={20} className="h-6 w-6" />
                    </div>
                </OrbitingCircles>
                </div>

            </div>
            <div className='p-6'>
                <h3 className='text-lg text-white font-medium'>Current Tech Stack</h3>
                <p className="text-gray-400 text-sm leading-5 mt-2">Framework and Platforms that i currently use.</p>
            </div>
        </div>
        

    </div>
  )
}

export default Skills