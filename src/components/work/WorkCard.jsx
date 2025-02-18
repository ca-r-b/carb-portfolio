import { useState } from "react";

import Tag from "../Tag";
import { FaLock } from "react-icons/fa6";

const WorkCard = ({
  projectName = "Loading...",
  role = "Loading...",
  projectDesc = "Loading...",
  techUsed = ["Loading..."],
  img = "/projects/proj-bt.png",
  hasLinkCode = false,
  hasLinkOther = false,
  repoIsLocked = false,
  linkCodeURL = "",
  linkCodeLabel = "Open",
  linkOtherURL = "",
  linkOtherLabel = "Open"
}) => {

  const techList = techUsed.map((tech, index) => {
    return <li key={index}><Tag content={tech}/></li>;
  });

  return (
    <div className="pb-5 md:pb-10">
      <div className=" mx-auto relative h-75 max-w-1000 md:max-w-[85%] overflow-hidden items-start rounded-2xl group">
        <img src={img} alt="" className="transition-transform blur-[0.3px] group-hover:scale-110 duration-200 mx-auto drop-shadow-2xl"></img>
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/90 via-black/60 to-transparent duration-200">
          <div className="p-5 text-white text-[13px]">
            <h1 className="text-xl md:text-[18px] font-bold font-pri">
              {projectName}
            </h1>
            {/* <h2 className="text-white/70">
            Role: {role}
            </h2> */}
            {/* <h2 className="text-white/80">
              {role}
            </h2> */}
            <div className="pt-2 flex flex-row gap-2">
              {
                hasLinkCode
                ? <a href={linkCodeURL} target="_blank" className="bg-slate-500/60 rounded-md hover:bg-amber-400 hover:transition hover:duration-200 hover:text-amber-900">{linkCodeLabel}</a>
                : null
              }
              {
                repoIsLocked
                ? <a className="bg-slate-500/60 p-2 rounded-md flex flex-wrap items-center gap-2 hover:bg-black/50 hover:transition hover:duration-200">
                <FaLock/> Private repository
                </a>
                : null
              }
              {
                hasLinkOther
                ? <a href={linkOtherURL} target="_blank" className="bg-slate-500/60 rounded-md hover:bg-amber-400 hover:transition hover:duration-200 hover:text-amber-900">{linkOtherLabel}</a>
                : null
              }
              </div>
          </div>
        </div>
      </div>
      <div className="pt-3 md:px-9 lg:px-[18%] xl:px-[10%] pb-1 md:pb-3 font-medium flex flex-col justify-between">
         <p className="text-[13px] text-justify pt-2 pb-2">{projectDesc}</p>
         <ul className="flex flex-wrap gap-1">{techList}</ul>
      </div>
    </div>

  )
}

export default WorkCard