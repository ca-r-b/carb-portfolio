import React from 'react'
import { FaFileArrowDown } from 'react-icons/fa6'

const ContentAbout6 = () => {
  return (
    <a
    href="Batac, Carlo Antonio - CV.pdf"
    download
    >
      <div className='flex flex-wrap gap-2 items-center text-center justify-center'>
        {/* <FaFileArrowDown/> */}
        <h1 className='font-bold'>📄 Download CV</h1>
      </div>
    </a>
  )
}

export default ContentAbout6