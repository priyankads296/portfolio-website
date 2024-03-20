import React from 'react'

const ProjectTag = ({name,onClick,isSelected}) => {
  const buttonStyles=isSelected?"text-white bg-purple-500"
  :"text-[#ADB7BE] border-slate-600 hover:border-white"
  return (
    
      <button className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer` } onClick={()=>onClick(name)}>{name}
      {/* when the JSX element is clicked, it triggers the onClick function passed as a prop to the component, and it passes along the name prop to that function. */}
      </button>
    
  )
}

export default ProjectTag
