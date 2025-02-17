import React from 'react'

const Tag = ({content = "Java"}) => {
  return (
    <div className='text-xs py-1 px-[10px] rounded-full text-amber-900 bg-amber-400/75 text-[11px]'>
        {content}
    </div>
  )
}

export default Tag