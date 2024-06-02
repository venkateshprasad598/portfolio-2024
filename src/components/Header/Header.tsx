import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="mb-2 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9Prrx639SfAF3byo5-lRPglMOfxIjnqFRw&s"
          className="w-[30px] rounded-lg"
        />
      </div>

      <div className="flex items-center justify-center gap-4 text-2xl">
        <FaGithub />
        <FaLinkedin />
        <FaSquareXTwitter />
      </div>
    </div>
  );
};

export default Header;
