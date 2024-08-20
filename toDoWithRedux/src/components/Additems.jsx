import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToto } from '../features/todoSlice';

function Additems() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addIt = () => {
        if(input){

            dispatch(addToto(input));
            setInput('');  // Clear input field after adding
        }
    };

    return (
        <div className='w-full h-[40vh] flex justify-center items-end'>
            <div className='flex bg-gray-400 rounded border border-black'>
                <input 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    type='text' 
                    className='block bg-blue-950/50 rounded w-[32rem] h-[4rem] mx-auto' 
                />
                <button 
                    className='block px-4 bg-[royalblue] text-white font-semibold rounded-r-md' 
                    onClick={addIt}
                >
                    ADD
                </button>
            </div>
        </div>
    );
}

export default Additems;
