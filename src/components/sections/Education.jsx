import React from 'react'
import { NumberTicker } from '../magicui/number-ticker'
import { AuroraText } from '../magicui/aurora-text'

const Education = () => {
  return (
    <div className="lg:grid grid-cols-3">

        <div className="grid place-items-center py-12 border border-gray-800 hover:bg-gray-600/10">

        <span className='text-xl font-semibold text-gray-400'>BIT</span>
            <span className='text-sm text-gray-600 mb-6'>Nepal Business College</span>

            <AuroraText className="text-8xl font-medium tracking-tighter">

              <NumberTicker
                value={4.00}
                decimalPlaces={2}
                className="text-8xl font-medium tracking-tighter"
                />

            </AuroraText>

            <span className=" text-gray-500 text-lg font-medium">CGPA</span>
            
        </div>

        <div className="grid place-items-center py-12 border border-gray-800 hover:bg-gray-600/10">

        <span className='text-xl font-semibold text-gray-400'>+2 Science</span>
            <span className='text-sm text-gray-600 mb-6'>Orchid College</span>

            <AuroraText className="text-8xl font-medium tracking-tighter">

              <NumberTicker
                value={3.34}
                decimalPlaces={2}
                className="text-8xl font-medium tracking-tighter"
                />

            </AuroraText>

            <span className=" text-gray-500 text-lg font-medium">CGPA</span>
            
        </div>

        <div className="grid place-items-center py-12 border border-gray-800 hover:bg-gray-600/10">

        <span className='text-xl font-semibold text-gray-400'>SEE</span>
            <span className='text-sm text-gray-600 mb-6'>Orchid School</span>

            <AuroraText className="text-8xl font-medium tracking-tighter">

              <NumberTicker
                value={3.50}
                decimalPlaces={2}
                className="text-8xl font-medium tracking-tighter"
                />

            </AuroraText>

            <span className=" text-gray-500 text-lg font-medium">GPA</span>
            
        </div>

    </div>
  )
}

export default Education