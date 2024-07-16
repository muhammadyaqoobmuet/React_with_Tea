import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Github() {
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = () => {
        if (!username) return; // Do not fetch if username is empty

        setLoading(true);
        fetch(`https://api.github.com/users/${username}`)
            .then(resp => {
                if (!resp.ok) {
                    throw new Error('User not found');
                }
                return resp.json();
            })
            .then(resp => {
                setData(resp);
                setLoading(false); // Set loading to false after data is fetched
                setError(null); // Reset error state
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false); // Set loading to false on error
                setError(error.message); // Set error message
            });
    };

    const handleForm = (e) => {
        e.preventDefault();
        fetchData();
    };

    return (
        <div className="py-16 bg-white w-full h-screen">
            <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:w-5/12 lg:w-5/12">
                        {loading && <p>Loading...</p>}
                        {error && <p>{error}</p>}
                        {!loading && !error && (
                            <img
                                src={data?.avatar_url || ''}
                                alt="User Profile"
                                className="rounded-full w-48 h-48 object-cover mx-auto md:mx-0"
                            />
                        )}
                    </div>
                    <div className="md:w-7/12 lg:w-6/12">
                        <h2 className="text-3xl text-gray-900 font-bold md:text-4xl">
                            {data?.name || 'User not found'}
                        </h2>
                        <p className="mt-6 text-gray-600">
                            {data?.login}
                        </p>
                        <p className="mt-4 text-gray-600">
                            {data?.bio || 'No bio available'}
                        </p>
                        <div className="mt-6">
                            <button className="px-6 py-2 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition duration-300">
                            {data && 
                                <Link to={data.html_url} className="px-6 py-2 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition duration-300">
                                    Follow
                                </Link>
                            }
                            </button>
                            <button className="ml-4 px-6 py-2 rounded-full border-2 border-orange-500 text-orange-500 font-bold hover:bg-orange-500 hover:text-white transition duration-300">
                                Message
                            </button>
                        </div>
                    </div>
                </div>
                <div className='mt-4 mx-auto w-[40%]'>
                    <div className='w-[90%] '>
                        <label htmlFor="username" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} type="search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter GitHub username" required />
                            <button onClick={fetchData} className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Github;
