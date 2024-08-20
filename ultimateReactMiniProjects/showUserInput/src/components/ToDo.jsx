import React, { useState, useCallback } from 'react';

const ToDo = () => {
    const [list, setList] = useState([]);
    const [input, setInput] = useState('');

    const handleAdd = useCallback(() => {
        if (input.trim() !== '') {
            setList(prevList => [...prevList, input]);
            setInput('');
        }
    }, [input]);

    const handleRemove = useCallback((index) => {
        setList(prevList => prevList.filter((_, i) => i !== index));
    }, []);

    return (
        <div className='w-full min-h-[100vh] bg-slate-600 grid place-items-center'>
            <div className='bg-slate-800 flex flex-col items-center px-4 py-10 overflow-y-auto w-[50vw] h-[50vh]'>
                <div className='flex mb-4'>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className='rounded-l-md w-[20rem] outline-none shadow-white h-[3rem] text-2xl text-black'
                    />
                    <button
                        onClick={handleAdd}
                        className='bg-gray-500 rounded-r-md border-black border-1 py-3 px-2'
                    >
                        Add
                    </button>
                </div>
                <ul className='w-full'>
                    {list.map((item, index) => (
                        <li key={index} className='bg-gray-700 text-white py-2 px-4 mb-2 rounded-md 
                        flex justify-between items-center'>
                            {item}
                            <button
                                onClick={() => handleRemove(index)}
                                className='bg-red-500 text-white rounded-md px-2 py-1'
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ToDo;
