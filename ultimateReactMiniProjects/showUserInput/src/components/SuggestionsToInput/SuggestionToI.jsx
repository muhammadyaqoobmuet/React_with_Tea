import React, { useEffect, useState } from 'react';

function SuggestionToI() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [filterData, setFilteredData] = useState([]);
    const [descBar, setDescBar] = useState(false);

    const handleInputValue = (e) => {
        setDescBar(false);
        const query = e.target.value.toLowerCase();
        setInputValue(e.target.value);
        if (query.length >= 1) {
            const filteredData = data.filter(item => item.toLowerCase().indexOf(query) > -1);
            setFilteredData(filteredData);
            setDescBar(true);
        }
    };

    const handleCopy = (text) => {
        setInputValue(text);
        setDescBar(false);
    };

    useEffect(() => {
        setLoading(true);
        fetch('https://dummyjson.com/users')
            .then(resp => resp.json())
            .then(respData => {
                setData(respData.users.map((user) => user.firstName.toLowerCase()));
                setLoading(false);
            })
            .catch(e => console.log(e));
    }, []);

    if (loading) {
        return (
            <div className='flex bg-slate-900 justify-center h-screen w-full p-5 items-center'>
                <div className='bg-gray-800 h-[5vh] rounded-md w-[30vw] flex'>
                    <input 
                        onChange={handleInputValue} 
                        value={inputValue} 
                        className='w-full rounded-s-md outline-0 py-2 px-3 text-gray-300 bg-gray-700' 
                        placeholder='Type to search...' 
                    />
                    <button className='rounded-e-md px-3 text-white bg-green-500 hover:bg-green-600 transition duration-200'>
                        Search
                    </button>
                </div>
                <h1 className='mt-20 text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white'>
                    Loading...
                </h1>
            </div>
        );
    }

    return (
        <div className='flex bg-gray-900 justify-center h-screen w-full p-5 items-center overflow-auto'>
            <div className='relative'>
                <div className='bg-gray-800 h-[5vh] rounded-md w-[30vw] flex'>
                    <input 
                        onChange={handleInputValue} 
                        value={inputValue} 
                        className='w-full rounded-s-md outline-0 py-2 px-3 text-gray-300 bg-gray-700' 
                        placeholder='Type to search...' 
                    />
                    <button className='rounded-e-md px-3 text-white bg-green-500 hover:bg-green-600 transition duration-200'>
                        Search
                    </button>
                </div>
                {descBar && (
                    <div className='absolute overflow-auto bg-gray-800 w-full mt-1 rounded-md shadow-lg'>
                        {filterData.length > 0 ? (
                            filterData.map((item, index) => (
                                <div 
                                    onClick={() => handleCopy(item)} 
                                    key={index} 
                                    className='py-2 px-4 text-gray-300 hover:bg-gray-700 cursor-pointer overflow-auto'
                                >
                                    {item}
                                </div>
                            ))
                        ) : (
                            <div className='py-2 px-4 text-gray-500'>
                                No suggestions found
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default SuggestionToI;
