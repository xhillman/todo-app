import { Grid } from '@mantine/core';
import Form from '../Form/';
import List from '../List';
import useForm from '../../hooks/form';
import { useState, useContext } from 'react';
import { When } from 'react-if';
import { AuthContext } from '../Context/Auth';
import Access from '../Access';


function Home(props) {

  const { loggedIn } = useContext(AuthContext);

  const { addItem, toggleComplete, list } = props;

  const [defaultValues] = useState({
    difficulty: 3,
  });

  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  return (
    <>
      <When condition={loggedIn}>
        <Grid>
          <Grid.Col span={4}>
            <Access capability="create">

            <Form handleChange={handleChange}
              handleSubmit={handleSubmit}
              defaultValues={defaultValues} />
            </Access>
          </Grid.Col>
          <Grid.Col span={8}>
            <Access capability="read">
              <List list={list} toggleComplete={toggleComplete} />
            </Access>
          </Grid.Col>
        </Grid>
      </When>
    </>
  )
}

export default Home;