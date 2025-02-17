const EducationInfo = ({
  schoolName="School",
  schoolLevel="Level",
  schoolYear="Year",
  schoolAwards="Awards",
  schoolClubs="Clubs"
}) => {
  return (
    <div className="flex flex-col gap-0.5 font-light">
      <h1 className="text-[85%] font-bold">{schoolName}</h1>
      <h2 className="text-[60%] font-medium text-white/85">{schoolLevel}</h2>
      <h2 className="text-[60%] font-medium text-white/85">{schoolYear}</h2>
      <h2 className="text-[60%] text-white/85"><strong>Award/s: </strong>{schoolAwards}</h2>
      <h2 className="text-[60%] text-white/85"><strong>Activities & Societies: </strong>{schoolClubs}</h2>
    </div>
  )
}

export default EducationInfo