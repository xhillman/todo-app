import React, { useEffect, useState } from "react";
import cookie from "react-cookies";
import jwt_decode from "jwt-decode";
import axios from "axios";

export const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const can = (capability) => {
    return user?.capabilities?.includes(capability);
  }

  useEffect(() => {
    const token = cookie.load("auth");
    if(token) {
      _validate(token);
    }
  }, []);

  async function login (username, password) {
    const request = {
      baseURL: 'https://api-js401.herokuapp.com',
      url: '/signin',
      method: 'post',
      auth: { username, password },
    }
    let response = await axios(request);
    console.log(response.data)
    let token = response.data.token;
    if (token) {
      try {
        _validate(token);
      } catch (error) {
        console.error(error);
      }
    }
  }

  function _validate(token) {
    try {
      let user = jwt_decode(token);
      if (user) {
        setUser(user);
        setLoggedIn(true);
        cookie.save('auth', token);
      }
    } catch (error) {
      setLoggedIn(false);
      setError(error);
      console.error(error);
    }
  }

  const logout = () => {
    setUser({});
    setLoggedIn(false);
    setError(null);
    cookie.remove('auth');
  };

  let authValues = {
    loggedIn,
    user,
    error,
    login,
    logout,
    can,
  }

  return (
    <AuthContext.Provider value={authValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;