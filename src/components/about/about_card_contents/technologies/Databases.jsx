import { BsBootstrap } from "react-icons/bs";
import { DiMongodb } from "react-icons/di";
import { FaFigma, FaGit, FaGithub, FaNodeJs, FaNpm, FaReact } from "react-icons/fa";
import { FaCss3Alt, FaFlutter, FaHtml5, FaJava, FaJs } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress, SiKotlin, SiMysql, SiPostman } from "react-icons/si";

const Databases = () => {

  const techSize = 35;

  return (
    <>
      <SiMysql size={techSize}/>
      <IoLogoFirebase size={techSize}/>
      <DiMongodb size={techSize}/>
    </>
  )
}

export default Databases