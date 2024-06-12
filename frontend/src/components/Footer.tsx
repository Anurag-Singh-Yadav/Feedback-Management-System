import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 border justify-evenly  items-center mt-12 py-6 font-medium ">
      <div>FeedBack Managememt System</div>
      <div className="flex justify-between items-start gap-4">
        <a href="https://github.com/Anurag-Singh-Yadav">
          <FaGithub size={25} />
        </a>
        <a href="https://www.linkedin.com/in/anurag-singh-yadav-02686322b/">
          <FaLinkedin size={25} />
        </a>
      </div>
    </div>
  );
};
