import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/auth';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';


const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      history.push('/home');

      if (response.data.success) {
        dispatch(login(response.data.user));
        
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        Ainda não possui conta?{' '}
        <Link to="/register">Cadastre-se agora</Link>
      </div>
    </div>
  );
};

export default Login;
