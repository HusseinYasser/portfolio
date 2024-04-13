import MyImg from "../assets/Hussein.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import useTypewriter from "../hooks/useTypeWriter";

const Header = () => {

  const titleName = useTypewriter('Hussein Ebrahim', 200);

  return (
    <div className="ml-40 flex space-x-5 items-center pt-20">
      <img src={MyImg} alt="Hussein" className="rounded-full w-48 h-auto" />
      <div className="flex-col space-y-3">
        <div className="font-pixelfy text-white text-4xl">
          {titleName}
        </div>
        <div className="font-pixelfy text-white text-2xl">
          Software Engineer
        </div> 
        <div className = "flex space-x-3 text-white text-lg">
          <a href = "https://www.linkedin.com/in/hussein-ebrahim-044613206/">
            <FaLinkedin className="cursor-pointer" /> 
          </a>
          <a href = "https://github.com/HusseinYasser">
            <FaGithub className="cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;