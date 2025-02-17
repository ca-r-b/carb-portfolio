// Motion & Variants
import { motion } from "framer-motion";
import { leftToRight } from "../animations/leftToRight"
import { rightToLeft } from "../animations/rightToLeft"

const SubHeaderInfo = ({
  body = "Loading...", 
  directionLTR = true,
  animDelay = 1
}) => {

  const variant = directionLTR ? leftToRight() : rightToLeft();

  return (
    <motion.div 
    variants={variant} 
    initial="hidden" 
    animate="visible"
    transition={{duration: 0.5, delay: animDelay}} 
    className="text-sm text-center rounded-md p-3 min-w-1xl max-w-2xl ml-auto mr-auto">
        <p className="text-black">{body}</p>
    </motion.div>
  )
}

export default SubHeaderInfo