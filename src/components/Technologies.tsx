import { FaReact } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws } from "react-icons/fa6";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaReact className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiNextdotjs className="text-7xl text-grey-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNodejs className="text-7xl text-green-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoPostgresql className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaAws className="text-7xl text-orange-400" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
