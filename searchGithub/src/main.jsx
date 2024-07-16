import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import Templete from './Templete'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Github from './components/Github'


const router = createBrowserRouter([
 {
  path:"/",
  element:<Templete/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"about",
      element:<About/>
    },
    {
      path:"contact",
      element:<Contact/>
    },
    {
      path:"github",
      element:<Github/>
    },
  ]
 }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider  router={router}/>
)
