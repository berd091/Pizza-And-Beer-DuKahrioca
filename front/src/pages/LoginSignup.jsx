import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, Link } from '@mui/material';
import { Navigate } from "react-router-dom";

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', { username, password });
      console.log(response.data);
      // Fazer algo com a resposta, como redirecionar para outra página
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post('/api/signup', { username, password });
      console.log(response.data);
      // Fazer algo com a resposta, como redirecionar para a página de login
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        'Página de Cadastro' : 'Página de Login'}
      </Typography>
      <TextField
        label="Nome de usuário"
        variant="outlined"
        fullWidth
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        sx={{ mt: 4 }}
      />
      <TextField
        label="Senha"
        variant="outlined"
        type="password"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ mt: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={isSignup ? handleSignup : handleLogin}
        sx={{ mt: 4 }}
      >
        {isSignup ? 'Cadastrar' : 'Entrar'}
      </Button>
      <Typography variant="body2" sx={{ mt: 2 }}>
        {isSignup ? 'Já tem uma conta? ' : 'Não tem uma conta? '}
        <Link component="button" variant="body2" onClick={() => setIsSignup(!isSignup)}>
          {isSignup ? 'Faça o login agora!' : 'Cadastre-se agora!'}
        </Link>
      </Typography>
    </Container>
    ) : (

    )}
    
    </div>
  );
}

export default App;