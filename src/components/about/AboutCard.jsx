import React, { useEffect, useRef } from 'react'

import { motion, useInView, useAnimation} from "framer-motion"
import { bottomToTop } from "../../animations/bottomToTop"

const AboutCard = ({
    content,
    bgColor = "bg-black/65 hover:bg-black/80 hover:transition hover:duration-200",
    additionalProperties = "",
    aniVariant = bottomToTop(),
    aniDuration = 0.3,
    aniDelay = 1,
}) => {
    const basic = "rounded-md p-5";

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
        <motion.div 
        ref={ref}
        variants={aniVariant} 
        initial="hidden" 
        animate={mainControls}
        transition={{duration: aniDuration, delay: aniDelay}} 
        className={`
            ${bgColor}
            ${basic}
            ${additionalProperties}
            border-black
            `}>
            {content}
        </motion.div>
    )
}

export default AboutCard