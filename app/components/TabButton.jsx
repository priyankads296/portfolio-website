import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButtton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white"
    : "text-[#ADB7BE]";

  return (
    <div>
      <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
          {children}
        </p>
      </button>
      {/* {children} is what is displayed inside the button */}
      <motion.div
        variants={variants}
        initial="default"
        animate={active ? "active" : "default"}
        transition={{ duration: 0.3 }}
        className="h-1 bg-purple-500 mt-2 mr-3"
      ></motion.div>
    </div>
  );
};

export default TabButtton;
