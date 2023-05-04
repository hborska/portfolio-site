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
      startDate: "Feb 2022",
      endDate: "Feb 2022",
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
            "SuperCard is a project I worked on with a couple of friends during the ETHGlobal NFT Hack 2022 hackathon. SuperCard lets an employer pay an employee with a cashflow streamed using the SuperCard NFT contract as a conduit and the NFT as a pointer for the receiver of the stream, effectively tokenizing the income.",
        },
        {
          id: uuidv4(),
          details:
            "Employees can then open a line of credit against their income and let SuperCard handle the interest and amortization deductions when they borrow. Once they borrow, a payment stream kicks in, covering both the principal and interest within three months. Plus, there's no compounding since interest is paid in real-time!",
        },
        {
          id: uuidv4(),
          details:
            "This project was one of my first dives into web3 tech. I mainly focused on creating the frontend with React and connecting it to the contracts using ethers. I also teamed up with my teammate to debug and write tests for the smart contracts.",
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
      title: "TeamDiff",
      startDate: "Jan 2022",
      endDate: "July 2022",
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
            "TeamDiff is definitely the project that has helped me grow the most as a developer.",
        },
        {
          id: uuidv4(),
          details:
            "I was starting to become interested in web3 after Supercard, and was looking for a new project to work on (not necessarily web3 though). A friend of a friend reached out to me and got me to join him in working on this project, along with several others.",
        },
        {
          id: uuidv4(),
          details:
            "The product was essentially fantasy football, but on the blockchain, and instead of football it was eSports (League of Legends). Each player was its own digital asset (NFT), and we had a whole launch event where people who got their names on the whitelist could open their packs for 5 random LCS players. It was essentially an experimentation with blockchain technology, seeing what it could do. The launch was relatively successful, although we had a bot that swept a lot of the NFTs by generating different wallets and claiming the packs. We had a beta run of a fantasy season that was relatively successful, although it was hard to maintain a lot of the initial interest after the pack opening.",
        },
        {
          id: uuidv4(),
          details:
            "I ended up being the lead for engineering, leading a team of 5 super awesome engineers. I specialized in developing the smart contracts for the project, which was exciting for me because Solidity was a completely new technology. I learned a lot  about Solidity, and also other useful stuff like how blockchains work, encryption, and low-level programming. We used a very new and experimental proxy contract design, where each league created was essesntially a proxy of an original league contract, where the only difference was the contract's data (players in the league, size of the league, etc.). It was really cool to work with such cutting-edge technology.",
        },
        {
          id: uuidv4(),
          details:
            "We ended up abandoning the project due to members of the team needing to leave for full time work. Regardless of the outcome, I am still immensely proud of the work we did. I learned a ton, and made some lifelong friends.",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Community Creations",
    category: "Web Application",
    img: "/images/projects/cc2.png",
    ProjectHeader: {
      title: "Community Creations",
      startDate: "September 2022",
      endDate: "January 2023",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Community Creations image",
        img: "/images/projects/cc1.png",
      },
      {
        id: uuidv4(),
        title: "Community Creations image",
        img: "/images/projects/cc2.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Website",
          details: "https://cc.x0rart.com/", // insert website link
        },
        // {
        //   id: uuidv4(),
        //   title: "Github",
        //   details: "", // insert github link
        // },
        {
          id: uuidv4(),
          title: "Etherscan",
          details:
            "https://etherscan.io/address/0x2AeA2f0183632b4EaA909EFed58A6E0B8E48Ef25",
        },
      ],

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
  {
    id: 4,
    title: "Cache-it",
    category: "Mobile App",
    img: "/images/projects/cache1.png",
    ProjectHeader: {
      title: "Cache-it",
      startDate: "October 2022",
      endDate: "April 2023",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Cache-it image",
        img: "/images/projects/cache1.png",
      },
      {
        id: uuidv4(),
        title: "Cache-it image",
        img: "/images/projects/cache2.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Website",
          details: "https://cacheit.web.app/#", // insert website link
        },
      ],

      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["React Native", "Solidity"],
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
