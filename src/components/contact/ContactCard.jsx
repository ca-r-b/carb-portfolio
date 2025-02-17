// Motion & Variants
import { motion } from "framer-motion";
import { topToBottom } from "../../animations/topToBottom"

const ContactCard = ({
  icon, 
  link, 
  details = "Loading...",
  animDelay = 1.2
}) => {
  
  return (
    <motion.a
    variants={topToBottom()} 
    initial="hidden" 
    animate="visible"
    transition={{duration: 0.5, delay: animDelay}}
    href={link}
    className="
    flex justify-center items-center
    gap-1.5
    bg-emerald-600
    rounded-full 
    p-2.5
    min-w-50
    hover:bg-emerald-400 text-white 
    hover:text-emerald-900
    hover:duration-300
    ">
        {icon}<p className="text-sm">{details}</p>
    </motion.a>
  )
}

export default ContactCard