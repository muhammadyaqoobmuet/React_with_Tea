import React from 'react';
import '../../../src/index.css';
import { FaTrash, FaEdit } from 'react-icons/fa';

function List({ items ,removeID,Edititem }) {
  return (
    <div className='grocery-list'>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <div key={id} className='grocery-item'>
            <p className='title'>{title}</p>
            <div className='btn-container flex text-xl gap-2'>
              <FaEdit onClick={()=> Edititem(id)}  className='icon edit-btn ' />
              <FaTrash onClick={()=> removeID(id)} className='icon delete-btn ' />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default List;
