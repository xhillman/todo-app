import { Card, Text, Badge, Group, Divider } from '@mantine/core';

const ToDo = (props) => {

  const { item, toggleComplete } = props;

  let badgeStyle = {
    color: '',
    text: '',
  }

  if(item.complete){
    badgeStyle.color = 'red';
    badgeStyle.text = 'Complete';
  } else {
    badgeStyle.color = 'green';
    badgeStyle.text = 'Pending'
  }

  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <Group position="left" mb="xs">
          <Badge color={badgeStyle.color} variant="light" onClick={() => toggleComplete(item.id)}>
            {badgeStyle.text}
          </Badge>
          <Text size='lg'>{item.assignee}</Text>
        </Group>
        <Divider my="sm" />
        <Group position="apart" mb="xs">
          <Text size="lg" color="default">{item.text}</Text>
          <Text size="xs" mt='xl' color="default">Difficulty: 4</Text>
        </Group>
      </Card>
    </>
  )
}

export default ToDo;
