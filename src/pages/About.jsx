import AboutCards from "../components/about/AboutCards"
import AboutHello from "../components/about/AboutHello"

import { motion } from "framer-motion"

import { fadeIn } from "../animations/fadeIn"
import HorizontalLine from "../components/HorizontalLine"

const About = () => {
  return (
    <div>
      <section className="h-screen">
        <div className="flex flex-col gap-20 justify-center items-center font-pri">
          <AboutHello/>
        </div>
        <div>
          <motion.a
          variants={fadeIn()} 
          initial="hidden" 
          animate="visible"
          transition={{duration: 1, delay: 1.5}}
          href="#intro"
          className='
          mt-50
          md:mt-37 
          text-6xl 
          md:text-7xl 
          flex justify-center 
          items-center 
          text-black
          scale-80
          hover:text-emerald-500
          hover:scale-100
          transition-all
          '>
            ↓
          </motion.a>
        </div>
      </section>
      <div class="divider-1 wave-1"></div>
      <section className="bg-gradient-to-b from-[#74b9ff] to-white">
        <div className="text-xl">
          <AboutCards/>
        </div>
      </section>
      {/* <div class="divider wave-2"></div> */}
    </div>
  )
}

export default About