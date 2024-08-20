import React, { useEffect, useState } from 'react';

function FetchData() {
  const [setupJoke, setSetupJoke] = useState('');
  const [punchLine, setPunchLine] = useState('');
  const [loading, setLoading] = useState(false); // State for loading indicator

  // Function to fetch a new joke
  const fetchJoke = () => {
    setLoading(true); // Set loading to true before fetching
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((resp) => resp.json())
      .then((data) => {
        setSetupJoke(data.setup);
        setPunchLine(data.punchline);
        setLoading(false); // Set loading to false after fetching
      })
      .catch((error) => {
        console.error('Error fetching joke:', error);
        setLoading(false); // Always set loading to false on error
      });
  };

  // useEffect to fetch joke on initial render
  useEffect(() => {
    fetchJoke();
  }, []); // Empty dependency array to run only on initial render

  return (
    <>
      <div className="grid place-content-center w-[100vw] h-screen bg-[#d1d1d1]">
        <div className="w-[50vw] h-80 bg-slate-700 rounded-md shadow-md shadow-black">
          <h1 className="text-white text-center py-4 font-semibold text-3xl">RANDOM JOKES</h1>
          <h1 className="text-2xl font-semibold text-white px-4 py-4">Random Person: {setupJoke}</h1>
          <h1 className="text-2xl font-semibold text-white px-4 py-4">You: {punchLine}</h1>
          <button
            className={`ml-4 px-5 py-3 border rounded-md border-white font-semibold bg-gray-700 hover:bg-slate-600 text-white ${loading ? 'opacity-50 pointer-events-none' : ''}`}
            onClick={fetchJoke} // Call fetchJoke function on button click
            disabled={loading} // Disable button when loading is true
          >
            {loading ? 'Loading...' : 'Change Joke'}
          </button>
        </div>
      </div>
    </>
  );
}

export default FetchData;
