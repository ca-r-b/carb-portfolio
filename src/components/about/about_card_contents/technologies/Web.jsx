import { BsBootstrap } from "react-icons/bs";
import { DiMongodb } from "react-icons/di";
import { FaFigma, FaGit, FaGithub, FaNodeJs, FaNpm, FaReact } from "react-icons/fa";
import { FaCss3Alt, FaFlutter, FaHtml5, FaJava, FaJs } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress, SiKotlin, SiMysql, SiPostman, SiTailwindcss } from "react-icons/si";

const Web = () => {
    
    const techSize = 35;

    return (
        <>
            {/* <FaHtml5 size={techSize}/>
            <FaCss3Alt size={techSize}/> */}
            <FaReact size={techSize}/>
            <FaNodeJs size={techSize}/>
            <SiExpress size={techSize}/>
            <FaFlutter size={techSize}/>
            <SiTailwindcss size={techSize}/>
            <BsBootstrap size={techSize}/>
        </>
    )
}

export default Web