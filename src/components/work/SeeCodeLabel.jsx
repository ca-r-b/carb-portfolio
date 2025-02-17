import React from 'react'
import { FaGithub } from 'react-icons/fa6'

const SeeCodeLabel = () => {
  return (
    <span className='flex flex-wrap items-center justify-center gap-1.5 p-2'>
        <FaGithub className='size-5'/>
        <h1>See Code</h1>
    </span>
  )
}

export default SeeCodeLabel