import React, { useState } from 'react';

function Accordion() {
  const faqs = [
    {
      id: 1,
      question: "What is React?",
      answer:
        "React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes.",
    },
    {
      id: 2,
      question: "What is a component in React?",
      answer:
        "A component in React is a reusable piece of code that represents a part of the user interface. Components can be functional or class-based and can manage their own state and props.",
    },
    {
      id: 3,
      question: "What is the Virtual DOM?",
      answer:
        "The Virtual DOM is a concept where a virtual representation of the real DOM is kept in memory and synced with the real DOM using a library like ReactDOM. This process is known as reconciliation.",
    },
    {
      id: 4,
      question: "What are props in React?",
      answer:
        "Props (short for properties) are read-only attributes used to pass data from a parent component to a child component. They allow components to be dynamic and reusable.",
    },
    {
      id: 5,
      question: "What is state in React?",
      answer:
        "State is a built-in object that allows components to create and manage their own data. When the state changes, the component re-renders to reflect the updated state.",
    },
  ];

  const [activeId, setActiveId] = useState(null);  

  const toggleFaq = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className='max-w-[720px] bg-[#e1e1e1] mx-auto h-screen'>
      <div className='flex  w-full h-screen flex-col justify-center items-center'>
        <div className='border-2  w-full px-10'>
          {
            faqs.map((eachQuestion) => (
            <div key={eachQuestion.id} className='my-2'>
              <div className='flex items-center justify-between'>
                <h1 className='text-2xl'>{eachQuestion.question}</h1>
                <button
                  className='text-2xl'
                  onClick={() => toggleFaq(eachQuestion.id)}
                >
                  {activeId === eachQuestion.id ? '-' : '+'}
                </button>
              </div>
              {activeId === eachQuestion.id && (
                <div className='mt-2 py-4'>
                  <h1>{eachQuestion.answer}</h1>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
