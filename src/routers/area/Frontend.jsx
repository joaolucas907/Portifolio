import { useState } from 'react'
import {Link} from  'react-router-dom'
import {motion} from 'framer-motion'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io'
import { SiTailwindcss, SiJavascript, SiReact, SiBootstrap} from 'react-icons/si'
import {BiLogoJquery} from 'react-icons/bi'
const Frontend = () =>{

const html5 = "HTML5 é um linguagem de marcação para web, sei fazer tudo de necessario nela e controlar bem as div"
const css3 = "CSS3 é uma das maneiras de estilização web, sei todas formatações basica dela alem de utilizar transições e responsividade"
const tailwind = "Tailwind é um framework que utiliza classes para mais produtividade na produção de codigos evitando o programador ter que criar classes, todo meu conhecimento que tenho em CSS3 se aplica aqui"
const bootstrap = "Booststrap é um framework front-end que fornece estruturas CSS para criação de sites reponsivos, sei ir na internet e pegar algum template que preciso para implementar no meu site"
const javascript = "Javascript é uma linguagem de programação para adicionar interatividade ao site, meu conhecimento em javascript se resume a selecionar elementos e passar parametros para o back-end fazer a magia acontecer"
const react = "React é uma biblioteca criada para construir telas de forma declarativa baseado em JavaScript, aonde utiliza arquivos 'jsx' que é um arquivo que mistura suas declarações HTML com JavaScript, meu conhecimento nela é Routers, Componentes, useStatus entre outras bibliotecas"
const jquery = "Jquery é uma biblioteca JavaScript, sua função é basicamente fazer uma simplificação dos comandos JavaScript, deixando-os mais praticos, sei fazer requisições mais especificas utilizando nomeclaturas baseado no Jquery e realizar requisições Ajax"


    const [tecfront, setTecfront] = useState("Clique em algum dos cards para saber mais");

    return(
        <motion.div
        initial={{  opacity: 0.1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.1}}
        >
            <nav className='text-xl'>Front-End</nav>
            <div className='flex gap-4 my-5 mx-auto flex-wrap w-11/12 justify-center'>
                <div className='bg-white shadow rounded-md cursor-pointer border-sky-500 hover:border-2 h-16 sm:h-14' 
                onClick={(e)=>setTecfront(html5)}>
                    <IoLogoHtml5 className='m-2' color='red' size={42}/></div>
                <div className='bg-white shadow rounded-md cursor-pointer border-sky-500 hover:border-2 h-16 sm:h-14' 
                onClick={(e)=>setTecfront(css3)}>
                    <IoLogoCss3 className='m-2' color='blue' size={42}/></div>
                <div className='bg-white shadow rounded-md cursor-pointer border-sky-500 hover:border-2 h-16 sm:h-14'
                 onClick={(e)=>setTecfront(tailwind)}>
                    <SiTailwindcss className='m-2' color='blue' size={42}/></div>
                <div className='bg-white shadow rounded-md cursor-pointer border-sky-500 hover:border-2 h-16 sm:h-14'
                 onClick={(e)=>setTecfront(bootstrap)}>
                    <SiBootstrap className='m-2' color='purple' size={42}/></div>
                <div className='bg-white shadow rounded-md cursor-pointer border-sky-500 hover:border-2 h-16 sm:h-14'
                 onClick={(e)=>setTecfront(javascript)}>
                    <SiJavascript className='m-2' color='yellow' size={42}/></div>
                <div className='bg-white shadow rounded-md cursor-pointer border-sky-500 hover:border-2 h-16 sm:h-14'
                 onClick={(e)=>setTecfront(react)}>
                    <SiReact className='m-2' color='blue' size={42}/></div>
                <div className='bg-white shadow rounded-md cursor-pointer border-sky-500 hover:border-2 h-16 sm:h-14'
                 onClick={(e)=>setTecfront(jquery)}>
                    <BiLogoJquery className='m-2 opacity-70' color='blue' size={42}/></div>

            </div>
            <nav className='text-xl mb-4'>Mais sobre</nav>
            <div className='bg-white w-full shadow p-5 mb-5'>{tecfront}</div> 
            <div className='flex justify-center relative top-full'>
                <Link to="/Portifolio/Conhecimentos/2"> 
                <AiOutlineArrowRight className='w-8 h-8 ml-4 p-2 rounded-full bg-green-600 flex 
                justify-center items-center hover:h-10 hover:w-10 hover:text-xl trasition ease-in-out 
                duration-300' color='white' size={20}/>  </Link>
            </div>
        </motion.div>
    )
}


export default Frontend