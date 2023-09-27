import React from 'react'
import {Link} from  'react-router-dom'
import {motion} from 'framer-motion'

const Primeiro = () =>{
    return(
        <motion.div
        initial={{  opacity: 0.1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.1}}
        >
            <nav>Projeto 1</nav> 
            <Link to="/Projetos/2"> Proximo </Link>
        </motion.div>
    )
}

export default Primeiro