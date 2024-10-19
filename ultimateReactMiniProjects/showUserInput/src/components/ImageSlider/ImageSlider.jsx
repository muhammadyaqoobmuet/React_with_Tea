import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaDotCircle } from 'react-icons/fa';

function ImageSlider({ url, limit = 5 }) {
    const [imageData, setImageData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState(0);

    const handleLeft = () => {
        setIndex((prevIndex) => prevIndex === 0 ? imageData.length - 1 : prevIndex - 1);
    };

    const handleRight = () => {
        setIndex((prevIndex) => prevIndex === imageData.length - 1 ? 0 : prevIndex + 1);
    };

    async function getData(getUrl) {
        setLoading(true);
        try {
            const response = await fetch(getUrl);
            const data = await response.json();
            if (data) {
                setImageData(data);
                setLoading(false);
            }
        } catch (error) {
            setError(error.message);
        }
    }

    useEffect(() => {
        getData(`${url}limit=${limit}`);
    }, [url, limit]);

    if (loading) {
        return <h1 className='text-7xl text-center mt-20'>Loading</h1>;
    }

    return (
        <div className='w-full flex justify-center items-center h-screen'>
            <div className='relative w-[500px] h-[500px] overflow-hidden'>
                <button
                    onClick={handleLeft}
                    className='absolute left-0 text-white top-1/2 text-2xl py-2 px-4 -translate-y-1/2'>
                    <FaArrowAltCircleLeft />
                </button>
                {
                    imageData && imageData.length ?
                        imageData.map((image, imageIndex) => (
                            <div key={image.id}
                                className={`${index === imageIndex ? 'block' : 'hidden'} 
                            w-full h-full rounded-md shadow-md`}>
                                <img
                                    src={image.download_url}
                                    className='w-full h-full object-cover'
                                    alt='Slider image'
                                />
                            </div>
                        ))
                        : null
                }
                <button
                    onClick={handleRight}
                    className='absolute right-0 text-white top-1/2 text-2xl py-2 px-4 -translate-y-1/2'>
                    <FaArrowAltCircleRight />
                </button>

                <div className='absolute bottom-2 left-0 right-0 flex justify-center'>
                    {
                        imageData && imageData.length ?
                            imageData.map((_, idx) => (
                                <button
                                    onClick={() => setIndex(idx)}
                                    className={`mx-1 w-3 h-3 rounded-full ${index === idx ? 'bg-red-600' : 'bg-black'}`}
                                    key={idx}
                                >
                                    <FaDotCircle />
                                </button>
                            ))
                            : null
                    }
                </div>
            </div>
        </div>
    );
}

export default ImageSlider;
