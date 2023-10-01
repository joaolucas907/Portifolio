import React from 'react'
import {Link} from  'react-router-dom'
import {motion} from 'framer-motion'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const Segundo = () =>{
    return(
        <motion.div
        initial={{  opacity: 0.1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.1}}
        >
                <nav className='text-xl mb-4'>Projeto 2</nav> 
                <Link to="/Portifolio/Projetos/1"> <AiOutlineArrowLeft/> </Link>
                <Link to="/Portifolio/Projetos/3"> <AiOutlineArrowRight/> </Link>
        </motion.div>
    )
}

export default Segundo