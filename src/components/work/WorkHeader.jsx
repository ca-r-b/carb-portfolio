
import { Typewriter } from "react-simple-typewriter"

const WorkHeader = ({
    mainTitle = "Loading...",
    subTitle1 = "Loading...",
    subTitle2 = "Loading...",
    fontMainTitleColor = "text-black",
    fontSubtitleColor = "text-black/50"
}) => {
  return (
    <>
        <div className={`font-pri text-[35px] md:text-5xl pt-20 pb-10 px-10 lg:px-35 xl:px-[12%] text-center md:text-start ${fontMainTitleColor}`}>
            <h1 className="font-bold">{mainTitle}</h1>
            <h2 className={`font-pri text-[20px] md:text-4xl pt-2 ${fontSubtitleColor}`}>
                <Typewriter
                words={[`${subTitle1}`, `${subTitle2}`]}
                cursor={true}
                cursorStyle="_"
                typeSpeed={50}
                deleteSpeed={30}
                loop={0}
                />
            </h2>
        </div>
    </>
  )
}

export default WorkHeader