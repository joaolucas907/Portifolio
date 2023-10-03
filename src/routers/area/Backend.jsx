import { useState } from 'react'
import {Link} from  'react-router-dom'
import {motion} from 'framer-motion'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { BiLogoPhp, BiLogoPostgresql } from 'react-icons/bi'
import { FaNodeJs } from 'react-icons/fa'
import { SiMariadb } from 'react-icons/si'

const Backend = () =>{

const php ="PHP é uma linguagem de script que se localiza imbutida no codigo HTML, utilizo nele PDO, fazer requisições para o banco de dados atravez das variaveis definidas atraves de POSts e GETs"
const nodejs = "NodeJs atualmente estudando"
const mariadb = "MariaDB é um banco de dados relacional, sendo um fork do MySQL tendo sua mesmas funções, sendo uma DataBase mais voltado para peformace e pouca escalabilidade, sei realizar os comandos basicos como criação de DataBase, SELECT, INSERT, DELETE, UPDATE e atualização de privilegios de usuario"
const postgresql = "PostgreSQL utiliza o padrão de comandos SQL, mas ele tem um diferencial que é sua complexidade, enquanto MySQL é algo mais rapido e compacto, o PostgreSQL é um sistema para maior quantidade de carga e alterações de dados"

    const [tecback, setTecback] = useState("Clique em algum dos cards para saber mais");
    
    return(
        <motion.div
        initial={{  opacity: 0.1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.1}}
        >
            <div><nav className='text-xl'>Back-End</nav></div>
            <div className='flex gap-4 my-5 flex-wrap w-full justify-center'>
            <div className='bg-white shadow rounded-md cursor-pointer border-sky-500 hover:border-2 h-16 sm:h-14'
             onClick={(e)=>setTecback(php)}>
                    <BiLogoPhp className='m-2' color='blue' size={42}/></div>
            <div className='bg-white shadow rounded-md cursor-pointer border-sky-500 hover:border-2 h-16 sm:h-14'
             onClick={(e)=>setTecback(nodejs)}>
                    <FaNodeJs className='m-2' color='green' size={42}/></div>
            <div className='bg-white shadow rounded-md cursor-pointer border-sky-500 hover:border-2 h-16 sm:h-14'
             onClick={(e)=>setTecback(mariadb)}>
                    <SiMariadb className='m-2' color='blue' size={42}/></div>
            <div className='bg-white shadow rounded-md cursor-pointer border-sky-500 hover:border-2 h-16 sm:h-14'
             onClick={(e)=>setTecback(postgresql)}>
                    <BiLogoPostgresql className='m-2' color='blue' size={42}/></div>
            </div>
            <nav className='text-xl mb-4'>Saiba mais</nav> 
            <div className='bg-white w-full shadow p-5 mb-5'>{tecback}</div>
            <div className='flex justify-center relative top-full'>
                <Link to="/Portifolio/Conhecimentos/1"> 
                <AiOutlineArrowLeft className='w-8 h-8 ml-4 p-2 rounded-full bg-green-600 flex 
                justify-center items-center hover:h-10 hover:w-10 hover:text-xltrasition ease-in-out 
                duration-300  cursor-pointer' color='white' size={20}/>  </Link>
                <Link to="/Portifolio/Conhecimentos/3"> 
                <AiOutlineArrowRight className='w-8 h-8 ml-4 p-2 rounded-full bg-green-600 flex 
                justify-center items-center hover:h-10 hover:w-10 hover:text-xltrasition ease-in-out 
                duration-300  cursor-pointer' color='white' size={20}/>  </Link>
            </div>
        </motion.div>
    )
}


export default Backend