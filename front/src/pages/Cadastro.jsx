import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { register } from '../redux/actions/auth';
import axios from 'axios';
import { TextField, Button, Box } from '@mui/material';
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from 'react-icons/ai';

const Cadastro = () => {
  const dispatch = useDispatch();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui, você pode fazer uma chamada para a API de registro usando o Axios
    axios
      .post('http://localhost:5000/api/register', {
        nome,
        email,
        password: password,
      })
      .then((response) => {
        // Registro bem-sucedido
        dispatch(register(nome, email, password));
        history.push('/login');
      })
      .catch((error) => {
        // Tratar erros, como exibir uma mensagem de erro para o usuário
        console.log(error);
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center' }}>Cadastro</h2>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <TextField
            label="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            sx={{ width: 500 }}
            required
            InputProps={{
              startAdornment: <AiOutlineUser />,
            }}
          />
          <br />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ width: 500 }}
            required
            InputProps={{
              startAdornment: <AiOutlineMail />,
            }}
          />
          <br />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{ width: 500 }}
            InputProps={{
              startAdornment: <AiOutlineLock />,
            }}
          />
          <br />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: 500, mt: 2 }}
          >
            Registrar
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Cadastro;
