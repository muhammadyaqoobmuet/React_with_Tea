import React, { useEffect, useState } from 'react'


function ScrollIndicator({ url }) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [scrollPrcnt, setScrollPrcnt] = useState(0);
    async function fetchProducts(getUrl) {
        setLoading(true);
        try {
            const response = await fetch(getUrl);
            if (response.ok) {
                const products = await response.json();
                setData(products);
            }
        } catch (error) {
            console.log("error", error);
        } finally {
            setLoading(false);
        }
    }
    const handelScroll = () => {
            const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
            // document.documentElement.scrollHeight -This property returns the total height of the content, including content not visible on the screen due to overflow
           // client height What it is: This property returns the height of the visible part of the document (the viewport height).
        
           const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
           setScrollPrcnt((howMuchScrolled/height)*100);
    }

    useEffect(() => {
        fetchProducts(url);
    }, [url]);
    useEffect(() => {
        window.addEventListener('scroll', handelScroll);
        return () => {
            window.removeEventListener('scroll', () => { });
        }
    }, []);

    if (loading) {
        return <h1 className='text-4xl'>Loading......</h1>;
    }


    return (
        <div className='bg-black min-h-screen mx-auto text-white container'>
            <div className='w-full fixed top-0  h-3 bg-zinc-700 transition-all'>
                    <div  
            className={`absolute ${scrollPrcnt > 80 ? 'bg-[blue]' : 'bg-blue-400'} h-full`}
            style={{ width: `${scrollPrcnt}%` }}
        ></div>

            </div>
        
            
            {
                data.products && data.products.length > 0 ?
                    data.products.map((product) => (
                        <div className='w-1/2 mx-auto text-center py-4' key={product.id}>
                            <h1 className='text-white py-2 text-2xl'>{product.title}</h1>
                        </div>
                    ))
                    : <h2>No Products Found</h2>
            }
        </div>
    );
}

export default ScrollIndicator;
