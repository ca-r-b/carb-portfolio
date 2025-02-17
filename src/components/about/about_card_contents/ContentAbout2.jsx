import React from 'react'
import { FaFire } from 'react-icons/fa6'

const ContentAbout2 = () => {
  return (
    <div className='text-start'>
        {/* <h1 className='font-light'>Passionate about</h1> */}
        <div className='flex flex-wrap flex-col text-center items-center justify-center'>
          <span className='flex flex-wrap gap-1.5 text-center items-center justify-center'>
            {/* <FaFire className='size-3'/> */}
            <h1 className='text-[80%]'>🔥 Passionate about</h1>
          </span>
          <h2 className='font-bold'>Web Design/Development &</h2>
          <h2 className='font-bold'>IT Business Analysis</h2>
        </div>
    </div>
  )
}

export default ContentAbout2