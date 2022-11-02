import { Title } from '@mantine/core';
import { Header, Navbar, createStyles } from "@mantine/core";
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.blue[7],
    padding: theme.spacing.md,
    fontSize: theme.fontSizes.md,
    color: theme.colors.gray[0],
  },
  h1: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
    width: '80%',
    margin: 'auto',
    fontSize: theme.fontSizes.lg,
    padding: theme.spacing.md,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
}));

function AppHeader(props) {

  const { incomplete } = props;
  const { classes } = useStyles();

  return (
    <Header data-testid="todo-header">
      <Navbar className={classes.navbar} >
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </Navbar>
      <Title data-testid="todo-h1" order={1} className={classes.h1}>To Do List: {incomplete} items pending</Title>
    </Header>
  )
}

export default AppHeader;
