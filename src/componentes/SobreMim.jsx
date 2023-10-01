import React from 'react'

const SobreMim = () =>{
    return(
    <div className='m-6 p-3 rounded-md shadow-md shadow-gray-300 bg-gray-200 
    lg:w-1/2'>
      <div className='sm:flex lg:block w-full'>
        <div className='sm:w-3/4 lg:w-full'>
          <div className='text-2xl mb-3'>Sobre mim</div>
          <div className='text-center text-sm sm:text-left sm:text-base lg:text-center'>
          Olá, meu nome é João Lucas, sou formado em ciências da computação e sou programador 
          full stack com conhecimentos em infraestrutura. Dês de pequeno sempre fui entusiasmado 
          pela área de tecnologia e hoje em dia sou apaixonado por ela, sempre buscando por mais conhecimento.
          As linguagens que eu mais domínio são <b>PHP</b> e <b>JavaScript</b>, tenho 
          domínio também em tecnologias como <b>Banco de dados relacional e não relacional</b>.
          Além disso tenho experiencias com <b>Linux CentOs e Debian</b> e com <b>Vituais machines</b>
          </div>
        </div>
        <div className='m-auto mt-6 w-28  h-28
              sm:my-auto sm:mr-4 sm:w-32 sm:h-32
              lg:relative lg:mx-auto lg:mt-6 lg:w-36 lg:h-36'>
          <img src="/Portifolio/src/imagens/fotoperfil.png" className='rounded-full' />
        </div>
      </div>

    </div>
    )
}

export default SobreMim