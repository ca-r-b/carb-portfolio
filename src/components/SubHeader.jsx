// Motion & Variants
import { motion } from "framer-motion";
import { rightToLeft} from "../animations/rightToLeft"
import { leftToRight } from "../animations/leftToRight"

const SubHeader = ({
  body = "Loading...", 
  directionLTR = false,
  animDelay = 1
}) => {

  const variant = directionLTR ? leftToRight() : rightToLeft();

  return (
    <motion.div 
    variants={variant} 
    initial="hidden" 
    animate="visible"
    transition={{duration: 0.3, delay: animDelay}} 
    className="">
      <h2 className="text-black font-bold text-lg md:text-3xl text-center">
        {body}
      </h2>
    </motion.div>
  )
}

export default SubHeader