import { motion } from "framer-motion";
import { bottomToTop } from "../animations/bottomToTop.js";

const HorizontalLine = () => {
  return (
    <div>
        <motion.hr
        variants={bottomToTop()} 
        initial="hidden" 
        animate="visible"
        transition={{duration: 0.5, delay: 0.25}}
        className="mb-10 h-px max-w-80 bg-white-200 border-0 dark:bg-zinc-600 mr-auto ml-auto"
        />
    </div>
    )
}

export default HorizontalLine