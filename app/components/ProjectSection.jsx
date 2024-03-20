"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Food Delivery Website",
    description:
      "A Food Delivery website built with React and ASP.Net Core WebAPI .",
    image: "/images/projects/CustomerHomePage.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/priyankads296/react_RedMango_API.git",
  },
  {
    id: 3,
    title: "Employee Management System",
    description:
      "Developed a Member Registration Portal using .NET Core WebAPI, Angular 15, and MongoDB. Practiced hosting on Microsoft Azure portal using Azure App Service and other services .",
    image: "/images/projects/MemRegHomepage.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/priyankads296/MemRegPortal_App.git",
  },
  {
    id: 4,
    title: "HealthCare Organisation",
    description:
      "Developed a Healthcare Portal using .NET Core WebAPI, Angular 15, and MongoDB to maintain records for claims.",
    image: "/images/projects/HCOAppHomePage.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/priyankads296/HCOWebApp.git",
  },
  {
    id: 5,
    title: "Basic Portfolio",
    description: "A basic portfolio website built with HTML, CSS and JSS.",
    image: "/images/projects/ResumeHomepage.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/priyankads296/Resume-Project.git",
  },
  {
    id: 6,
    title: "RETAIL BANKING SYSTEM",
    description:
      "Worked on creating a RETAIL BANKING SYSTEM under this project.Developed different microservices using the concept of ASP .Net Core WebAPI and ReactJS. The proposed solution has a common platform where the employee and the customer interact to perform e-banking operations",
    image: "/images/projects/RetailBankingDashboard.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/priyankads296/MFPE-Retail-Banking-System.git",
  },
  {
    id: 7,
    title: "E Voting Metamask",
    description:
      "A prototype for Electronic voting system using Blockchain with help of Metamask. ",
    image: "/images/projects/EVotingMetamask.png",
    tag: ["All", "Others"],
    gitUrl: "https://github.com/priyankads296/evote.git",
  },
  {
    id: 8,
    title: "Cowin Vaccination Center Finder",
    description:
      "Web App for the real time monitoring of Covid 19 vaccine availability. It takes help of Co-Win API to fetch data from Government database.",
    image: "/images/projects/CowinProject.jpg",
    tag: ["All", "Others"],
    gitUrl: "https://github.com/priyankads296/CoWin.git",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); //once component is in view, animation will not happen in view again

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter(
    (project) => project.tag.includes(tag)
    //This means that for each project in projectsData, it checks if the tag property of the project includes the tag value(state value). If it does, that project is included in the filteredProjects array.
  );
  const cardVariants = {
    initial: { y: 50, opacity: 0 }, //for sliding effect
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-3xl lg:text-4xl font-bold mb-5 mt-4 text-[#9979d7] text-center ">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag == "All"}
        />
        {/*The handleTagChange function is called, which updates the state of tag to the name of the clicked ProjectTag. 
        If the tag state is equal to the name of the ProjectTag, then isSelected is true; otherwise, it's false*/}
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag == "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Others"
          isSelected={tag == "Others"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{duration:0.3,delay:index*0.4}}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              tags={project}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
