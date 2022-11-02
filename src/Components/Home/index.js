import { Grid } from '@mantine/core';
import Form from '../Form/';
import List from '../List';
import useForm from '../../hooks/form';
import { useState } from 'react';



function Home(props) {

  const { addItem, toggleComplete, list } = props;

  const [defaultValues] = useState({
    difficulty: 3,
  });

  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  return (
    <>
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
  )
}

export default Home;