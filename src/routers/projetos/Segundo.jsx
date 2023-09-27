import React from 'react'
import {Link} from  'react-router-dom'
import {motion} from 'framer-motion'

const Segundo = () =>{
    return(
        <motion.div
        initial={{  opacity: 0.1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.1}}
        >
            <Link to="/Projetos/1"> Anterior </Link>
                <nav>Projeto 2</nav> 
            <Link to="/Projetos/3"> Proximo </Link>
        </motion.div>
    )
}

export default Segundo