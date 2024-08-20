import React, { useState, useEffect } from 'react';
import List from './List';
import '../../../src/index.css';
import Alert from './Alert';

function Grocery() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditAble, setIsEditAble] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    type: '',
    msg: ''
  });

  const showAlert = (type, msg) => {
    setAlert({ type, msg, show: true });
    setTimeout(() => {
      setAlert({ type: '', msg: '', show: false });
    }, 2000);
  };

  const removeID = (id) => {
    showAlert('danger', 'Deleted item');
    setList((prevList) => prevList.filter((item) => item.id !== id));
  };

  const clearAll = () => {
    setList([]);
    showAlert('danger', 'Deleted all items');
  };

  const Edititem = (id) => {
    const selectedItem = list.find((item) => item.id === id);
    setIsEditAble(true);
    setEditID(id);
    setName(selectedItem.title);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert('danger', 'Enter values');
      return;
    }
    if (name && isEditAble) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('');
      setIsEditAble(false);
      setEditID(null);
      showAlert('success', 'Item edited');
    } else {
      setList([...list, { id: new Date().getTime().toString(), title: name }]);
      setName('');
      showAlert('success', 'Item added to list');
    }
  };

  useEffect(() => {
    const storedList = localStorage.getItem('list');
    if (storedList) {
      try {
        setList(JSON.parse(storedList));
      } catch (error) {
        console.error('Error parsing JSON from localStorage', error);
        setList([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <section className='section-center'>
      <form onSubmit={handleSubmit} className='grocery-form'>
        {alert.show && <Alert {...alert} />}
        <h3>Grocery Bud</h3>
        <div className='form-control'>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='grocery'
            placeholder='e.g., eggs'
            type='text'
          />
          <button className='submit-btn'>
            {isEditAble ? 'Edit' : 'Submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List Edititem={Edititem} removeID={removeID} items={list} />
          <button onClick={clearAll} className='clear-btn'>
            Clear Values
          </button>
        </div>
      )}
    </section>
  );
}

export default Grocery;
