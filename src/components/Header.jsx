// Motion & Variants
import { motion } from "framer-motion";
import { topToBottom } from "../animations/topToBottom"
import { bottomToTop } from "../animations/bottomToTop"
import { leftToRight } from "../animations/leftToRight";
import { rightToLeft } from "../animations/rightToLeft";

const Header = ({
  body = "Loading...", 
  directionTTB = true, 
  directionLTR = true, 
  isVerticalAnimation = true,
  bottomMargin = 5
}) => {

  const variant1 = directionTTB ? topToBottom() : bottomToTop();
  const variant2 = directionLTR ? leftToRight() : rightToLeft();

  return (
    <>
        <motion.div 
        variants={isVerticalAnimation ? variant1 : variant2} 
        initial="hidden" 
        animate="visible"
        transition={{duration: 0.5, delay: 0.3}}
        className={`text-center pt-10 pb-10 md:px-10 mb-${bottomMargin} font-pri`}
        >
            <h1 className="text-emerald-500 text-3xl sm:text-7xl font-bold">{body}</h1>
        </motion.div>
    </>
  )
}

export default Header