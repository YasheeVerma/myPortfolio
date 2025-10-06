import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} transition={{duration:0.6,ease:'easeOut'}} viewport={{once:true}} id='home' className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a11a1a]'>
<div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
    {/*left side content */}
    <div className='md:w-1/2 mb-10 md:mb-0'>
    <h1 className='text-4xl md:text-6xl font-bold mb-4 '>
        hi, I'm <span className='text-purple'>Yashee Verma</span>
    </h1>
    <h2 className='text-2xl md:text-4xl font -semibold mb-6 typewriter'>Full Stack Developer</h2>
     <p className='text-lg text-gray-300 mb-8'>
        I create stunning web experiences with modern technologies and innovative design.
     </p>
        <div className='flex space-x-4 '>
          
          <a href="#projects" className='inline-block px-8 py-3 bg-purple rounded-lg font-medium mt-5 hover:bg-purple-700 transition-300 transition duration-300'
            >View Work</a>
           
           <a href="#contact" className=' inline-block px-8 py-3 mt-5 border border-purple rounded-lg font-medium hover:bg-purple/20 transition decoration-purple-300' >Contact Me</a>
          <a
            href="https://drive.google.com/file/d/1hBFVvAESJfKMdOZ9baBd3pU2kiErIF-U/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className=" inline-block px-8 py-3 bg-purple rounded-lg font-medium mt-5 hover:bg-purple-700 transition-300 transition duration-300"
          >
            Download Resume
          </a>    
        </div>
    </div>

</div>
{/* right side image */}
<div className='md:w-1/2 flex justify-center '>
    <div className='relative w-64 h-64 md:w-80 md:h-80'>
        <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink  opacity-70' >
            <motion.img 
            animate={{y:[0,-20,0]}}
            transition={{
                duration:4,repeat:Infinity,repeatType:'loop'
            }}
            className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 animate-float"
            src={assets.profileImg} alt="Profile " />
        </div>
    </div>
</div>
    </motion.div>
      
    
  )
}

export default Hero
