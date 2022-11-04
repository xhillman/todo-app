import { Group, Title } from '@mantine/core';
import { Header, Navbar, createStyles } from "@mantine/core";
import { useContext } from 'react';
import { When } from 'react-if';
import { Link } from 'react-router-dom';
import Login from '../Login';
import { AuthContext } from '../Context/Auth';

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
    borderRadius: theme.radius.md,
  },
  login: {
    alignContent: 'right',
  },
  nav: {
    display: 'flex',
    listStyle: 'none',
    marginLeft: '0px',
  },
  navItem: {
    textDecoration: 'none',
    color: theme.colors.gray[0],
    padding: theme.spacing.md,
    
  },
  li: {
    textDecoration: 'none',
  }
}));

function AppHeader(props) {

  const { loggedIn } = useContext(AuthContext);

  const { incomplete } = props;
  const { classes } = useStyles();

  return (
    <Header data-testid="todo-header">
      <Navbar className={classes.navbar} >
        <Group position='right'>
          <When condition={loggedIn}>
            <ul className={classes.nav}>
              <li><Link className={classes.navItem} to="/">Home</Link></li>
              <li><Link className={classes.navItem} to="/settings">Settings</Link></li>
            </ul>
          </When>
          <Login className={classes.login} />
        </Group>
      </Navbar>
      <When condition={loggedIn}>
        <Title data-testid="todo-h1" order={1} className={classes.h1}>To Do List: {incomplete} items pending</Title>
      </When>
    </Header >
  )
}

export default AppHeader;
