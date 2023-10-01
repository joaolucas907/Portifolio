import React from 'react'
import {useParams, useLocation} from 'react-router-dom'
import {AnimatePresence, motion} from 'framer-motion'

import Frontend from './area/Frontend'
import Infraestrutura from './area/Infraestrutura'
import Softskill from './area/Softskill'
import Backend from './area/Backend'

const Conhecimentos = () =>{

    const location = useLocation()

    const { id } = useParams()
    if(id == 1){
        var especialidades = <Frontend/>
    }else if(id == 2){
        var especialidades = <Backend/>
    }else if(id == 3){
        var especialidades = <Infraestrutura/>
   
    }else if(id == 4){
        var especialidades = <Softskill/>

    }

    return(
        <motion.div
        initial={{  opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0}}
        >
            <div>
                <div className='text-3xl mb-3'>Conhecimentos</div>
                <AnimatePresence mode='wait'> 
                    <div location={location} key={location.pathname}>
                        {especialidades}
                    </div>
                </AnimatePresence>
            </div>
        </motion.div>
    )
}

export default Conhecimentos