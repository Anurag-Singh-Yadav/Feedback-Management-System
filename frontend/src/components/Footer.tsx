import { FaGithub } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 border justify-center items-center mt-12 py-6 font-medium ">
      <div>
        FeedBack Managememt System 
      </div>
      <a href="https://github.com/Anurag-Singh-Yadav">
        <FaGithub size={25}/>
      </a>
    </div>
  );
};