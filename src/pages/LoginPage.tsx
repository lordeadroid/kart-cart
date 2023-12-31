import { useState } from 'react';
import { useNavigate } from 'react-router';
import { LoginDetails } from '../utils/interfaces';
import React from 'react';

const isUserVerified = (loginData: LoginDetails) => {
  const data: any = { rishabh: 'rawat' };
  return data[loginData.username] === loginData.password;
};

const LoginPage = (): React.JSX.Element => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const loginData: LoginDetails = { username, password };

  const handleSubmit = (event: any): void => {
    event.preventDefault();
    setIsClicked(true);
  };

  if (isClicked) {
    if (isUserVerified(loginData)) {
      navigate('/', { state: loginData });
    }
  }

  const Login: React.JSX.Element = (
    <div className="flex flex-col text-center text-xl">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Username</label>
          <input
            type="username"
            name="Email"
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );

  return Login;
};

export default LoginPage;
