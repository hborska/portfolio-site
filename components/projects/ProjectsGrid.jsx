import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import ProjectSingle from "./ProjectSingle";
import { projectsData } from "../../data/projectsData";

function ProjectsGrid() {
  const [searchProject, setSearchProject] = useState();
  const [selectProject, setSelectProject] = useState();

  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Personal projects
        </p>
      </div>

      <div className="mt-5 sm:mt-8">
        <h3
          className="
                        font-general-regular 
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        text-md
                        sm:text-xl
                        mb-12
                        "
        >
          Below you can find some of the personal projects I've worked on over
          the past few years. These are currently just projects from college and
          don't reflect my current skill level, but keeping here because I'm
          proud of what I've worked on in the past, and I still think they're
          interesting projects. They span many different technologies and use
          cases, ranging from fantasy eSports using Solidity and Polygon, to
          basic Next js sites, to React Native scavenger hunt apps.
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-5">
        {projectsData
          .slice()
          .sort((a, b) => b["id"] - a["id"])
          .map((project, index) => (
            <ProjectSingle key={index} {...project} />
          ))}
      </div>
    </section>
  );
}

export default ProjectsGrid;
