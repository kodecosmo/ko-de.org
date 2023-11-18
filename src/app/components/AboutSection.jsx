"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Technologies",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Next.js</li>
        <li>NestJS</li>
        <li>React</li>
        <li>JavaScript</li>
        <li>SQL</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "OurTeam",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Kaviru (CEO) - University of Colombo School of Computing</li>
        <li>Shakthi (COO) - University of Westminster</li>
        <li>Kenura (CTO) - University of Colombo School of Computing</li>
        <li>Sadhavi (VP) - University of Colombo School of Computing</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>CodeBlast National Hackathon - Finalists</li>
        <li>Dialog Innovation Challeneg</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About kode</h2>
          <p className="text-base lg:text-lg">
            We are undergraduates from different universities in Sri Lanka who
            are passionate on developing full stack web applications with a
            passion for creating interactive and responsive web applications. We
            have experience working with JavaScript, React, Next, Node.js,
            Express, NestJS, Larevel, HTML, CSS, and Git. We have been in 2
            hackathon finals including the CodeBalst hackathon organized by
            SLTMobitel. All of us in the team are goal oriented and looking
            forward to make a difference in the world.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Technologies{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Our team{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Hackathons{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
