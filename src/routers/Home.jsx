import React from 'react'
import {motion} from 'framer-motion'
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Home = () =>{
    "Venha me conhecer", "Clique em algo no menu para navegar", "Espero que goste"

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
                        1500,
                        'Espero que goste',
                        1000,
                    ]}
                    wrapper="span"
                    speed={20}
                    repeat={0}
                    />
                
            </div>
        </motion.div>

    )

}

export default Home