import { useState } from 'react'
import {Link} from  'react-router-dom'
import {motion} from 'framer-motion'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs';

const Primeiro = () =>{

    //const [slide, setSlide] = useState(2);
    var slide = 1

    return(
        <motion.div
        initial={{  opacity: 0.1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.1}}
        >
    <div className='flex'>
        <div className='m-auto' onClick={voltSlide}>
                <AiOutlineArrowLeft className='w-8 h-8 p-2 rounded-full bg-green-600 flex 
                justify-center items-center  cursor-pointer' color='white' size={20}/>
        </div>
            <div className='my-0 mx-auto largSlide'>

                <div className='slides'>
                    <input type="radio" id='radio-1' name='selecionar-slide' defaultChecked onClick={(e)=>attSlide(1)}/>
                    <input type="radio" id='radio-2' name='selecionar-slide' onClick={(e)=>attSlide(2)}/>
                    <input type="radio" id='radio-3' name='selecionar-slide' onClick={(e)=>attSlide(3)}/>
                    <input type="radio" id='radio-4' name='selecionar-slide' onClick={(e)=>attSlide(4)}/>
                    <input type="radio" id='radio-5' name='selecionar-slide' onClick={(e)=>attSlide(5)}/>
                    <input type="radio" id='radio-6' name='selecionar-slide' onClick={(e)=>attSlide(6)}/>

                
                    <div className='slide first'>
                        <img src="/Portifolio/src/imagens/condominio/condominio1.png" alt="" /></div>
                    <div className='slide'>
                        <img src="/Portifolio/src/imagens/condominio/condominio2.png" alt="" /></div>
                    <div className='slide'>
                        <img src="/Portifolio/src/imagens/condominio/condominio3.png" alt="" /></div>
                    <div className='slide'>
                        <img src="/Portifolio/src/imagens/condominio/condominio4.png" alt="" /></div>
                    <div className='slide'>
                        <img src="/Portifolio/src/imagens/condominio/condominio5.png" alt="" /></div>
                    <div className='slide'>
                        <img src="/Portifolio/src/imagens/condominio/condominio6.png" alt="" /></div>
                    
                    <div className='navegation-check'>
                        <div className='btn-check-1'></div>
                        <div className='btn-check-2'></div>
                        <div className='btn-check-3'></div>
                        <div className='btn-check-4'></div>
                        <div className='btn-check-5'></div>
                        <div className='btn-check-6'></div>
                    </div>
                    <div className='navegation'>
                        <label htmlFor="radio-1" className='btn-navegation' ></label>
                        <label htmlFor="radio-2" className='btn-navegation' ></label>
                        <label htmlFor="radio-3" className='btn-navegation' ></label>
                        <label htmlFor="radio-4" className='btn-navegation' ></label>
                        <label htmlFor="radio-5" className='btn-navegation' ></label>
                        <label htmlFor="radio-6" className='btn-navegation' ></label>
                    </div>
                </div>
            </div>
            <div className='m-auto' onClick={proxSlide}>
                    <AiOutlineArrowRight className='w-8 h-8 p-2 rounded-full bg-green-600 flex 
                    justify-center items-center cursor-pointer' color='white' size={20}/> 
                </div>

    </div>   

            <nav className='text-xl mb-4'>Monitoramento Condominio</nav>
            <div className='bg-white w-full shadow p-5 mb-5'>É um sistema para monitoramento de entrada e sair de 
            pessoas, feito em PHP com Jquery e utilizando um template do Bootstrap. Ele conta com niveis de permissão
            para cada tipo de usuario, podendo o administrador criar novos moradores, monitorar todos moradores e visita, 
            e atualizar os status e atributos de todos cadatrados, enquanto os moradores podem apenas criar novas
            visitas associando a o seu nome e atualizar apenas os status das visitas cadatradas no seu nome,
            assim não conseguindo vê visita de outros moradores</div> 
            <div className='flex  relative top-full'>
            <a href="//https://github.com/joaolucas907?tab=repositories" target="_blank" className="mx-3 p-1 ">
                    <BsGithub className=" hover:w-8 hover:h-8 m-auto mb-3 hover:p-1
                trasition ease-in-out duration-300 hover:bg-orange-500 rounded-md" size={25}/></a>
                <div className='ml-auto my-auto'>
                    <Link to="/Portifolio/Projetos/2"> 
                    <AiOutlineArrowRight className='w-8 h-8 ml-4 p-2 rounded-full bg-green-600 flex 
                    justify-center items-center hover:h-10 hover:w-10 hover:text-xl trasition ease-in-out 
                    duration-300 cursor-pointer' color='white' size={20}/>  </Link>
                </div>
            </div>
        </motion.div>
    )
    function attSlide(att){
        slide = att
    }
    function proxSlide(){
        slide++
        if(slide > 6){
            slide = 1;
        }
        document.getElementById("radio-"+slide).checked = true
    }
    function voltSlide(){
        slide--
        if(slide < 1){
            slide = 6
        }
        document.getElementById("radio-"+slide).checked = true
    }

}

export default Primeiro