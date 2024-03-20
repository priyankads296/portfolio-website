"use client";
import React from "react";
import dynamic from "next/dynamic";
import AnimatedNumber from "react-animated-numbers";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,       //server side rendering
});

const achievementsList = [
  {
    metric: "Projects",
    value: "35",
    postfix:"+",
  },
  {
    metric: "CGPA",
    value: "8.5",
    postfix:"+",
  },
  {
    prefix:"~",
    metric: "Codes solved",
    value: "250",
  },
  {
    metric: "Years of Experience",
    value: "2",
    postfix:"+",
  },
];
const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-4xl font-bold text-white flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers includeComma animateToNumber={parseInt(achievement.value)} locale="en-US" className="text-white text-4xl font-bold" configs={(_,index)=>{
                  //configs tell what type of animation to apply
                  return {
                    mass:1,
                    friction:100,
                    tensions:140*(index+1),
                  };
                
                }} />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
