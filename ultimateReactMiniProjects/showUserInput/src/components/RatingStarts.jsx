import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function RatingStars({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleMouseClick = (index) => {
    setRating(index);
  };

  const handleMouseEnter = (index) => {
    setHover(index);
  };

  const handleOnMouseLeave = () => {
    setHover(0);
  };

  return (
    <div className="bg-[#313131] h-screen flex items-center justify-center">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            onClick={() => handleMouseClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleOnMouseLeave}
            size={50}
            color={index <= (hover || rating) ? "orange" : "grey"}
          />
        );
      })}
      <p className="mx-4 text-5xl text-white font-bold">
        {hover == 0 ? rating : hover}.0
      </p>
    </div>
  );
}

export default RatingStars;
