import React from 'react'

const ProjectCard=({title, description, image, tech, code, demo}) => {
  return (
    <div className='bg-dark-300 rounded-2xl  hover:-translate-y-2 transition duration-300 cursor-pointer'>
      <img src={image} alt={title} className='w-full h-60 object-cover' />
        <div className='p-6'>
            <h3 className='text-xl font-semibold mb-2'>{title}</h3>
            <p className='text-gray-400 mb-4'>{description}</p>
            <div className='flex flex-wrap gap-2 mb-4'>
                {tech && tech.map((item,index)=>(
                    <span key={index} className='px-3 py-1 bg-dark-400 rounded-full text-sm'>{item}</span>
                ))}
            </div>
            <div className='flex gap-2'>
                {code && code !== '#' && (
                  <a href={code} target="_blank" rel="noopener noreferrer" className='flex-1 text-center px-4 py-2 border border-purple font-medium rounded-lg hover:bg-purple/20 transition duration-300' aria-label={`View code for ${title}`}>
                    Code
                  </a>
                )}

                {demo && demo !== '#' && (
                  <a href={demo} target="_blank" rel="noopener noreferrer" className='flex-1 text-center px-4 py-2 border border-gray-600 font-medium rounded-lg hover:bg-gray-700/20 transition duration-300' aria-label={`View demo for ${title}`}>
                    Demo
                  </a>
                )}

                {/* If neither code nor demo provided, show a disabled placeholder */}
                {!code && !demo && (
                  <span className='flex-1 text-center px-4 py-2 text-sm text-gray-500 border rounded-lg'>No links</span>
                )}

            </div>
        </div >
            
    </div>
  )
}

export default ProjectCard
