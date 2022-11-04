import { Card, Text, Badge, Group, CloseButton } from '@mantine/core';
import Access from '../Access';

const ToDo = (props) => {

  const { item, toggleComplete, deleteItem } = props;

  let badgeStyle = {
    color: '',
    text: '',
  }

  if (item.complete) {
    badgeStyle.color = 'red';
    badgeStyle.text = 'Complete';
  } else {
    badgeStyle.color = 'green';
    badgeStyle.text = 'Pending'
  }

  return (
    <>
      <Card shadow="sm" p="lg" m="15px" radius="md" withBorder>
        <Card.Section withBorder>
          <Group position="apart">
            <Group position="left">
              <Badge color={badgeStyle.color} variant="light" m="3px" onClick={() => toggleComplete(item._id)}>
                {badgeStyle.text}
              </Badge>
              <Text size='lg'>{item.assignee}</Text>
            </Group>
            <Access capability="delete">
              <CloseButton title='Delete ToDo Item' onClick={() => deleteItem(item._id)}></CloseButton>
            </Access>
          </Group>
        </Card.Section>
        <Group position="apart" mb="xs">
          <Text size="lg" color="default">{item.text}</Text>
          <Text size="xs" mt='xl' color="default">Difficulty: {item.difficulty}</Text>
        </Group>
      </Card>
    </>
  )
}

export default ToDo;
