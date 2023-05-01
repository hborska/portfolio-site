import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import ProjectSingle from "./ProjectSingle";
import { projectsData } from "../../data/projectsData";
import ProjectsFilter from "./ProjectsFilter";

function ProjectsGrid() {
  const [searchProject, setSearchProject] = useState();
  const [selectProject, setSelectProject] = useState();

  // @todo - To be fixed
  // const searchProjectsByTitle = projectsData.filter((item) => {
  // 	const result = item.title
  // 		.toLowerCase()
  // 		.includes(searchProject.toLowerCase())
  // 		? item
  // 		: searchProject == ''
  // 		? item
  // 		: '';
  // 	return result;
  // });

  const selectProjectsByCategory = projectsData.filter((item) => {
    let category =
      item.category.charAt(0).toUpperCase() + item.category.slice(1);
    return category.includes(selectProject);
  });

  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Personal projects
        </p>
      </div>

      <div className="mt-10 sm:mt-16">
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
          Below you can see some of the personal projects I've been working on
          over the past couple years. They span many different technologies and
          use cases, ranging from fantasy eSports using Solidity and Polygon, to
          basic Next js sites, to React Native apps.
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-5">
        {selectProject
          ? selectProjectsByCategory.map((project, index) => {
              return <ProjectSingle key={index} {...project} />;
            })
          : projectsData.map((project, index) => (
              <ProjectSingle key={index} {...project} />
            ))}
      </div>
    </section>
  );
}

export default ProjectsGrid;
