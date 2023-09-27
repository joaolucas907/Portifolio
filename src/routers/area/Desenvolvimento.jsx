import React from 'react'
import {Link} from  'react-router-dom'
import {motion} from 'framer-motion'

const Desenvovimento = () =>{
    return(
        <motion.div
        initial={{  opacity: 0.1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.1}}
        >
            <nav className='text-xl mb-4'>Desenvovimento</nav> 
            <Link to="/Especialidades/2"> Proximo </Link>
        </motion.div>
    )
}

export default Desenvovimento