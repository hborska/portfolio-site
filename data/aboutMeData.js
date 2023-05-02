import { v4 as uuidv4 } from "uuid";

export const aboutMeData = [
  {
    id: uuidv4(),
    bio: "I'm currently a senior at Washington University at St. Louis. I will be joining Amazon full-time as an SDE in August 2023.",
  },
  {
    id: uuidv4(),
    bio: "I have experience working with a variety of technologies and tools, and I've worked in both big tech and startups. I spent the summer of 2021 working for a small St. Louis startup called MARSfarm. I rebuilt their entire client website to use more modern tech (React, MongoDB, Express) and added many features they couldn't have before such as remote control of their devices, Google oAuth2, data entry, dynamic data visualizations with Chart.js, along with improved website design and responsiveness. All of these changes allowed them to raise prices of their units by over 40%. I spent last summer (2022) working at Amazon. I worked with big data processing using Hadoop and EMR. At this internship, I built a tool that allowed my team to query through raw data ~100x faster than the previous tool. Before, the tool used to sift through raw data was very slow, as it processed all of the data sequentially. Even with  multi-threading optimizations, it was still very slow. I took advantage of Hadoop's concurrency to process these search requests much more quickly, and with more specificy of search criteria (before people could only specify a few fields, which I increased to be able to specify any field you want). This was completely new technology for me, previously being someone unfamiliar with big data processing.",
  },
  {
    id: uuidv4(),
    bio: "I've also worked on several cool projects, which you should check out in the Projects tab.",
  },
  {
    id: uuidv4(),
    bio: "Outside of work, I really enjoy rock climbing, primarily bouldering. I also love spending time with friends & family & gf. I also consider myself a very curious person and love listening to podcasts on a variety of topics. Recently, I've been going on an AI Alignment Problem podcast binge.",
  },
  {
    id: uuidv4(),
    bio: "Please don't hesitate to reach out! My contact information is at the bottom when you scroll down, or in the Contact tab (which also has my #).",
  },
];
