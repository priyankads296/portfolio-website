import { CodeBracketIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'

const ProjectCard = ({imgUrl,title,description,gitUrl}) => {
  return (
    <div>
      <div style={{backgroundImage:`url(${imgUrl})`,backgroundSize:"cover"}} className="h-52 md:h-72 relative rounded-t-xl group mt-2">
        <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-5000'>
          <Link href={gitUrl} className='h-14 w-14 text-[#ADB7BE] border-2 relative rounded-full border-[#ADB7BE] hover:border-white'>
            <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white '/>
          </Link>
        </div>
      </div>
      <div className='text-white rounded-b-xl bg-[#181818]py-6 px-4 mb-5'>
        <h5 className="text-xl font-semibold mt-4 mb-2">{title}</h5>
        <p className="text-[#ADB7BE] text-sm">{description}</p>
      </div>
      <br></br>
    </div>
  )
}

export default ProjectCard
