import React from 'react'
import SingleQuestion from './SingleQuestion';

function MainAccordian() {
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
  return (
    <div className='max-w-[700px] h-screen my-2  mx-auto'>

       <div className='flex flex-col justify-center items-center h-screen'>
       {faqs.map((eachItem)=>(
        <SingleQuestion key={eachItem.id} {...eachItem}  />
       ))}
       </div>
    </div>
  )
}

export default MainAccordian
