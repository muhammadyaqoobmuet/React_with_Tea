import React, { useEffect, useState } from "react";

function Time() {
  const [time, setTime] = useState(60);

  useEffect(() => {
    // Set interval for decrementing the time every second
    const timer = setInterval(() => {
      setTime(prevTime => prevTime > 0 ? prevTime - 1 : 0); // Ensure time doesn't go below 0
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, [time]); // Empty dependency array ensures this runs only once

  return <h1> {time == 0 ?   'time is over': ` time left ${time}` }</h1>;
}

export default Time;
