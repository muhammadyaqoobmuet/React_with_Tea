import React, { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const TabProject = () => {
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch('https://www.course-api.com/react-tabs-project')
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Ensure loading is set to false even if there's an error
      });
  }, []);

  if (loading) {
    return <h1 className='text-4xl text-black text-center mt-20'>Loading...</h1>;
  }

  if (jobs.length === 0) {
    return <h1 className='text-4xl text-black text-center mt-20'>No jobs available</h1>;
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className='max-w-[1200px] mx-auto'>
      <h1 className='text-center font-semibold  text-5xl tracking-wider mt-20'>Experience</h1>
      <div className='bg-[royalblue] w-16 mt-2 h-1 mx-auto'></div>
      <div className='w-full gap-2 mt-2 flex flex-col sm:flex-row '>
        <div className='w-1/3 flex flex-row gap-5 sm:gap-0 sm:flex-col py-4 mt-12'>
          {jobs.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setValue(index)}
              className={`my-4  tracking-widest font-[400] w-full bg-white py-2 text-2xl hover:text-[#87cff4] hover:border-l-8 hover:border-[#145d82] transition-all ${
                index === value
                  ? 'border-[#145d82] border-l-8 text-[#87cff4]'
                  : 'hover:border-[#145d82] hover:border-l-8 hover:text-[#87cff4]'
              }`}
            >
              {item.company}
            </button>
          ))}
        </div>
        <div className='w-full flex flex-col px-4 py-4 '>
          <h1 className='text-4xl font-[400] tracking-widest mt-10 my-2'>{title}</h1>
          <h2 className='bg-[#DAE2EC] my-3 text-[#1d2c3a] px-4 mt-2 rounded-sm text-2xl font-semibold tracking-widest self-start'>{company}</h2>
          <h2 className='text-2xl tracking-widest self-start'>{dates}</h2>
          {duties.map((duty, index) => (
            <div key={index} className='w-full flex gap-5 items-center'>
              <FaAngleDoubleRight className='text-5xl text-[#2CAEBA]' />
              <p className='text-[23px] text-[#324d67] leading-7 my-4'>{duty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TabProject;
