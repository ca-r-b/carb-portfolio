import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import { bottomToTop } from "../animations/bottomToTop";

const Navbar = () => {
  const txtActive = "text-emerald-900"
  const textInactive = "text-black"

  const linkClass = ({isActive}) => 
    isActive
    ? `${txtActive} bg-emerald-300/90 hover:bg-emerald-400 rounded-full p-2 px-3 transition delay-5`
    : `${textInactive} hover:bg-amber-300/90 hover:text-amber-900 rounded-full p-2 px-3 transition delay-100`

  return (
    <motion.div
      variants={bottomToTop()} 
      initial="hidden" 
      animate="visible"
      transition={{duration: 1, delay: 1}}
      // change padding acc to size
      className="bg-white/50 text-xs sm:text-sm border-2 border-gray-800 rounded-full w-max p-2 mx-auto mt-7 md:mt-5">
      <div className="flex flex-row gap-2 justify-center">
        <NavLink className={linkClass} to={'/'}>About</NavLink>
        <NavLink className={linkClass} to={'/works-experiences'}>Works & Experiences</NavLink>
        <NavLink className={linkClass} to={'/contact'}>Contact</NavLink>
      </div>
    </motion.div>
  )
}

export default Navbar