import React from 'react'
import {Link} from  'react-router-dom'
import {motion} from 'framer-motion'
import {AiOutlineArrowLeft} from 'react-icons/ai'

const Softskill = () =>{
    return(
        <motion.div
        initial={{  opacity: 0.1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.1}}
        >
        <nav className='text-xl mb-4'>Soft Skill</nav> 
        <div className='flex justify-center relative top-full'>
        <Link to="/Portifolio/Conhecimentos/3"> 
            <AiOutlineArrowLeft className='w-8 h-8 ml-4 p-2 rounded-full bg-green-600 flex 
                justify-center items-center hover:h-10 hover:w-10 hover:text-xltrasition ease-in-out 
                duration-300' color='white' size={20}/>  </Link>
        </div>
        </motion.div>
    )
}

export default Softskill