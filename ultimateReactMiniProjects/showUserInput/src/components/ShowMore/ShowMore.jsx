import React, { useState, useEffect } from 'react';

function ShowMore() {
  const [data, setData] = useState([]); // Start with an empty array
  const [skip, setSkip] = useState(0);
  const [count, setCount] = useState(5);
  const [loading, setLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products?limit=${count}&skip=${skip}`)
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.products.length > 0) {
          setData((prev) => [...prev, ...resp.products]); // Append new products to existing ones
          setSkip((prev) => prev + count); // Increase skip for the next batch
        } else {
          setIsDisable(true); // Disable button if no more products are available
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleClick = () => {
    if (!isDisable) {
      setLoading(true);
      fetch(`https://dummyjson.com/products?limit=${count}&skip=${skip}`)
        .then((resp) => resp.json())
        .then((resp) => {
          if (resp.products.length > 0) {
            setData((prev) => [...prev, ...resp.products]); // Append new products to existing ones
            setSkip((prev) => prev + count); // Increase skip for the next batch
          } else {
            setIsDisable(true); // Disable button if no more products are available
          }
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#d1d1d1] overflow-hidden">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data && data.map((product) => (
            <div key={product.id} className="bg-white shadow-lg hover:scale-105 transition rounded-lg overflow-hidden">
              <img
                src={product.images[0]}
                loading="lazy"
                className="w-full h-48 object-cover"
                alt={product.description}
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
                <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                <button className='px-4 w-full py-1 bg-[royalblue] hover:bg-sky-900 text-white font-medium rounded-md mt-3'>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {data && data.length > 0 && (
        <div className="mt-8">
          <button
            onClick={handleClick}
            disabled={isDisable}
            className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 ${isDisable ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isDisable ? 'No More Products' : 'Show More'}
          </button>
        </div>
      )}
    </div>
  );
}

export default ShowMore;
