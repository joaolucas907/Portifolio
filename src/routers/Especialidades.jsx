import React from 'react'
import {useParams, useLocation} from 'react-router-dom'
import {AnimatePresence, motion} from 'framer-motion'

import Desenvovimento from './area/Desenvolvimento'
import Infraestrutura from './area/Infraestrutura'
import Softskill from './area/Softskill'

const Especialidades = () =>{

    const location = useLocation()

    const { id } = useParams()
    if(id == 1){
        var especialidades = <Desenvovimento/>
    }else if(id == 2){
        var especialidades = <Infraestrutura/>
   
    }else if(id == 3){
        var especialidades = <Softskill/>

    }

    return(
        <motion.div
        initial={{  opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0}}
        >
            <div>
                <div className='text-3xl mb-3'>Especialidade</div>
                <AnimatePresence mode='wait'> 
                    <div location={location} key={location.pathname}>
                        {especialidades}
                    </div>
                </AnimatePresence>
            </div>
        </motion.div>
    )
}

export default Especialidades