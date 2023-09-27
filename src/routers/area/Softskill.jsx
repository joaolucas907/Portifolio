import React from 'react'
import {Link} from  'react-router-dom'
import {motion} from 'framer-motion'

const Softskill = () =>{
    return(
        <motion.div
        initial={{  opacity: 0.1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.1}}
        >
        <nav className='text-xl mb-4'>Soft Skill</nav> 
        <Link to="/portifolio/Especialidades/2"> Anterior </Link>
        </motion.div>
    )
}

export default Softskill