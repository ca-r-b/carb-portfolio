import React from 'react'
import { FaLock } from 'react-icons/fa6'

const PrivateRepoLabel = () => {
  return (
    <span className='flex flex-wrap items-center justify-center gap-1.5 p-2'>
        <FaLock className='size-5'/>
        <h1>Private repository</h1>
    </span>
  )
}

export default PrivateRepoLabel