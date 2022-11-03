import { TextInput, Button } from "@mantine/core";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/Auth";
import { When } from 'react-if';

const Login = () => {

  const {
    loggedIn,
    user,
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
      <TextInput
        placeholder="Username"
        label="Username"
        onChange={handleUsernameChange}
      />
      <TextInput
        placeholder="Password"
        label="Password"
        onChange={handlePasswordChange}
      />
      <When condition={loggedIn}>
        <Button type="button" onClick={handleLogout}>
          Logout
        </Button>
      </When>
      <When condition={!loggedIn}>
        <Button type="button" onClick={handleLogin}>
          Login
        </Button>
      </When>

      <div>user: {JSON.stringify(user)}</div>
    </>
  )
}

export default Login;