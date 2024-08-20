import "./index.css";
import React, { useState } from "react";

function App() {
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

  const [selectId, setSelectId] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multi, setMulti] = useState([]);

  const handleClick = (id) => {
    setSelectId(id === selectId ? null : id);
  };

  const handleMiltiSelection = (id) => {
    let cpyMulti = [...multi];
    const findIndexofCurrentId = cpyMulti.indexOf(id)
    if(findIndexofCurrentId === -1){
      cpyMulti.push(id);
    }else{
      cpyMulti.splice(findIndexofCurrentId,1)
    }
    setEnableMultiSelection(cpyMulti)
  };

  return faqs && faqs.length > 0 ? (
    <div className="w-full bg-zinc-800 min-h-[100vh] flex flex-col items-center justify-center">
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className="text-white px-4 py-2 bg-sky-600 my-4 rounded-md"
      >
        Enable Multi Select
      </button>
      <div className="w-[70vw] py-10 min-h-[90vh] gap-2  flex flex-col items-center justify-center">
        {faqs.map((item) => (
          <div
            onClick={
              enableMultiSelection
                ? () => handleMiltiSelection(item.id)
                : () => handleClick(item.id)
            }
            key={item.id}
            className="bg-zinc-700/40 rounded-md
             cursor-pointer shadow-white/40 shadow-inner   w-[80%] mb-2"
          >
            <div className="flex items-center justify-between px-2 py-2">
              <h2 className="text-2xl text-white">{item.question}</h2>
              <button className="text-4xl text-white">
                {selectId === item.id ? "-" : "+"}
              </button>
            </div>
            {selectId === item.id && (
              <div className="px-2 pb-2 ">
                <h4 className="text-white">{item.answer}</h4>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div>
      <h1>No data</h1>
    </div>
  );
}

export default App;
