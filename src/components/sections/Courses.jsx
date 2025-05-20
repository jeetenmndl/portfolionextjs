import Image from 'next/image'
import React from 'react'
import Coursera from "@/../../public/coursera.jpeg"
import Git from "@/../../public/git.jpeg"
import Uiux from "@/../../public/uiux.jpeg"
import { Lens } from '../magicui/lens'

const Courses = () => {
  return (
    <div className="lg:grid grid-cols-3">

        {/* machine learning  */}
        <div className='border border-gray-800 p-4 hover:bg-gray-600/10 pb-6'>
            <div className='h-50 overflow-hidden'>
                <Lens
                    zoomFactor={2}
                    lensSize={150}
                    isStatic={false}
                    ariaLabel="Zoom Area"
                    >
                    <Image loading='lazy' src={Coursera} alt={ "machine learning jeeten.com.np"} width={1000} height={1000} className="  h-50 w-auto" />
                </Lens>
            </div>
            <div className='mt-4'>
            <span className='text-sm text-gray-500'>Deeplearning.ai | Coursera</span>
            <h3 className='text-2xl font-semibold text-white '>Supervised Machine Learning</h3>
    
            <p className="text-sm text-gray-400 mt-4">
                This course is part of the Machine Learning Specialization by Andrew Ng. It covers supervised machine learning, including regression and classification algorithms. The course includes practical exercises and projects to apply the concepts learned.
            </p>
    
            </div>
        </div>
    
        {/* git and github  */}
        <div className='border border-gray-800 p-4 hover:bg-gray-600/10 pb-6'>
            <div className='h-50 overflow-hidden'>
            <Lens
                zoomFactor={2}
                lensSize={150}
                isStatic={false}
                ariaLabel="Zoom Area"
                >
                <Image loading='lazy' src={Git} alt={ "git and github jeeten.com.np"} width={1000} height={1000} className="  w-full" />
            </Lens>
            </div>
            <div className='mt-4'>
            <span className='text-sm text-gray-500'>Pi Innovations</span>
            <h3 className='text-2xl font-semibold text-white '>Git and Github Workshop</h3>
    
            <p className="text-sm text-gray-400 mt-4">
                This workshop was conducted by Pi Innovations, a leading organization in the field of technology and innovation. The workshop covered version control, branching, and collaboration on projects. Participants gained hands-on experience with Git commands .
            </p>
    
            </div>
        </div>

        {/* ui ux  */}
        <div className='border border-gray-800 p-4 hover:bg-gray-600/10 pb-6'>
            <div className='h-50 overflow-hidden'>
            <Lens
                zoomFactor={2}
                lensSize={150}
                isStatic={false}
                ariaLabel="Zoom Area"
                >
                <Image loading='lazy' src={Uiux} alt={ "ui ux jeeten.com.np"} width={1000} height={1000} className=" w-full" />
            </Lens>
            </div>
            <div className='mt-4'>
            <span className='text-sm text-gray-500'>CSIT Association of Nepal</span>
            <h3 className='text-2xl font-semibold text-white '>UI/UX Workshop | Figma Edition</h3>
    
            <p className="text-sm text-gray-400 mt-4">
                It was organized by the CSIT Association of Nepal and focused on UI/UX design using Figma. I learned about design principles, user research, wireframing, and prototyping using Figma along with hands-on exercises to create user-friendly interfaces.
            </p>
    
            </div>
        </div>
    
       
    </div>
  )
}

export default Courses