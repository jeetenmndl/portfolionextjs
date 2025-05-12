import React from 'react'
import { Card } from '../ui/card'
import { ArrowLeftRight, Code, Database, Server } from 'lucide-react'

const Skills = () => {
  return (
    <div className='lg:grid lg:grid-cols-3'>

    {/* first grid */}
        <div className='border border-gray-800 border-collapse'>
            <div className='h-75 p-6 border-b border-gray-800 [&>div]:mb-2 group overflow-hidden'>
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
                <div className={" translate-x-3 p-4 z-20 bg-background border border-gray-800 transition-all duration-300 ease-in-out hover:shadow-sm hover:shadow-main/20 rounded-md group-hover:-translate-y-20 group-hover:-translate-x-0"}> 
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
                 <div className={" bottom-4 -translate-x-5 -z-10 p-4 bg-background border border-gray-800 transition-all duration-300 ease-in-out hover:shadow-sm hover:shadow-main/20 rounded-md group-hover:-translate-y-20 group-hover:translate-x-0"}> 
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
            <div className='h-75 p-6 border-b border-gray-800 [&>div]:mb-2 group overflow-hidden'>
                {/* cards  */}
                <div className={" p-4 bg-background border border-gray-800 transition-all duration-300 ease-in-out hover:shadow-sm hover:shadow-main/20 rounded-md group-hover:-translate-y-20"}> 
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
                <div className={"p-4 z-20 bg-background border border-gray-800 transition-all duration-300 ease-in-out hover:shadow-sm hover:shadow-main/20 rounded-md group-hover:-translate-y-20"}> 
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
                <div className={"p-4 bg-background border border-gray-800 transition-all duration-300 ease-in-out hover:shadow-sm hover:shadow-main/20 rounded-md group-hover:-translate-y-20"}> 
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
                 <div className={" bottom-4 -z-10 p-4 bg-background border border-gray-800 transition-all duration-300 ease-in-out hover:shadow-sm hover:shadow-main/20 rounded-md group-hover:-translate-y-20"}> 
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
        

    </div>
  )
}

export default Skills