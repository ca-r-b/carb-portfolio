import React, { useEffect, useRef } from 'react'

import { motion, useInView, useAnimation} from "framer-motion"
import { fadeIn } from "../../animations/fadeIn"

const AboutCardMid = ({
    content,
    additionalProperties = ""
}) => {
    const basic = "rounded-md p-[7%] font-medium";

    // Animation
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start("visible");
        }
    }, [isInView])

    return (
        <>
            <motion.div 
            id="intro"
            ref={ref}
            variants={fadeIn()} 
            initial="hidden" 
            animate={mainControls}
            transition={{duration: 0.5}}
            className={`
            ${basic}
            flex
            flex-col
            items-center
            justify-center
            ${additionalProperties}
            bg-blue-700/60
            hover:transition
            hover:duration-200
            hover:bg-blue-900/90
            hover:text-blue-100
            `}>
                {content}
            </motion.div>
        </>
    )
}

export default AboutCardMid