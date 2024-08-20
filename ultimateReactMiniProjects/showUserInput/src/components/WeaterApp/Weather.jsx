import React, { useState } from 'react';

function Weather() {
  const [city, setCity] = useState('Delhi');
  const [searchCity, setSearchCity] = useState('Delhi'); // State for handling search
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = 'df63fff8e0bfc040e8a6369b5886ea07';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`;

  const fetchWeather = async () => {
    if (!searchCity) return;

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('City not found or API request failed');
      }
      const data = await response.json();
      setInfo(data);
    } catch (error) {
      setError(error.message);
      setInfo(null);
    } finally {
      setLoading(false);
    }
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    setSearchCity(city.trim()); // Update the search city and trigger fetch
    fetchWeather(); // Fetch weather data when button is clicked
    setCity('')
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          className="px-4 py-2 border border-gray-300 rounded-md flex-1"
          placeholder="Enter city name"
        />
        <button
          onClick={handleSearch}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Search
        </button>
      </div>

      {loading && <h1 className='text-center text-xl'>Loading...</h1>}
      {error && <h1 className='text-center text-xl text-red-500'>{error}</h1>}
      {info && !loading && !error && (
        <div className='text-center'>
          <h1 className='text-2xl font-bold'>{info.name}</h1>
          <h2 className='text-xl'>{info.weather[0].description}</h2>
          <p className='text-lg'>Temperature: {info.main.temp}°C</p>
          <p className='text-lg'>Humidity: {info.main.humidity}%</p>
          <p className='text-lg'>Wind Speed: {info.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
