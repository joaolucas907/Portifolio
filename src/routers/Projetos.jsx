import React from 'react'
import {useParams, useLocation} from 'react-router-dom'
import {AnimatePresence, motion} from 'framer-motion'

import Primeiro from './projetos/Primeiro'
import Terceiro from './projetos/Terceiro'
import Segundo from './projetos/Segundo'

const Projetos = () =>{

    const location = useLocation()

    const { id } = useParams()
    if(id == 1){
        var projeto = <Primeiro/>
    }else if(id == 2){
        var projeto = <Segundo/>
   
    }else if(id == 3){
        var projeto = <Terceiro/>

    }

    return(
        <motion.div
        initial={{  opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.2}}
        >
        <div>
            <div className='text-2xl mb-3'>Projetos</div>
            <AnimatePresence mode='wait'> 
                <div location={location} key={location.pathname}>
                    {projeto}
                </div>
            </AnimatePresence>
        </div>
        </motion.div>
    )
}

export default Projetos