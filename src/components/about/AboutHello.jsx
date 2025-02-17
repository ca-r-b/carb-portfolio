import React from 'react'
import { useTypewriter, Cursor, Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import { fadeIn } from "../../animations/fadeIn"

const AboutHello = () => {

    const [text] = useTypewriter({
        words: [
            "Get to know me ('ᵕ')ﾉﾞ",
        ],
        typeSpeed: 70,
        deleteSpeed: 30,
        delaySpeed: 2000,
    })

    return (
        <>
            <motion.div
            variants={fadeIn()} 
            initial="hidden" 
            animate="visible"
            transition={{duration: 0.5, delay: 0.2}}
            >
                <h1 className="mt-35 text-black text-center font-bold text-6xl md:text-9xl">
                    Welcome!
                </h1>
            </motion.div>
            <div>
                <h2 className='font-normal text-2xl md:text-4xl'>
                    <span>{text}</span>
                    <span className='text-black/50'>
                        <Cursor cursorStyle="_"/>
                    </span>
                    {/* <span><Cursor/></span> */}
                </h2>
            </div>
        </>
    )
}

export default AboutHello