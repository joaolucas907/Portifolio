import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'
import './css/animacao.css'
import './css/slide.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Home from "./routers/Home.jsx"
import Conhecimentos from "./routers/Conhecimentos.jsx"
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
        path: "/Portifolio/",
        element: <Home />
      },
      {
        path: "/Portifolio/Conhecimentos/:id",
        element: <Conhecimentos />,
     
      },
      {
        path: "/Portifolio/Projetos/:id",
        element: <Projetos />,
     
      },      
      {
        path: "/Portifolio/Experiencias/:id",
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
