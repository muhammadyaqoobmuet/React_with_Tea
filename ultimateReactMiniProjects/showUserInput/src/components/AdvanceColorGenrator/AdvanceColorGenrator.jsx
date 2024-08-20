import React, { useEffect, useState } from 'react';
import Values from 'values.js';
import SingleColor from './SingleColor';

export const AdvanceColorGenrator = () => {
    const [error, setError] = useState(false);
    const [color, setColor] = useState('#f01525');
    const [list, setList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if (color.trim() === '') {
                setError(true);
                setList([]);
                return;
            }
            let colors = new Values(color).all(10); 
            setList(colors);
            setError(false);
        } catch (error) {
            setError(true);
            setList([]);
            console.error(error);
        }
    }

    const handleChange = (e) => {
        setColor(e.target.value);
    }

    console.log(color);
    useEffect(()=>{
        
    },[])
    return (
        <main className='w-full'>
            <div className='flex py-8 px-2 items-center flex-wrap
             sm:flex-auto justify-center  '>
                <h1 className='text-3xl tracking-widest
                 sm:tracking-normal sm:text-5xl font-bold'>
                    C <span className='text-[orange]'>O</span>
                    <span className='text-[royalblue]'>L</span>
                    <span className='text-[red]'>O</span>
                    <span className='text-[green]'>R</span>
                    GENERATOR
                </h1>
                <form onSubmit={handleSubmit} className='ml-10 pt-5 sm:pt-1
                 sm:mt-0 flex items-center '>
                    <input 
                        placeholder='#f15025' 
                        type='text' 
                        value={color} 
                        onChange={handleChange}
                        className={`${error ? 'border-[red]' : 'border-[black]'} outline-none px-2 text-md w-[250px] py-2 border rounded-s-md`}
                    />
                    <button className='py-2 px-4 bg-[#304ea7] text-white text-xl font-semibold rounded-e-md'>
                        Submit
                    </button>
                </form>
            </div>
            <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4 p-4'>
                {
                    list.map((color, index) => {
                        return <SingleColor {...color} key={index} index={index} />;
                    })
                }
            </section>
        </main>
    )
}
