import React from 'react'
import {motion} from 'framer-motion'
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import react from "/Portifolio/src/imagens/react.svg";

const Home = () =>{

    return(
        <motion.div
        initial={{  opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0}}
        >
            <div>
                <div className='text-3xl mb-3'>Home</div>
                <TypeAnimation className='text-base sm:text-xl'
                    sequence={[
                        'Olá seja bem-vindo ao meu portifolio',
                        1000,
                        'Clique em algo no menu para navegar e me conhecer melhor',
                        800,
                        'Espero que goste',
                        1000,
                    ]}
                    wrapper="span"
                    speed={20}
                    repeat={0}
                    />
                    <div className='hidden sm:block text-center lg:mt-16'>
                    <div>Site feito em react no vite com tailwind</div>
                    <div className='flex justify-center items-center h-4/6'>                       
                        <img src={react} className="logo react sm:h-32" alt="React logo" />             
                    </div>
                    </div>
            </div>
        </motion.div>

    )

    
}

export default Home