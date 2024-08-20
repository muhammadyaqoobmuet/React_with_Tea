import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearTodo } from '../features/todoSlice';

const Item = () => {
  const { todo } = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  return (
    <>
      {todo.length > 0 ? (
        todo.map((item) => (
          <div
            key={item.id}
            className='w-[570px] px-4 bg-[royalblue] mx-auto my-4 flex items-center justify-between h-[50px]'
          >
            <p className='text-2xl font-semibold text-white'>{item.text}</p>
            <button
              onClick={() => dispatch(clearTodo(item.id))}
              className='text-white font-xl font-semibold bg-[red] px-2 rounded-md'
            >
              X
            </button>
          </div>
        ))
      ) : (
        <p className='text-center text-2xl'>No items in the todo list.</p>
      )}
    </>
  );
};

export default Item;
