"use client";

import { experiencesData } from "@/lib/data";
import React, { FC } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import laptop from "@/assets/image1.png";
import Image from "next/image";
interface VerticalTimlineProps {}

const VerticalTimline: FC<VerticalTimlineProps> = ({}) => {
  return (
    <section id="timeline-comp">
      <VerticalTimeline lineColor="black" animate={false} className="relative">
        <div className="hidden xl:block size-4 rounded-full bg-black absolute -top-2 right-[577px]"></div>
        <div className="hidden xl:block size-4 rounded-full bg-black absolute -bottom-2 right-[577px]"></div>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#E0CCBE",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: index % 2 === 0 ? "right" : "left",
                padding: "3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #E0CCBE",
              }}
              date={<Image src={item.img} alt="Timeline Image" />}
              icon={item.icon}
              iconStyle={{
                background: "black",
                fontSize: "1.5rem",
                boxShadow: "none",
              }}
            >
              <h3 className="font-semibold capitalize text-[32px]">
                {item.text}
              </h3>

              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default VerticalTimline;
