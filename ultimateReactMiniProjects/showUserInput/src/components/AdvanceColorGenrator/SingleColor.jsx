import React, { useState } from 'react';

const SingleColor = ({ rgb, weight, index }) => {
    const [alert, setAlert] = useState(false);

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    const bcg = `rgb(${rgb.join(',')})`;
    const hex = rgbToHex(...rgb);

    const handleCopy = () => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
        setTimeout(() => setAlert(false), 2000);
    }

    return (
        <div 
            style={{ backgroundColor: bcg }} 
            className={ ` ${index>10 && 'text-white'}  text-black w-[270px]  h-[190px] p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer`}
            onClick={handleCopy}
        >
            <p className={` text-lg`}>{weight}%</p>
            <p className=' text-md'>{hex}</p>
            {alert && <p className=' text-md '>Copied to clipboard!</p>}
        </div>
    );
}

export default SingleColor;
