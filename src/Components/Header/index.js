import {Title} from '@mantine/core';

function Header(props) {

  const {incomplete} = props;

  return (
    <header data-testid="todo-header">
      <Title data-testid="todo-h1" order={1}>To Do List: {incomplete} items pending</Title>
    </header>
  )
}

export default Header;
