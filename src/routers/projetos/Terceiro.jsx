import React from 'react'
import {Link} from  'react-router-dom'
import {motion} from 'framer-motion'
import {AiOutlineArrowLeft} from 'react-icons/ai'

const Terceiro = () =>{
    return(
        <motion.div
        initial={{  opacity: 0.1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.1}}
        >
            
            <nav className='text-xl mb-4'>Projeto 3</nav> 
            <Link to="/Portifolio/Projetos/2">  <AiOutlineArrowLeft/> </Link>
        </motion.div>
    )
}

export default Terceiro