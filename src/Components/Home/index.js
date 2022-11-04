import { Grid, createStyles } from '@mantine/core';
import { v4 as uuid } from 'uuid';
import Form from '../Form/';
import List from '../List';
import useForm from '../../hooks/form';
import { useState, useContext, useEffect } from 'react';
import { When } from 'react-if';
import { AuthContext } from '../Context/Auth';
import Access from '../Access';
import axios from 'axios';

const useStyles = createStyles((theme) => ({
  home: {
    display: 'flex', 
    justifyContent: 'center',
    width: '80%',
    margin: 'auto',
    padding: theme.spacing.sm,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
}));

function Home(props) {

  const { loggedIn } = useContext(AuthContext);

  const [defaultValues] = useState({
    difficulty: 3,
  });

  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  const { classes } = useStyles();

  const [list, setList] = useState([]);
  const {incomplete, setIncomplete} = props;
  
  useEffect(() => {
    const getList = async () => {
      const response = await axios.get('https://api-js401.herokuapp.com/api/v1/todo');
      let newList = response.data.results;
      setList(newList);
      console.log(newList);
    }
    getList();
  }, []);

  async function addItem(item) {
    item.id = uuid();
    item.complete = false;
    let newItem = {
      text: item.text,
      assignee: item.assignee,
      complete: item.complete,
      difficulty: item.difficulty,
    }
    let payload = {
      method: 'post',
      baseURL: 'https://api-js401.herokuapp.com',
      url: '/api/v1/todo',
      data: newItem,
    }
    let response = await axios(payload);
    console.log('new item', response);
    setList([...list, response.data]);
    // localStorage.setItem('list', JSON.stringify(list));
  }

async function deleteItem(id) {
    const item = list.filter(item => item._id === id);
    const updatedTasks = list.filter(task => task._id !== id);
    setList(updatedTasks);
    let payload = {
      method: 'delete',
      baseURL: 'https://api-js401.herokuapp.com',
      url: `/api/v1/todo/${id}`,
    };
    await axios(payload);
    console.log('deleted', item);
  }

  async function toggleComplete(id) {
    const items = list.map(item => {
      if (item._id === id) {
        item.complete = !item.complete;
      }
      return item;
    });
    const itemToUpdate = items.filter(item => item._id === id);
    const payload = {
      method: 'put',
      baseURL: 'https://api-js401.herokuapp.com',
      url: `/api/v1/todo/${id}`,
      data: itemToUpdate[0],
    }
    let response = await axios(payload);
    setList(items);
    console.log('item to update', response.data);
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
      <When condition={loggedIn}>
        <div className={classes.home}>
          <Grid style={{width: "80%"}}>
            <Grid.Col span={4}  xs={12} sm={4} >
              <Access capability="create">
                <Form handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  defaultValues={defaultValues} />
              </Access>
            </Grid.Col>
            <Grid.Col span={8} xs={12} sm={8} >
              <Access capability="read">
                <List list={list} toggleComplete={toggleComplete} deleteItem={deleteItem} />
              </Access>
            </Grid.Col>
          </Grid>
        </div>
      </When>
    </>
  )
}

export default Home;