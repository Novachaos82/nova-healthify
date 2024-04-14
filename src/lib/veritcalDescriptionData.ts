import {
  GitBranchPlus,
  LucideGraduationCap,
  RectangleVertical,
} from "lucide-react";
import React from "react";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";

export const timeLineData = [
  {
    text: "Nutri Grade",

    description:
      "with the help of this app one can get to know the overall score of the products nutritional value , this score or grade is based upon nutritional value mentioned on the product pack.",
    icon: React.createElement(LucideGraduationCap),
    img: image1,
  },
  {
    text: "Additives and preservatives",

    description:
      "When looking at the ingredient list on a food label, you may see things like E 300, E 104, E 129, xanthan gum, nitrites, thickeners, and glutamate. These are additives. These are not the usual things you have at home in the kitchen.",
    icon: React.createElement(LucideGraduationCap),
    img: image2,
  },
  {
    text: "Food processing",

    description:
      "Food processing is also one of the important factors that create the quality of food products in some countries, which have been classified into many different types. However, since we (India) do not have active regulatory standards at present, we can support consumers with highly processed products. products and we hope to have a classification by category soon.",
    icon: React.createElement(LucideGraduationCap),
    img: image3,
  },
  //  {
  //    title: "Front-End Developer",
  //    location: "Orlando, FL",
  //    description:
  //      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
  //    icon: React.createElement(GitBranchPlus),
  //    date: "2019 - 2021",
  //  },
  //  {
  //    title: "Full-Stack Developer",
  //    location: "Houston, TX",
  //    description:
  //      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //    icon: React.createElement(RectangleVertical),
  //    date: "2021 - present",
  //  },
] as const;
