import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// so app is a funtion can we create own and call a funtion

function Clicker(){
  return(
    <button>
      Click me
    </button>
  ) 
} // this at the end of day converts into plain js with help of bundler

// so if we write 

// const ReactElement ={
//   type: 'a',
//   props:{  // properties or attribues
//    href:"https://www.sneakyhub.com",
//    target:"_blank"   
//   },
//   // html or text 
//   children:"click me to visible sneakyWebsite"
// }
/**
  Above Code wont work becuase it was written by us for our created render funciton
  now this is seprate render function that reactt is made on 
  so we have to 
 */

  const anotherEelment = (
    <a href="https//www.google.com">Clickme</a>
  )

  const reactElemetwithReact = React.createElement(
    'a' // type of element 
    ,{href:"https//mia.com",target:"_blank",}
    ,'click me to visit this is created element '
  )
ReactDOM.createRoot(document.getElementById('root')).render(
  

    // Clicker() as this is function so we can also ran like this
    // but this is not good approch
  //  anotherEelment this will work 

  reactElemetwithReact
  


)
