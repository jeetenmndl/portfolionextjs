import React from 'react'
import { Button } from '../ui/button'
import { Terminal } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='border-b-gray-800 border-b bg-background/10 py-3  px-2 md:px-10 lg:px-20 xl:px-64'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <Terminal className="text-white" />
          <h1 className='text-xl text-white font-semibold ml-2'>Jeeten Mandal</h1>
        </div>
        <div>
            <Button size={"sm"} className=" bg-main hover:bg-main/90">
                <span className='text-white cursor-pointer'>Get Started</span>
            </Button>
        </div>
      </div>

    </div>
  )
}

export default Navbar