import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const StartGame = () => {
    const DICES_IMAGE_URL = 'https://s3-alpha-sig.figma.com/img/fce5/e0a7/6d3e531201ecd44ca61f9d27ff82e0ae?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HPvbPncsPGXOB~aUbTBxPspzNG1erP642tyhzAu9~zHqo~fzallkyESFsxy74iJZPMS8tGznVw4K-Qh1y~RupKI4O-qT8tVQ7tOb3sSVTo4G3oo2JxSKS35Q-3TGjgvkwgv7s8ho4CW1Zid5ndJW4pdekuKYUhaqsFSa95HE4ylbxX3iiLSUYLYSshH4joi6xCB5slkUz5kDC9W2CgLEtqmZkUWIawAaXHhR78~1Y7zt1T~~gdOJwcnITAX~sWVDYydqq67eBBv2M4mIpqSxGFLcgnQkX5SvN7s0ITlMYrc39Bg6uM36sQ-he1D6WqHRYG7qgdfo~YpE6lyGe-AY7Q__'
  return (
    <main className="sm:flex max-w-[1100px] mx-auto items-center p-4 sm:p-0">
    <div className="sm:flex-1 sm:w-1/2">
      <img
        className="w-full h-auto max-w-[609px] mx-auto sm:mx-0"
        src={DICES_IMAGE_URL}
        alt="Dice Game"
      />
    </div>
    <div className="flex flex-col items-center sm:items-end sm:flex-1 sm:w-1/2 mt-4 sm:mt-0">
      <h1 className="text-center text-[36px] sm:text-[76px] font-bold">DICE GAME</h1>
      <Link className="self-center sm:self-end mt-4 sm:mt-0" to="gameplay">
        <button className="px-4 py-2 w-full sm:w-[150px] border-black border-[1px] hover:bg-transparent transition-all hover:text-black hover:border-black text-lg rounded-md bg-black text-white">
          Play now
        </button>
      </Link>
    </div>
  </main>
  
  )
}

export default StartGame
