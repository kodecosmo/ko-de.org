"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "QUE - Start asking, Start Learning",
    description:
      "A learning platform that is set to redefine learning. The platform allows students to post questions and get their answers by professional teachers, just like 'stack overflow'...? No, our platform not only allows the teachers to give answers, but also to clarify those answers through a tutorial session.",
    image: "/images/projects/QUE.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kodecosmo/mSpace23",
    previewUrl: "https://github.com/kodecosmo/mSpace23",
  },
  {
    id: 2,
    title: "Cosmo voyage",
    description:
      "A space ticket booking application that was built for the tech-triatholon competition. This application has a user friendly UI and a smooth user experience with featues such as booking tickets based on planets and planet description for every planet mentioned.",
    image: "/images/projects/2.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/kodecosmo/Kode_CosmoVoyage",
    previewUrl: "https://github.com/kodecosmo/Kode_CosmoVoyage",
  },
  {
    id: 3,
    title: "MediQ",
    description:
      "An application that we are building for the Dialog Innovation challenge which we focus on using machine learninga and AI to create a platform that can help in medical emergencies by guiding them through the steps of giving first aid until you get contacted with an ambulance or a doctor.",
    image: "/images/projects/3.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/kodecosmo",
    previewUrl: "https://github.com/kodecosmo",
  },
  // {
  //   id: 4,
  //   title: "Food Ordering Application",
  //   description: "Project 4 description",
  //   image: "/images/projects/4.png",
  //   tag: ["All", "Mobile"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 5,
  //   title: "React Firebase Template",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/projects/5.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
