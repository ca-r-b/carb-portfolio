import { BsBootstrap } from "react-icons/bs";
import { DiMongodb } from "react-icons/di";
import { FaFigma, FaGit, FaGithub, FaNodeJs, FaNpm, FaReact } from "react-icons/fa";
import { FaCss3Alt, FaDartLang, FaFlutter, FaHtml5, FaJava, FaJs } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress, SiKotlin, SiMysql, SiPostman } from "react-icons/si";

const Programming = () => {
    
    const techSize = 35;

    return (
        <>
            <img className="size-10" src="/tech/csharp.svg"/>
            <FaDartLang size={techSize}/>
            <FaJava size={techSize}/>
            <SiKotlin size={techSize}/>
            <FaJs size={techSize}/>
        </>
    )
}

export default Programming