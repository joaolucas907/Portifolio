import {Link} from "react-router-dom"
import { IoLogoWhatsapp } from 'react-icons/io';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';


const Navegacao = () =>{
    return(

        
        <div className='mb-6 p-4 rounded-md shadow-md shadow-gray-300 bg-gray-200 max-h-16 flex'> 

       
            <input type="checkbox" id="checkbox"/>
            <div className="junta"> 
                <label htmlFor="checkbox" className="menu flex sm:hidden"><div></div></label>
                <div className='sidebar rounded-md sm:hidden'>
                    <div>
                        <div >
                        <label onClick={fechar}><Link to="/Portifolio/">Home</Link></label>
                        </div>
                        <div className="mt-3 py-1">
                        <label onClick={fechar}><Link to="/Portifolio/Conhecimentos/1">Conhecimentos</Link></label>
                        </div>
                        <div className="mt-3 py-1">
                        <label onClick={fechar}><Link to="/Portifolio/Projetos/1">Projetos</Link></label>
                        </div>
                        <div className="mt-3 py-1">
                        <label onClick={fechar}><Link to="/Portifolio/Experiencias/1">Experiencias</Link></label>
                        </div>
                    </div>
                </div>
        </div>
            <nav className="my-auto relative hidden sm:flex gap-x-8 ">
                    <div className="relative after:w-0 after:h-0.5 after:absolute after:bottom-0 
                    after:left-0 after:bg-black after:transition-all after:duration-200 after:ease-in-out 
                    hover:after:w-full">
                        <Link to="/Portifolio/">Home</Link>
                    </div >
                    <div className="relative after:w-0 after:h-0.5 after:absolute after:bottom-0 
                    after:left-0 after:bg-black after:transition-all after:duration-200 after:ease-in-out 
                    hover:after:w-full">
                        <Link to="/Portifolio/Conhecimentos/1">Conhecimentos</Link>
                    </div>
                    <div className="relative after:w-0 after:h-0.5 after:absolute after:bottom-0 
                    after:left-0 after:bg-black after:transitio-all after:duration-200 after:ease-in-out 
                    hover:after:w-full ">
                        <Link to="/Portifolio/Projetos/1">Projetos</Link>
                    </div>
                    <div className="relative after:w-0 after:h-0.5 after:absolute after:bottom-0 
                    after:left-0 after:bg-black after:transition-all after:duration-200 after:ease-in-out 
                    hover:after:w-full">
                        <Link to="/Portifolio/Experiencias/1">Experiencias</Link>
                    </div>
            </nav>
            <div className="flex ml-auto ">
                <a href="https://www.linkedin.com/in/joao-lucas-b54bab163" target="_blank" className="mx-3 p-1">
                    <BsLinkedin  className=" hover:color-white hover:w-10 hover:h-10 m-auto mb-3 hover:p-1
                trasition ease-in-out duration-300 hover:bg-blue-500 rounded-md" size={25}/></a>
                <a href="https://github.com/joaolucas907?tab=repositories" target="_blank" className="mx-3 p-1 ">
                    <BsGithub className=" hover:w-10 hover:h-10 m-auto mb-3 hover:p-1
                trasition ease-in-out duration-300 hover:bg-orange-500 rounded-md" size={25}/></a>
                <a href="https://wa.me/5581996730611" target="_blank" className="mx-3 p-1" >
                    <IoLogoWhatsapp className=" hover:w-10 hover:h-10 m-auto mb-3 hover:p-1
                trasition ease-in-out duration-300 hover:bg-green-500 rounded-md" size={25}/></a>
            </div>
        </div>
    )

   function fechar(){
    document.getElementById("checkbox").click();
   }
}

export default Navegacao