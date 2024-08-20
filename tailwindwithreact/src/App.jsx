import { useState,useEffect } from 'react'


import Home from './components/Home'
import { ThemeProvider } from './context/contextOfTheme'
import Foot from './components/Foot'
function App() {

  const [themeMode,setThemeMode] = useState("light")

  const lightMode = () => {
    setThemeMode("light")
  }

  const darkMode = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  // const [count, setCount] = useState(0)
  // const m2 ={
  //   detailsOfProduct:"this is mack book m2 ultra chip with AI gen Technology lets get to the boom",
  //   price: "3000$"
  // }
  // const m3 ={
  //   detailsOfProduct:"this is map book m3 ultra chipset with fast and enchaced features",
  //   price: "4500$"
  // }

  


  return (
    <ThemeProvider value={{themeMode, lightMode, darkMode}}>
     

    <Home />
      <Foot />
        {/* 
          so we ca n pass the props to the componenets 
          we can pass normal string or an object or an array enclosed in name = {}
         */}
      {/* <div className='md:flex gap-4  flex-wrap justify-center'> */}
      {/* <Card price={m2.price} modalinfo = {m2}  />
      <Card price={m3.price} modalinfo = {m3}  /> */}
      {/* </div> */}

    </ThemeProvider>
  )
}

export default App
