import WorkHistory from "../components/WorkHistory"
import WorkHeader from "../components/work/WorkHeader"
import SectionProj1 from "../components/work/work_contents/SectionProj1"
import WorkCardsGrid from "../components/work/WorkCardsGrid"

import { motion } from 'framer-motion'
import { topToBottom } from "../animations/topToBottom"

const Works = () => {
  return (
    <motion.div
    variants={topToBottom()} 
    initial="hidden" 
    animate="visible"
    transition={{duration: 0.5, delay: 0.2}}
    >
      <div className="flex flex-col">
        <section id="prev">
          <WorkHeader
          mainTitle="Projects & Concepts 🚀"
          subTitle1="Built with passion..."
          subTitle2="...powered by coffee"
          />
          <WorkCardsGrid content={<SectionProj1/>}/>
        </section>
        <div class="divider-2 wave-2-3"></div>
        <section>
          <div className="flex flex-col justify-between bg-[#222f3e] pb-10">
            <WorkHeader
            mainTitle="Roles & Experiences 🎖️"
            subTitle1="Shaping my career..."
            subTitle2="...one role at a time"
            fontMainTitleColor="text-white"
            fontSubtitleColor="text-white/60"
            />
            <WorkHistory/>
          </div>
        </section>
        <div class="divider-2 wave-2-4"></div>
        <div className="flex flex-wrap items-center justify-center mt-3 mx-auto bg-[#222f3e] text-center max-w-[50%] max-h-[10%] rounded-lg mb-5 hover:bg-[#222f3e]/70 transition duration-300">
          <a href="#prev">
            <div className="text-white text-sm md:text-base p-3 md:p-5">
              Go back to top ↑
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default Works