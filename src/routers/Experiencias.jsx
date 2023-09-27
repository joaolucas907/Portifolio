import React from 'react'
import {useParams, useLocation} from 'react-router-dom'
import {AnimatePresence, motion} from 'framer-motion'

const Experiencias = () =>{
return(
    <motion.div
    initial={{  opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0.2}}
    >
    <div>
        <div className='text-2xl mb-3'>Experiencias</div>
    </div>
    </motion.div>
)
}

export default Experiencias