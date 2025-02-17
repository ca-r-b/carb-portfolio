// import { EducationInfo } from "./EducationInfo.jsx"
import { FaHatCowboy } from "react-icons/fa"
import EducationInfo from "./EducationInfo"
import { HiAcademicCap } from "react-icons/hi"
import { FaGraduationCap } from "react-icons/fa6"

const ContentAbout4 = () => {
  return (
    <>
      <span className="flex flex-wrap gap-2 items-center text-center pb-3 lg:pb-5">
        {/* <FaGraduationCap/> */}
        <h1 className="text-start text-[90%]">👨🏻‍🎓 Educational Background</h1>
      </span>
      <div className="flex flex-col gap-2 lg:gap-4 text-start">
        <EducationInfo
        schoolName="De La Salle University - Manila"
        schoolLevel="Bachelor of Science in Information Technology"
        schoolYear="2020 - 2025"
        schoolAwards="Magna Cum Laude, Gawad Saliksik Awardee 2025"
        schoolClubs="Computer Studies Government, DLSU Microsoft Student Community, La Salle Computer Society"
        />
        <EducationInfo
        schoolName="San Beda University - Manila"
        schoolLevel="Senior High School (STEM)"
        schoolYear="2017 - 2019"
        schoolAwards="Academic Distinction"
        schoolClubs="Elite Mathematics Circle Club, Lux Et Umbra Societas"
        />
      </div>
    </>
  )
}

export default ContentAbout4