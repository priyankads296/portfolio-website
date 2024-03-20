"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { inter } from "./../fonts.ts";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 mx-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1
            className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl
            lg:leading-normal font-extrabold"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 via-purple-500 to-blue-500">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Priyanka",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "a Dotnet Developer",
                1000,
                "a Front End Developer",
                1000,
                "a Coder",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-b lg:text-xl mb-6">
            Coding enthusiast proficient in frontend and backend development.
          </p>
          <div>
            <button
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white 
              bg-gradient-to-br from-yellow-500 via-purple-500 to-blue-500 hover:bg-slate-200 text-white"
            >
              <Link href="#contact">
                Hire Me
              </Link>
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full  bg-gradient-to-br from-yellow-500 via-purple-500 to-blue-500  mr-4 bg-transparent hover:bg-slate-800  mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                <a
                  href="https://drive.google.com/file/d/1p2dGZ6sMxqaT5LP_sJ3ON87uqM_a0LWp/view?usp=drive_link"
                  target="_blank"
                  download="Priyanka_Resume.pdf"
                >
                  Download CV
                </a>
              </span>
            </button>
            {/* //https://drive.google.com/file/d/1p2dGZ6sMxqaT5LP_sJ3ON87uqM_a0LWp/view?usp=drive_link */}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <motion.div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/intro.avif"
              width={300}
              height={500}
              alt="hero"
              className="absolute rounded-full mt-4"
              style={{ boxShadow: "0 0 15px #fff" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
