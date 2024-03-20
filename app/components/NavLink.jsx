import React from 'react';
import Link from 'next/link';

const NavLink = ({href,title}) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target=document.querySelector(href);
    if(target){
      window.scrollTo({
        top:target.offsetTop,
        behavior:'smooth'     // Add smooth scrolling behavior
      });
    }
  }

  return (
     <Link href={href} onClick={handleClick}
     className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
      {title}
    </Link>
  )
}

export default NavLink
