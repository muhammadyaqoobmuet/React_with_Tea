import React, { useEffect, useState } from 'react';

function Github() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/users/muhammadyaqoobmuet')
            .then(resp => resp.json())
            .then(resp => {
                setData(resp);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []); // Added empty dependency array to ensure it only runs once

    if (!data) {
        return <div>Loading...</div>; // Display loading message while fetching data
    }

    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src=""
                            alt="User Profile"
                            className="rounded-full w-48 h-48 object-cover mx-auto md:mx-0"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-3xl text-gray-900 font-bold md:text-4xl">
                           name
                        </h2>
                        <p className="mt-6 text-gray-600">
                            data
                        </p>
                        <p className="mt-4 text-gray-600">
                            Lover of clean code, user-centered design, and continuous learning. Always eager to take on new challenges and collaborate with like-minded individuals.
                        </p>
                        <div className="mt-6">
                            <button className="px-6 py-2 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition duration-300">
                                Follow
                            </button>
                            <button className="ml-4 px-6 py-2 rounded-full border-2 border-orange-500 text-orange-500 font-bold hover:bg-orange-500 hover:text-white transition duration-300">
                                Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Github;