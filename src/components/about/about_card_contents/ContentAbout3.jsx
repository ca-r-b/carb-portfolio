import TechInfo from "./TechInfo";

import Programming from "./technologies/Programming";
import Web from "./technologies/Web";
import Databases from "./technologies/Databases";
import OtherTools from "./technologies/OtherTools"

const ContentAbout3 = () => {
  return (
    <>
        <div className="flex flex-col gap-1">
            <div>
                <div className="flex flex-wrap flex-col justify-center gap-5 mx-auto">
                    <TechInfo
                    title="Programming Languages"
                    content={
                    <Programming/>
                    }
                    />
                    <TechInfo
                    title="Frameworks & Web Development"
                    content={<Web/>}
                    />
                    <TechInfo
                    title="Databases"
                    content={<Databases/>}
                    />
                    <TechInfo
                    title="Other Tools"
                    content={<OtherTools/>}
                    />
                </div>
            </div>
        </div>
        <div className="mt-5 text-white">
            <p className="text-[70%]">...more to learn soon!</p>
        </div>
    </>
  )
}

export default ContentAbout3