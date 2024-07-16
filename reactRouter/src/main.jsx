import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route } from 'react-router-dom'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/Home/Home'
import About from './components/About/About'
import Layout from './Layout'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github from './components/Github/Github'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children: [
      {
        path:"",
        element:<Home/>,
      },
      {
        path:"about",
        element:<About/>,
      },
      {
        path:"contact-us",
        element:<Contact/>  
      },
        {
          path:"user/:userid",
          element:<User/>  
        },
        
       {
            path:"github",
            element:<Github/>  
          }
        
      
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
   
  <>
    <RouterProvider  router={router}/>
  </>
  
)
