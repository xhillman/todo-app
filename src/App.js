import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import { v4 as uuid } from 'uuid';
import { Routes, Route } from 'react-router-dom';
import Settings from './Components/Settings';
import Home from './Components/Home';

function App() {

  
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);

  let storedList = JSON.parse(localStorage.getItem('list'));

  useEffect(() => {
    if(storedList) {
      setList(storedList);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
    localStorage.setItem('list', JSON.stringify(list));
  }

  // function deleteItem(id) {
  //   const items = list.filter(item => item.id !== id);
  //   setList(items);
  // }

  function toggleComplete(id) {
    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });
    setList(items);
    localStorage.setItem('list', JSON.stringify(list));
  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);

  return (
    <>
      <Header incomplete={incomplete} />
      <Routes>
        <Route path="/" 
               element={<Home addItem={addItem}
                              toggleComplete={toggleComplete} 
                              list={list} />} 
                              />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
