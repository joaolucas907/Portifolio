import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'
import './css/animacao.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Home from "./routers/Home.jsx"
import Especialidades from "./routers/Especialidades.jsx"
import ErrorPage from "./ErrorPage.jsx"
import Primeiro from './routers/projetos/Primeiro.jsx'
import Segundo from './routers/projetos/Segundo.jsx'
import Terceiro from './routers/projetos/Terceiro.jsx'
import Projetos from './routers/Projetos.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/especialidades/:id",
        element: <Especialidades />,
     
      },
      {
        path: "/projetos/:id",
        element: <Projetos />,
     
      }
    ]

  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
