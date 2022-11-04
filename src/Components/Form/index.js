import { TextInput, Button, Text, Card, Title, Slider } from '@mantine/core';

function Form(props) {

  const { handleChange, handleSubmit, defaultValues } = props;

  return (
    <form onSubmit={handleSubmit}>

      <Card m="sm" size={300} px="xs" withBorder>
        <Title m="xs" order={2}>Add To Do Item</Title>

        <TextInput
          placeholder="Item Details"
          label="To Do Item"
          size="md"
          m="sm"
          name="text"
          onChange={handleChange}
        />

        <TextInput
          placeholder="Assignee Name"
          label="Assigned To"
          size="md"
          m="sm"
          name="assignee"
          onChange={handleChange}
        />
        <Text size="md" m="sm">Difficulty</Text>
        <Slider
        m="sm"
        label={null}
        min={0}
        max={5}
        step={1}
        defaultValue={defaultValues.difficulty}
        name="difficulty"
        onChange={handleChange}
        />
        <Button m="xs" type="submit">
          Add Item
        </Button>
      </Card>
    </form>
  )
}

export default Form;
