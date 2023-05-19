import React, { useContext, useState } from 'react';
import { AuthContext } from "../context";
import UsersService from "../services/UsersService";

const Login = () => {
  const { setIsAuth, setUser, user } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [serverError, setServerError] = useState("");

  const login = event => {
    event.preventDefault();

    UsersService.login(username, password)
      .then(res => {
        const data = res.data;
        if (data.code === 200) {
          const user = {
            "id": data.answer.id,
            "username": data.answer.username,
            "is_superuser": data.answer.is_superuser,
          };
          setUser(user);
          setIsAuth(true);
          localStorage.setItem("user", JSON.stringify(user));
        } else {
          setServerError(data.answer)
        }
      })
  }
};

export default Login;