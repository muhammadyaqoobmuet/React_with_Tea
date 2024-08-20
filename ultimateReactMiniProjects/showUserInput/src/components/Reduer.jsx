import React, { useReducer, useState, useEffect } from 'react';

// Reducer function to manage the state
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADDED_ITEM':
      return {
        ...state,
        people: [...state.people, action.payload],
        isModalOpen: true,
        modalContent: 'Item added',
      };
    case 'REMOVED_ITEM':
      return {
        ...state,
        people: state.people.filter((person, index) => index !== action.payload),
        isModalOpen: true,
        modalContent: 'Item removed',
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        isModalOpen: false,
        modalContent: '',
      };
    default:
      return state;
  }
};

function App() {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, { people: [], isModalOpen: false, modalContent: '' });

  const handleClicker = (e) => {
    e.preventDefault();
    if (name) {
      dispatch({ type: 'ADDED_ITEM', payload: name });
      setName('');
    }
  };

  useEffect(() => {
    if (state.isModalOpen) {
      const timer = setTimeout(() => {
        dispatch({ type: 'CLOSE_MODAL' });
      }, 1000);
      return () => clearTimeout(timer); // Cleanup the timer if the component unmounts or the effect re-runs
    }
  }, [state.isModalOpen]);

  return (
    <div className='h-screen relative w-full from-sky-400 to-sky-900 bg-gradient-to-b'>
      <div className='w-[50vw] p-4 min-h-[50vh] from-blue-400 border-white border to-white/70 bg-gradient-to-t rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <form onSubmit={handleClicker}>
          <div className='relative w-[50%] py-2'>
            <input
              type='text'
              className='border-black rounded py-2 border w-full'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              className='px-2 absolute right-0 bottom-[0.55rem] py-2 bg-slate-900 text-white rounded font-bold'
              type='submit'
            >
              Submit
            </button>
          </div>
        </form>

        <div className='w-full py-2'>
          {state.people.map((person, index) => (
            <div
              key={index}
              className='from-sky-200 rounded-md shadow-inner shadow-black/60 to-sky-400 bg-gradient-to-br py-4 flex items-center justify-between px-2 my-2'
            >
              <h1 className='text-2xl font-semibold'>{person}</h1>
              <button
                className='bg-white text-black rounded-md px-4 py-2 hover:bg-gray-500 hover:text-white transition'
                onClick={() => dispatch({ type: 'REMOVED_ITEM', payload: index })}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      {state.isModalOpen && (
        <div className='fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-4 rounded flex gap-10'>
            <p className='text-center'>{state.modalContent}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
