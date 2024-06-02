import { EXPERIENCES } from ".././../constants/index.js";

interface experiencesProps {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

const Experience = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <h1 className="my-20 text-center text-4xl">Experience</h1>
      <div>
        {EXPERIENCES.map((exp: experiencesProps, index: number) => {
          return (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-centers">
              <div className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-neutral-400">{exp.year}</p>
              </div>
              <div className="w-full lg:w-3/4">
                <h6 className="mb-2 font-semibold">
                  {exp.role} - <span>{exp.company}</span>
                </h6>

                <p className="mb-4 text-neutral-400">{exp.description}</p>
                {exp.technologies.map((tech: string, index: number) => {
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

export default Experience;
