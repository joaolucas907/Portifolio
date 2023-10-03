import { useState } from 'react'
import { Outlet } from 'react-router-dom' 
import Navegacao from './componentes/Navegacao'
import SobreMim from './componentes/SobreMim'

function App() {

  return (

  <div className='absolute z-1 w-full'>
    <div>
      <Navegacao />
    </div>
    <div className="lg:flex">
      <div className='m-6 p-4 rounded-md shadow-md shadow-gray-300 bg-gray-200 lg:w-1/2'>
            <div>
                <Outlet />
            </div>
      </div>
      <SobreMim/>
    </div>

  </div>
  
  )
}

export default App
