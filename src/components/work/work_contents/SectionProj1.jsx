import OtherLabel from "../OtherLabel"
import SeeCodeLabel from "../SeeCodeLabel"
import WorkCard from "../WorkCard"

const SectionProj1 = () => {
  return (
    <>
        <WorkCard
          projectName="Case Management System for HLAF, Inc."
          role="Full-Stack Developer & Business Analyst"
          projectDesc="A cross-platform system with analytics for improving HLAF's case monitoring and service delivery to its beneficiaries."
          techUsed={["Flutter", "Dart", "Firebase", "Gemini API"]}
          img="/projects/proj-cms.png"
          repoIsLocked={true}
          />
          <WorkCard
          projectName="Memedia"
          role="Full-Stack Developer"
          techUsed={["JavaScript", "NodeJS", "Express", "MongoDB"]}
          projectDesc="A web application designed for the meme-loving community to create, share, and enjoy the internet's funniest content."
          img="/projects/proj-memedia.png"
          hasLinkCode={true}
          linkCodeLabel={<SeeCodeLabel/>}
          linkCodeURL="https://github.com/ca-r-b/Memedia"
          hasLinkOther={true}
          linkOtherLabel={<OtherLabel label="Open Website"/>}
          linkOtherURL="https://memedia.onrender.com/"
          />
          <WorkCard
          projectName="Game Bible"
          role="Full-Stack Developer"
          techUsed={["Kotlin", "Firebase"]}
          projectDesc="A mobile platform for gamers to share their opinions and insights on the latest releases and classic titles."
          img="/projects/proj-kotlin.png"
          hasLinkCode={true}
          linkCodeLabel={<SeeCodeLabel/>}
          linkCodeURL="https://github.com/ca-r-b/Game-Bible"
          />
          <WorkCard
          projectName="Restaurant City"
          role="Full-Stack Developer"
          techUsed={["JavaScript", "NodeJS", "Express", "MongoDB"]} 
          projectDesc="An inventory management system that maximizes analytics to optimize restocking and reduce profit loss from poor supply control."
          img="/projects/proj-resto.png"
          hasLinkCode={true}
          linkCodeLabel={<SeeCodeLabel/>}
          linkCodeURL="https://github.com/lindMT/RestaurantCity"
          />
          <WorkCard
          projectName="Animal Chess"
          role="Full-Stack Developer"
          techUsed={["Java"]}
          projectDesc="A wild twist on the classic game of chess. Master animal types and environmental factors to conquer the board."
          img="/projects/proj-animal.png"
          hasLinkCode={true}
          linkCodeLabel={<SeeCodeLabel/>}
          linkCodeURL="https://github.com/ca-r-b/animal-chess"
          />
          <WorkCard
          projectName="Knowledge Management System for DLSU-CSO Laguna"
          role="Web Designer"
          techUsed={["Figma"]}
          projectDesc="A system concept of how members of the DLSU-CSO Laguna could record and share event incidents and responses."
          img="/projects/proj-kms.png"
          hasLinkOther={true}
          linkOtherLabel={<OtherLabel label="Open Figma"/>}
          linkOtherURL="https://www.figma.com/proto/xoRSCL2X5hlAon3LM1H4pq/Projects-_-Ideation?node-id=268-88&starting-point-node-id=268%3A88&t=GcOGgJRR6zT6mdsf-1"
          />
          <WorkCard
          projectName="CommuteChums"
          role="Web Designer"
          techUsed={["Figma"]}
          projectDesc="A mobile app concept for bolstering commuter safety through community networking."
          img="/projects/proj-cc.png"
          hasLinkOther={true}
          linkOtherLabel={<OtherLabel label="Open Figma"/>}
          linkOtherURL="https://www.figma.com/proto/5uZEC10eZEudpTSltEh167/CommuteChums---ITISHCI---Final?node-id=8-3&p=f&t=E0YNFWDvaFrv8fWm-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=8%3A3"
          />
          <WorkCard
          projectName="(WIP) Voyage Log"
          projectDesc="An app that allows travelers to chart their journeys, document their experiences, and celebrate their travel achievements."
          role="Full-Stack Developer"
          techUsed={["JavaScript", "React", "NextJS", "Tailwind", "Supabase"]}
          repoIsLocked={true}
        />
    </>
  )
}

export default SectionProj1