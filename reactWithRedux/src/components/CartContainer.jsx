import React from "react";
import { useSelector,useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { openModal } from "../features/modal/modalSlice";


function CartContainer() {
    const dispatch = useDispatch();
    const { cartItems, amount, total } = useSelector((store) => store.cart);

  return amount < 1 ? (
    <div>
      <h1 className="tex-center mt-8 text-3xl text-center font-bold tracking-widest">
        Your Bag.
      </h1>
      <h2 className="mt-32 text-2xl font-semibold text-center tracking-tight">
        is currently empty.
      </h2>
    </div>
  ) : (
    <section className="max-w-[600px]  sm:max-w-[1080px] mx-auto px-6
     sm:px-2 ">
        <h1 className="text-3xl font-thin text-center mt-2">Your Bag</h1>
        <hr className="bg-black/ h-[2px] w-full my-2" />
        <div className="my-3">
            {
                cartItems.map((item)=>{
                    return <CartItem key={item.id} {...item} />
                })
            }
        </div>
        <footer className="mt-10 text-2xl   ">
            <hr className="bg-black/ h-[2px] w-full" />
            <div className="flex justify-between px-2 items-center">
                <h3>Total</h3>
            <h4 className="text-center "> ${total}</h4>
            </div>
            <div className="max-w-[20%] mx-auto">
            <button onClick={()=>dispatch(openModal())} className=" rounded-md px-6 py-2 bg-[royalblue] text-xl font-semibold text-white"  >Clear All</button>
            </div>
        </footer>
    </section>
  );
}

export default CartContainer;
