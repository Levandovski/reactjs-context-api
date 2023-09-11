import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../providers/auth';
import { User } from '../../providers/interface';

export const Login: React.FC = () => {

  const { user, setUser } = useAuth();
  const navigation = useNavigate();

  const handleLogin = () => {
    const newUser: User = {name: user.name };
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
    navigation('/dashboard');
  }

  const handleLogout = () => {
    const newUser: User = {name: user.name };
    localStorage.removeItem('user');
    setUser(newUser);
  }

  return (
    <div>
      <h1>
        Projeto com Context API
      </h1>
      <p>Name: {user.name}</p>
      <input type="text" onChange={(e: any) => setUser({name: e.target.value})} />
      <button onClick={handleLogin}>
          Login
      </button>
      <button onClick={handleLogout}>
          Logout
      </button>
    </div>
  );

}

