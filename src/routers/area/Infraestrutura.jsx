import { useState } from 'react'
import {Link} from  'react-router-dom'
import {motion} from 'framer-motion'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { SiVmware, SiGrafana, SiLinux, SiDocker } from 'react-icons/si'

const Infraestrutura = () =>{
const vmware = "VMware é uma empresa de software especializada em virtualização e computação em nuvem local, sei ligar, desligar as maquinas virtuais e criar nova maquina, controlar e inserir ISO na DataBase do servidor"
const linux = "Linux é um sistema operacional de codigo fonte aberto com diferentes destribuições, sei utilizar comandos de shell e configurar certas coisas sem interface de usuario de destribuições baseada em Debian e Centos"
const docker = "Docker é uma plataforma open source que tem a função de criar ambientes isolado com facil manipulação, sei utilizar imagens, criar containers e controlar volumes"
const zabbix = "Zabbix é uma ferramenta de monitoramento de redes, servidores e serviços, meu conhecimento no zabbix é mais baseado no monitoramento e analisar os alertas para entender e resolvelos"
const grafana = "Grafana é uma API que pega dados de plataformas de monitoramento e com essas informações adquiridas transformar a informações de forma grafica para ficar melhor a vizualização dos dados"

    const [tecinfra, setTecinfra] = useState("Clique em algum dos cards para saber mais")

    return(
        <motion.div
        initial={{  opacity: 0.1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.1}}
        >
        <nav className='text-xl mb-4'>Infraestrutura</nav> 
        <div className='flex gap-4 my-5 flex-wrap w-full justify-center'>
            <div className='bg-white shadow rounded-md cursor-pointer border-sky-500 hover:border-2 h-16 sm:h-14'
             onClick={(e)=>setTecinfra(vmware)}>
                    <SiVmware className='m-2' color='black' size={42}/></div>
            <div className='bg-white shadow rounded-md cursor-pointer border-sky-500 hover:border-2 h-16 sm:h-14'
             onClick={(e)=>setTecinfra(linux)}>
                    <SiLinux className='m-2' color='black' size={42}/></div>
            <div className='bg-white shadow rounded-md cursor-pointer border-sky-500 hover:border-2 h-16 sm:h-14'
             onClick={(e)=>setTecinfra(docker)}>
                    <SiDocker className='m-2' color='blue' size={42}/></div>
            <div className='bg-white shadow rounded-md cursor-pointer border-sky-500 hover:border-2 h-16 sm:h-14'
             onClick={(e)=>setTecinfra(zabbix)}>
                    <img src='/src/imagens/zabbix.png' className='m-1 w-12 ' color='blue' size={42}/></div>
            <div className='bg-white shadow rounded-md cursor-pointer border-sky-500 hover:border-2 h-16 sm:h-14'
             onClick={(e)=>setTecinfra(grafana)}>
                    <SiGrafana className='m-2' color='orange' size={42}/></div>
        </div>
            <nav className='text-xl mb-4'>Mais sobre</nav>
            <div className='bg-white w-full shadow p-5 mb-5'>{tecinfra}</div> 
        <div className='flex justify-center relative top-full'>
            <Link to="/Portifolio/Conhecimentos/2"> 
            <AiOutlineArrowLeft className='w-8 h-8 ml-4 p-2 rounded-full bg-green-600 flex 
                justify-center items-center hover:h-10 hover:w-10 hover:text-xltrasition ease-in-out 
                duration-300 cursor-pointer' color='white' size={20}/>  </Link>
            <Link to="/Portifolio/Conhecimentos/4"> 
            <AiOutlineArrowRight className='w-8 h-8 ml-4 p-2 rounded-full bg-green-600 flex 
                justify-center items-center hover:h-10 hover:w-10 hover:text-xltrasition ease-in-out 
                duration-300 cursor-pointer' color='white' size={20}/>  </Link>
        </div>
        </motion.div>
    )
}

export default Infraestrutura