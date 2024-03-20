"use client"; // we use this for every interative action
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import NavLink from "./NavLink";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { path: "#about", title: "About" },
  { path: "#projects", title: "Projects" },
  { path: "#contact", title: "Contact" },
];
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4">
        {/* <Link href={"/"} className="text-2xl text-white font-semibold">
          LOGO
        </Link> */}
        
        <div className="block md:hidden ml-auto mt-2 mb-2">
          {!navbarOpen ? (
            <button onClick={()=>setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200
              hover:text-white hover:border-white text-slate-200"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button onClick={()=>setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200
            hover:text-white hover:border-white text-slate-200"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto  ml-auto mt-3" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
                
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen?<MenuOverlay links={navLinks}/>:null}
    </nav>
  );
};

export default Navbar;
