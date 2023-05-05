import Image from "next/image";
import { FiClock, FiTag, FiArrowLeftCircle } from "react-icons/fi";
import PagesMetaHead from "../../components/PagesMetaHead";
import { projectsData } from "../../data/projectsData";
import { useRouter } from "next/router"; // Import useRouter
import React from "react";

function ProjectSingle(props) {
  const router = useRouter(); // Instantiate useRouter

  const goBack = () => {
    router.back(); // Navigate back to the previous page
  };

  const renderTextWithLinks = (text) => {
    const regex = /\b(https?:\/\/[^\s]+)\b/g;
    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (part && part.match(regex)) {
        return (
          <a key={index} href={part} target="_blank" rel="noopener noreferrer">
            {part}
          </a>
        );
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  return (
    <div className="container mx-auto">
      <PagesMetaHead title={props.project.title} />

      {/* Header */}
      <div>
        <FiArrowLeftCircle
          className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light cursor-pointer mt-14"
          onClick={goBack}
        />
        <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light my-4 mb-7">
          {props.project.ProjectHeader.title}
        </p>

        <div className="flex">
          <div className="flex items-center mr-10">
            <FiClock className="text-xl text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {props.project.ProjectHeader.startDate} -{" "}
              {props.project.ProjectHeader.endDate || "current"}
            </span>
          </div>
          {/* <div className="flex items-center">
            <FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {props.project.ProjectHeader.tags}
            </span>
          </div> */}
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-10 mt-12">
        {props.project.ProjectImages.map((project) => {
          return (
            <div className="mb-10 md:mb-0" key={project.id}>
              <Image
                src={project.img}
                className="rounded-xl cursor-pointer shadow-lg sm:shadow-none w-full object-cover"
                alt={project.title}
                key={project.id}
                width={640}
                height={480}
              />
            </div>
          );
        })}
      </div>

      {/* Info */}
      <div className="block sm:flex gap-0 sm:gap-10 mt-14">
        <div className="w-full sm:w-1/3 text-left">
          {/* Single project client details */}
          <div className="mb-7">
            <ul className="leading-loose">
              <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                Project Links
              </p>
              {props.project.ProjectInfo.CompanyInfo.map((info) => {
                return (
                  <>
                    <li
                      className="font-general-regular text-ternary-dark dark:text-ternary-light"
                      key={info.id}
                    >
                      <>
                        {info.title}:{" "}
                        <a
                          href={info.details}
                          style={{ wordWrap: "break-word" }}
                          className={
                            "hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300"
                          }
                          aria-label="Project Website and Phone"
                        >
                          {info.details}
                        </a>
                      </>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>

          {/* Single project technologies */}
          <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              {props.project.ProjectInfo.Technologies[0].title}
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
              {props.project.ProjectInfo.Technologies[0].techs.join(", ")}
            </p>
          </div>
        </div>

        {/*  Single project right section details */}
        <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
            {props.project.ProjectInfo.ProjectDetailsHeading}
          </p>
          {props.project.ProjectInfo.ProjectDetails.map((details) => {
            return (
              <p
                key={details.id}
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
                {renderTextWithLinks(details.details)}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query;
  return {
    props: {
      project: projectsData.filter((project) => project.id === parseInt(id))[0],
    },
  };
}

export default ProjectSingle;
