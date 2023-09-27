import React from 'react'
import {Link} from  'react-router-dom'
import {motion} from 'framer-motion'

const Terceiro = () =>{
    return(
        <motion.div
        initial={{  opacity: 0.1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.1}}
        >
            <Link to="/portifolio/Projetos/2"> Anterior </Link>
                <nav>Projeto 3</nav> 
        </motion.div>
    )
}

export default Terceiro