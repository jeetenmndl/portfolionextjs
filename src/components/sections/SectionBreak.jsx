import React from 'react'
import { FlickeringGrid } from '../magicui/flickering-grid'

const SectionBreak = (props) => {
  return (
    <div className='relative border-gray-800 border h-30 flex items-center justify-center text-center text-gray-300'>
        <FlickeringGrid
        className="absolute inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)] h-full"
        squareSize={4}
        gridGap={4}
        color="#ffffff"
        maxOpacity={0.2}
        flickerChance={0.02}
        height={120}
      />
      <h2 className='text-xl font-semibold '>{props.text}</h2>
    </div>
  )
}

export default SectionBreak