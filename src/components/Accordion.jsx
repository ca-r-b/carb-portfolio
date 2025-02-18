import React, { useState } from 'react'

const Accordion = ({
    title="Title",
    subtitle="Subtitle",
    duration="N/A",
    body="This is the information",
}) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <>
            <div className='py-3 text-start'>
                <button 
                onClick={() => setAccordionOpen(!accordionOpen)}
                className='flex justify-between w-full text-start'>
                    <div className='flex flex-col'>
                        <span className='text-[#54b5ff] text-lg md:text-xl font-bold'>{title}</span>
                        <span className='text-blue-100'>{duration}</span>
                        <span className='text-blue-100'>{subtitle}</span>
                    </div>
                    <svg
                    className="fill-white shrink-0 ml-8"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center transition duration-200 ease-out ${
                        accordionOpen && "!rotate-180"
                        }`}
                    />
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                        accordionOpen && "!rotate-180"
                        }`}
                    />
                    </svg>
                </button>
                <div className={`
                    grid overflow-hidden transition-all duration-300 ease-in-out text-sm
                    ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}}
                    `}>
                    <div className='text-sm md:text-base overflow-hidden'>
                        <div className='text-white mt-[1%]'>
                            {body}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accordion