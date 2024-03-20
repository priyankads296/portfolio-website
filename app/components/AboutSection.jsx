"use client";
import Image from "next/image";
import React, { useTransition, useState, useRef } from "react";
import TabButton from "./TabButton";
import { motion, useInView } from "framer-motion";

const TAB_DATA = [
  {
    //skills
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>
          <span className="font-bold text-[#747a7e]">Programming Languages:&nbsp; </span>
          <span className="font-italic text-sm">C#, JAVA ,
          C.</span>
        </li>
        <li>
          <span className="font-bold text-[#747a7e]">Web Development:&nbsp;</span> <span className="text-sm">
            HTML5, CSS3,
            JavaScript, jQuery, Asp.NET Core Web API, ASP.NET MVC, ReactJS.
          </span>
        </li>
        <li>
          <span className="font-bold text-[#747a7e]">Database: &nbsp;</span><span className="text-sm">SQL, MongoDB, T-SQL.</span>
        </li>
        <li>
          <span className="font-bold text-[#747a7e]">Frameworks and tools:&nbsp;</span> <span className="text-sm">Bootstrap 4, Angular, GenAI.</span>
        </li>
        <li>
          <span className="font-bold text-[#747a7e]">Cloud:&nbsp;</span> <span className="text-sm">Azure.</span>
        </li>
        <li><span className="font-bold text-[#747a7e]">Data Structures & Algorithms.</span></li>
      </ul>
    ),
  },
  {
    //education
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>
          <span className="font-bold text-[#747a7e]">B.Tech&nbsp;(Electronics And
            Communication Engineering)</span> <li className="text-sm">
            Future Institute of Engineering and
          Management, Kolkata, India.
          </li> 
        </li>
        <li className="mt-2">
          <span className="font-bold text-[#747a7e]">Higher Secondary (WBCHSE)</span>
          <li className="text-sm">National High School for Girls, Kolkata, India.</li>
        </li>
        <li className="mt-2">
          <span className="font-bold text-[#747a7e]">Secondary (WBBSE)</span>  <li className="text-sm">
            National
            High School for Girls, Kolkata, India.
          </li>
        </li>
      </ul>
    ),
  },
  {
    //certifications
    title: "Certifications",
    id: "certifications",
    content: (
      <ul>
        <li>
          <span className="font-bold text-[#747a7e]">Microsoft Certified:&nbsp;</span><li className="text-sm">
             AZ-900:
            Microsoft Azure Fundamentals.
          </li>
        </li>
        <li className="mt-2">
          <span className="font-bold text-[#747a7e]">Microsoft Certified:&nbsp;</span><li className="text-sm">
             AI-900:
            Microsoft Azure AI Fundamentals.
          </li>
        </li>
      </ul>
    ),
  },
];
const AboutSection = () => {
  const ref=useRef();
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const isInView = useInView(ref, { once: true });
  

  const variants = {
    initial: { y: 50, opacity: 0 }, //for sliding effect
    animate: { y: 0, opacity: 1 },
  };

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about"
    ref={ref}>
      <motion.div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap=16 sm:py-16 xl:py-16"
      variants={variants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ duration: 0.3, delay: 0.5 }}>
        <Image
          src="/images/aboutImg.jpg"
          style={{ boxShadow: "0 0px 5px 1px #fff" }}
          width={500}
          height={500}
          alt="Priyanka"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 mt-4 text-[#9979d7] ">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full-stack developer with 1.5+ years of experience in .NET
            development. I am a passionate and hardworking developer who loves
            to code and solve problems. I have experience working with ASP.Net
            Core, WebAPI, Angular, SQlServer, MongoDB etc. I am a quick learner
            and always open to learning new technologies. I am a team player and
            have good communication skills.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              active={tab === "skills"}
              selectTab={() => handleTabChange("skills")}
            >
              {" "}
              Skills{""}
            </TabButton>
            <TabButton
              active={tab === "education"}
              selectTab={() => handleTabChange("education")}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              active={tab === "certifications"}
              selectTab={() => handleTabChange("certifications")}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t)=>t.id===tab).content}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
