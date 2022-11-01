import { TextInput, Button, Text, Container, Title, Slider } from '@mantine/core';

function Form(props) {

  const { handleChange, handleSubmit, defaultValues } = props;

  const MARKS = [
    { value: 0, label: '1' },
    { value: 25, label: '2' },
    { value: 50, label: '3' },
    { value: 75, label: '4' },
    { value: 100, label: '5' },
  ];

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
        label={(val) => MARKS.find((mark) => mark.value === val).label}
        defaultValue={defaultValues.difficulty}
        step={25}
        styles={{ markLabel: { display: 'none' } }}
        type="range"
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
