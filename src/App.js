import React, { useState, useEffect, useContext } from 'react';
import Form from './Components/Form';
import Nav from './Components/Nav';
import Header from './Components/Header';
import List from './Components/List'
import useForm from '../src/hooks/form';
import { v4 as uuid } from 'uuid';
import { SettingsContext } from './Components/Context/Settings';
import { Grid } from '@mantine/core';

function App() {

  const [defaultValues] = useState({
    difficulty: 75,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);
  const { completed } = useContext(SettingsContext);

  function addItem(item) {
    item.id = uuid();
    item.complete = completed;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
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
      <Nav />
      <Header incomplete={incomplete} />
      <Grid>
        <Grid.Col span={4}>
          <Form handleChange={handleChange}
            handleSubmit={handleSubmit}
            defaultValues={defaultValues} />
        </Grid.Col>
        <Grid.Col span={8}>
          <List list={list} toggleComplete={toggleComplete} />
        </Grid.Col>
      </Grid>
    </>
  );
}

export default App;
