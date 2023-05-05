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
            "Community Creations was a project I did in collaboration with Will Hunter (https://twitter.com/wlhunter25) and x0r Art (https://twitter.com/x0rart). x0r art has a community of tech, crypto, and digital art enthusiasts called “MEV Army”. Given that there was a large interest in digital art in the community, many members of the community had their own digital pieces they wanted to share with others. We decided it could be useful if there was a place for everyone in the community to be able to share their art pieces.",
        },
        {
          id: uuidv4(),
          details:
            "That's when we decided to create Community Creations. Each person in the community just fills out a google form with their artist name, a couple other fields, and the digital art they want to showcase. We would turn this into a “creation” for them to be listed on our platform. Each creation is essentially an ERC1155 token of unlimited cap. We made it so that users can choose to make their creations free (free to mint, user only pays gas fees) or paid. For paid creations, we used the Chainlink oracle to keep a fixed price of $10 USD per creation. That is, to mint a paid creation, you would always pay $10 USD, regardless of the price of ETH. Additionally, users could specify whether they wanted the creation to only be available to MEV Army members (token-gated) or available to everyone.",
        },
        {
          id: uuidv4(),
          details:
            "I did a lot of work for this project. I created and tested the contracts with x0r, and did the majority of the work creating the frontend along with Will. This project definitely deepened my knowledge of not only Solidity, but also more complex unit testing, as we tried to simulate every possible case where something could go wrong with the payment system. I also gained experience with Next.js and managing more complex state.",
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
        {
          id: uuidv4(),
          title: "App Store",
          details: "https://apps.apple.com/us/app/cacheitall/id1664663450",
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
            "Cache-it is a scavenger hunt app that combines elements from several different areas of tech: web3, AR, and AI.",
        },
        {
          id: uuidv4(),
          details:
            "In the app, users can login by connecting an existing wallet using WalletConnect, or create a new wallet which we do for them through a custodial wallet provider called Venly. Users can then go around and see what caches have been created near them. This is similar to the “Geocaching” app where users find actual geocaches hidden throughout the world, except in this case the geocaches are entirely digital. When a user finds an item in a cache, they have an AR screen that pops open, similar to Pokemon Go. The user can then tap the item to claim it. If the creator of the cache wants to, they can configure additional tasks the user must do before claiming an item in their cache, such as answering a trivia question. The user then can claim the item, which mints it to their wallet.",
        },
        {
          id: uuidv4(),
          details:
            "Users can also create their own geocaches. They go to the “new cache” screen and specify properties such as the name of their cache, the size of it (in meters), and some information about it. We then use some AI APIs to generate a cool origin story of how the cache item was created along with artwork for it. We also have been adding more customizability for what caches can look like. For example, we are adding more things to do upon finding a cache item than just trivia questions, adding the option to make multi-step caches, and more. The end goal for this app is to target brands, making it a platform where brands can create excitement among their customers by dropping different kinds of caches. For example, if Nike wanted to create hype around a new shoe, they could drop a cache of 10 items in NYC, and the first 10 people to claim (mint) the cache could redeem it for a free pair of the shoes.",
        },
        {
          id: uuidv4(),
          details:
            "This has been a really fun project to work on. It’s my first real mobile app (besides a crappy one for a class awhile ago), so it’s been great to see how mobile dev differs from building desktop web apps (and how it’s similar). My cofounder in the project is Trey Rudolph (https://twitter.com/T_Goody3), who you should also check out if you’re looking for a great SWE. I am temporarily putting this project on pause to focus on the end of college, as well as some summer travel plans I have.",
        },
      ],
    },
  },
];
