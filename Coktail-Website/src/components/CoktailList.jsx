import React from "react";
import { useGlobalContext } from "../pages/context";
import Loading from "./Loading";
import Coktail from "./Coktail";


function CoktailList() {
  const {loading,cocktails} = useGlobalContext();
  console.log(loading);
  console.log(cocktails);

  if(loading){

    return <Loading/>
  }
    if(cocktails.length <1 ){
        return <h1 className="text-center text-4xl font-semibold tracking-widest"> Avalaibe Soon</h1>
    }
  return <div className="w-full h-full">

      <div className="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {
          cocktails.map((item)=>{
            return <Coktail key={item.id} {...item} />
          })
        }
      </div>

  </div>;
}

export default CoktailList;
