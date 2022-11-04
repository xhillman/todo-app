import { TextInput, Button } from "@mantine/core";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/Auth";
import { When } from 'react-if';

const Login = () => {

  const {
    loggedIn,
    // user,
    // token,
    // error,
    login,
    logout,
    // can,
  } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login(username, password);
  }

  const handleLogout = () => {
    logout();
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  return (
    <>
      <When condition={!loggedIn}>
        <TextInput
          placeholder="Username"
          onChange={handleUsernameChange}
        />
        <TextInput
          placeholder="Password"
          onChange={handlePasswordChange}
        />
        <Button type="button" color="dark" onClick={handleLogin}>
          Login
        </Button>
      </When>
      <When condition={loggedIn}>
        <Button type="button" color="red" onClick={handleLogout}>
          Logout
        </Button>
      </When>
    </>
  )
}

export default Login;