import { useCallback, useState,useEffect } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenrator()
  }, [length, numberAllowed, charAllowed, passwordGenrator])
  
  return (
    <>
      <div
        className="flex items-center justify-center overflow-x-hidden
       bg-violet-950  h-screen"
      >
        <div
          className="inside-main-box w-full max-w-2xl shadow-black
        shadow-md mx-auto h-[50vh] bg-white rounded "
        >
          <h1 className="text-4xl my-2 font-bold text-center text-purple-500">
            Passowrd Genrator
          </h1>

          <div className=" w-full my-4 flex justify-center   ">
            <div className="relative">
              <input
              value={password}
                className="px-10 py-1 border-2 rounded-lg border-black h-[45px] text-xl text-purple-500 font-semibold placeholder:text-purple-500"
                placeholder="Password"
                readOnly
                type="text"
              />
              <span className="absolute top-[2px] right-[2px] h-[42px] flex items-center justify-center rounded-md bg-blue-700 px-2 py-1 text-xl font-semibold text-white cursor-pointer">
                Copy
              </span>
            </div>
          </div>

          <div className="flex items-center w-full justify-around">
            <div className="flex items-center gap-2 font-bold text-xl">
              <input
                id="len"
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer "
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label for="len">length {length}</label>
            </div>

            <div className="flex items-center gap-2 font-bold text-xl">
              <input
                id="num"
                type="checkbox"
          defaultChecked={numberAllowed}
                
        
                className="cursor-pointer form-checkbox h-5 w-5 text-purple-500  "
                onChange={(e) => {
                  setNumberAllowed((perv)=> !perv)
                }}
              />
             <label htmlFor="nums">Numbers</label>
            </div>

            <div className="flex items-center gap-2 font-bold text-xl">
              <input
                id="chars"
                type="checkbox"
          defaultChecked={numberAllowed}
                className="cursor-pointer form-checkbox h-5 w-5 text-purple-500 "
                onChange={(e) => {
                  setCharAllowed((perv)=> !perv)
                }}
              />
             <label htmlFor="chars">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
