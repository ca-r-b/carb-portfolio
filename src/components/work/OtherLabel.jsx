import React from 'react'
import { FaLink } from 'react-icons/fa6'

const OtherLabel = ({
    label = "Label"
}) => {
  return (
    <span className='flex flex-wrap justify-center items-center gap-1.5 p-2'>
        <FaLink className='size-5'/>
        <h1>{label}</h1>
    </span>
  )
}

export default OtherLabel