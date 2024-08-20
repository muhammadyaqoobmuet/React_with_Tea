import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Slider = () => {
  const people = [
    {
      id: 1,
      image: 'https://www.course-api.com/images/people/person-1.jpeg',
      name: 'maria ferguson',
      title: 'office manager',
      quote:
        'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
    },
    {
      id: 2,
      image: 'https://www.course-api.com/images/people/person-4.jpeg',
      name: 'john doe',
      title: 'regular guy',
      quote:
        'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
    },
    {
      id: 3,
      image: 'https://www.course-api.com/images/people/person-3.jpeg',
      name: 'peter smith',
      title: 'product designer',
      quote:
        'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
    },
    {
      id: 4,
      image: 'https://www.course-api.com/images/people/person-2.jpeg',
      name: 'susan andersen',
      title: 'the boss',
      quote:
        'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
    },
  ];
  const [index, setIndex] = useState(0);

  const checkIndex = (index) => {
    if (index > people.length - 1) {
      return 0;
    }

    if (index < 0) {
      return people.length - 1;
    }
    return index;
  };

  const nextPerson = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      return checkIndex(index);
    });
  };

  const prevPerson = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      return checkIndex(index);
    });
  };

  useEffect(() => {
    const slider = setInterval(() => {
      nextPerson();
    }, 5000);
    return () => clearInterval(slider);
  }, []);

  return (
    <main className='w-full bg-[#F1F5F8] h-[90vh]'>
      <h1 className='w-full text-center text-7xl tracking-widest pt-20 mb-10'>Reviews</h1>
      <section className='max-w-[1000px] mx-auto relative h-full'>
        <div className='slider-container'>
          {people.map((person, personIndex) => {        
            const { id, image, name, title, quote } = person;
            
           let position = 'next';

            if (personIndex === index) {
              position = 'active';
            }

            if (personIndex === index - 1 || 
            (index === 0 && personIndex === people.length - 1)) {
              position = 'last';
            }

            return (
              <article className={`slide ${position}`} key={id}>
                <div className='flex justify-center rounded-full'>
                  <img
                    className='rounded-full
                    
                     shadow-blue-500 shadow-md aspect-square object-cover'
                    width='170px'
                    height='170px'
                    src={image}
                    alt={name}
                  />
                </div>
                <div className='text-center'>
                  <p className='mt-2 text-xl tracking-widest text-orange-500 font-semibold'>{name}</p>
                  <p className='text-center my-2 text-xl tracking-widest font-semibold'>{title}</p>
                </div>
                <div className='w-full my-3'>
                  <p className='text-xl text-[#617d98] tracking-wide text-center leading-8 mt-3 font-light'>{quote}</p>
                </div>
              </article>
            );
          })}
        </div>
        <div className='flex justify-between absolute top-1/2 left-0 w-full px-4'>
          <button onClick={prevPerson} className='bg-[#617d98] h-12 px-4 rounded-s-lg'>
            <FaChevronLeft className='text-2xl text-white font-bold' />
          </button>
          <button onClick={nextPerson} className='bg-[#617d98] h-12 px-4 rounded-e-lg'>
            <FaChevronRight className='text-2xl text-white font-bold' />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Slider;
