import React from 'react'
import Tabs from './Tabs'

function MainTab() {
  const tabs = [
    {
        label:"hackers Era",
        content: <div>hackers are always everywhere if you want to be safe dont mess with them</div>
    },
    {
        label:"Gangsters Era",
        content: <div>Gangsters are always everywhere if you want to be safe dont mess with them</div>
    },
    {
        label:"mafias Era",
        content: <div>mafias are always everywhere if you want to be safe dont mess with them</div>
    },
    {
        label:"Random Question",
        content: <RandomContet />
    },
  ]
   function handleChange (index){
    console.log(index);
   }
    return (
    <Tabs TabsContent={tabs}  onChange={handleChange} />
  )
}

export default MainTab

function RandomContet (){
    return <div>HAQ MOJOOD</div>
}