"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-24 mb-16 sm:mb-24">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold capitalize">{item.title}</h3>
                  {item.company && (
                    <p className="font-medium !mt-0 text-gray-600 dark:text-gray-300">
                      {item.company}
                    </p>
                  )}
                  <p className="font-normal !mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {item.location}
                  </p>
                </div>
                {item.companyLogo && (
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 dark:border-gray-600">
                    <img
                      src={item.companyLogo}
                      alt={`${item.company} logo`}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                )}
              </div>
              <p className="!mt-3 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
