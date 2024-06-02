import { PROJECTS } from "../../constants/index.js";

interface projectProps {
  title: string;
  image: string;
  description: string;
  technologies: string[];
}

const Projects = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project: projectProps, index: number) => {
          return (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-centers">
              <div className="w-full lg:w-1/4 mb-2">
                <img
                  src={project.image}
                  width={150}
                  height={150}
                  className="object-cover rounded"
                  alt={project.title}
                />
              </div>
              <div className="w-full lg:w-3/4">
                <h6 className="mb-2 font-semibold">{project.title}</h6>

                <p className="mb-4 text-neutral-400">{project.description}</p>
                {project.technologies.map((tech: string, index: number) => {
                  return (
                    <span
                      key={index}
                      className="mr-4 mt-4 rounded bg-neutral-950 px-2 py-1 text-sm font-medium text-purple-800"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
