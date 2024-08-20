import React from "react";
import { useSelector } from "react-redux";
function Nav() {

  // const {amout} ;
const amount = useSelector((store)=>store.cart.amount);  // we will get cart object
  return (
    <header className="w-full bg-[royalblue]  text-white">
      <nav className="max-w-[1080px] mx-auto py-4 px-4  flex items-center justify-between">
        <h1 className="text-2xl  font-bold">Ma<span className="text-[#F87171]">Von</span>Mart</h1>

        <div>
          <ul className="flex items-center gap-4 font-semibold">
            <div className="relative  cursor-pointer  ">
            <i className='text-4xl sm:text-2xl  bx bx-cart'></i>
            <p className="absolute bg-red-400 rounded-lg  w-[20px]
             h-[22px] -top-2 text-center  -right-2">{amount}</p>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
