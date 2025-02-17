import { BsBootstrap } from "react-icons/bs";
import { DiMongodb } from "react-icons/di";
import { FaFigma, FaGit, FaGitAlt, FaGithub, FaNodeJs, FaNpm, FaReact } from "react-icons/fa";
import { FaCss3Alt, FaFlutter, FaHtml5, FaJava, FaJs } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { PiNotionLogo } from "react-icons/pi";
import { SiExpress, SiKotlin, SiLucid, SiMysql, SiPostman } from "react-icons/si";

const OtherTools = () => {
    
    const techSize = 35;

    return (
        <>
            <FaNpm size={techSize}/>
            <FaGitAlt size={techSize}/>
            <FaGithub size={techSize}/>
            <FaFigma size={techSize}/>
            <SiLucid size={techSize}/>
            {/* <SiPostman size={techSize}/> */}
        </>
    )
}

export default OtherTools
