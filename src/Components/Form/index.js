import { TextInput, Button, Text, Container, Title, Slider } from '@mantine/core';

function Form(props) {

  const { handleChange, handleSubmit, defaultValues } = props;

  return (
    <form onSubmit={handleSubmit}>

      <Container size={300} px="xs">
        <Title order={2}>Add To Do Item</Title>

        <TextInput
          placeholder="Item Details"
          label="To Do Item"
          size="md"
          name="text"
          onChange={handleChange}
        />

        <TextInput
          placeholder="Assignee Name"
          label="Assigned To"
          size="md"
          name="assignee"
          onChange={handleChange}
        />
        <Text size="md">Difficulty</Text>
        <Slider
        label={null}
        min={0}
        max={5}
        step={1}
        defaultValue={defaultValues.difficulty}
        name="difficulty"
        onChange={handleChange}
        />
        {/* <label>
          <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
        </label> */}
        <Button type="submit">
          Add Item
        </Button>
      </Container>
    </form>
  )
}

export default Form;
