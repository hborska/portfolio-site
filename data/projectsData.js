import { v4 as uuidv4 } from "uuid";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

export const projectsData = [
  // sorting this on FE by reverse ID (Adding new projects to the end)
  {
    id: 1,
    title: "Supercard",
    category: "Web Application",
    img: "/images/projects/supercard2.png",
    ProjectHeader: {
      title: "Supercard",
      startDate: "February 2022",
      endDate: "February 2022",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Supercard image",
        img: "/images/projects/supercard1.png",
      },
      {
        id: uuidv4(),
        title: "Supercard image",
        img: "/images/projects/supercard2.png",
      },
      {
        id: uuidv4(),
        title: "Supercard image",
        img: "/images/projects/supercard3.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Website",
          details: "https://ethglobal.com/showcase/supercard-3kxkf", // insert website link
        },
        {
          id: uuidv4(),
          title: "Github",
          details: "https://github.com/sunnyjaycer/supercard", // insert github link
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Solidity", "React", "ethers"],
        },
      ],
      ProjectDetailsHeading: "Project Summary",
      ProjectDetails: [
        // each detail is a paragraph
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
      ],
    },
  },
  {
    id: 2,
    title: "TeamDiff",
    category: "Web Application",
    img: "/images/projects/teamdiff1.png",
    ProjectHeader: {
      title: "Supercard",
      startDate: "February 2022",
      endDate: "February 2022",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Supercard image",
        img: "/images/projects/teamdiff1.png",
      },
      {
        id: uuidv4(),
        title: "Supercard image",
        img: "/images/projects/teamdiff2.png",
      },
      {
        id: uuidv4(),
        title: "Supercard image",
        img: "/images/projects/teamdiff3.png",
      },
      {
        id: uuidv4(),
        title: "Supercard image",
        img: "/images/projects/teamdiff4.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Website",
          details: "https://teamdiff.xyz/", // insert website link
        },
        {
          id: uuidv4(),
          title: "Github",
          details: "https://github.com/momint-gg/teamdiff", // insert github link
        },
        {
          id: uuidv4(),
          title: "Polygonscan",
          details:
            "https://polygonscan.com/address/0x5b790947e251f8472a2083787eb6ecc7925b5c30",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Solidity", "Next", "ethers"],
        },
      ],
      ProjectDetailsHeading: "Project Summary",
      ProjectDetails: [
        // each detail is a paragraph
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
      ],
    },
  },
];
