import React from 'react'
import {Link} from  'react-router-dom'
import {motion} from 'framer-motion'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Primeiro = () =>{
    return(
        <motion.div
        initial={{  opacity: 0.1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.1}}
        >

            <div className='my-0 mx-auto w-3/4'>

                <input type="radio" id='radio-1' name='selecionar-slide' />
                <input type="radio" id='radio-2' name='selecionar-slide' />
                <input type="radio" id='radio-3' name='selecionar-slide' />
                <input type="radio" id='radio-4' name='selecionar-slide' />
                <input type="radio" id='radio-5' name='selecionar-slide' />

            
                <div className='first'><img src="/Portifolio/src/imagens/condominio1.png" alt="" /></div>
                <div><img src="/Portifolio/src/imagens/condominio2.png" alt="" /></div>
                <div><img src="/Portifolio/src/imagens/condominio3.png" alt="" /></div>
                <div><img src="/Portifolio/src/imagens/condominio4.png" alt="" /></div>
                <div><img src="/Portifolio/src/imagens/condominio5.png" alt="" /></div>

            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div>
                <label htmlFor="radio-1"></label>
                <label htmlFor="radio-2"></label>
                <label htmlFor="radio-3"></label>
                <label htmlFor="radio-4"></label>
                <label htmlFor="radio-5"></label>
            </div>


            </div>

            <nav className='text-xl mb-4'>Projeto 1</nav> 
            <Link to="/Portifolio/Projetos/2"> <AiOutlineArrowRight/>  </Link>
        </motion.div>
    )
}

export default Primeiro