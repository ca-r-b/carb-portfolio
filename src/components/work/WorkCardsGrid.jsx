import { div } from 'framer-motion/client'
import React from 'react'

const WorkCardsGrid = ({
    content
}) => {
  return (
    <div className="pb-20 px-12 lg:px-30 xl:px-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 md:gap-5">
      {content}
    </div>
  )
}

export default WorkCardsGrid