import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'
import './css/animacao.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Home from "./routers/Home.jsx"
import Especialidades from "./routers/Especialidades.jsx"
import ErrorPage from "./ErrorPage.jsx"
import Projetos from './routers/Projetos.jsx'
import Experiencias from "./routers/Experiencias.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/portifolio/",
        element: <Home />
      },
      {
        path: "/portifolio/especialidades/:id",
        element: <Especialidades />,
     
      },
      {
        path: "/portifolio/projetos/:id",
        element: <Projetos />,
     
      },      
      {
        path: "/portifolio/experiencias/:id",
        element: <Experiencias />,
     
      }
    ]

  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
