import React, { useState, useEffect, useContext } from 'react';
import Form from './Components/Form';
import Header from './Components/Header';
import ToDos from './Components/ToDos'
import useForm from '../src/hooks/form';
import { v4 as uuid } from 'uuid';
import { SettingsContext } from './Components/Context/Settings';

function App() {

  const {maxItems, completed} = useContext(SettingsContext);
  
  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map( item => {
      if ( item.id === id ) {
        item.complete = ! item.complete;
      }
      return item;
    });
    setList(items);
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
      <Header incomplete={incomplete}/>
      <Form handleChange={handleChange} 
            handleSubmit={handleSubmit}
            defaultValues={defaultValues}/>
      <ToDos list={list} toggleComplete={toggleComplete}/>
    </>
  );
}

export default App;
