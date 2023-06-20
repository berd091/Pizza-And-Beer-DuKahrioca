import axios from 'axios';

// Constantes dos tipos de ação
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAILURE = 'REGISTER_FAILURE';

// Ação para fazer login
export const login = (email, password) => async (dispatch) => {
  try {
    // Chamar a API de login
    const response = await axios.post('http://localhost:5000/api/login', { email, password });

    // Disparar ação de sucesso de login
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data, // Se houver dados adicionais retornados pela API
    });
  } catch (error) {
    // Disparar ação de falha de login
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response.data.message, // Mensagem de erro da API
    });
  }
};

// Ação para registrar um novo usuário
export const register = (nome, email, password) => async (dispatch) => {
  try {
    // Chamar a API de registro
    const response = await axios.post('http://localhost:5000/api/register', { nome, email, password });

    // Disparar ação de sucesso de registro
    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.data, // Se houver dados adicionais retornados pela API
    });
  } catch (error) {
    // Disparar ação de falha de registro
    dispatch({
      type: REGISTER_FAILURE,
      payload: error.response.data.message, // Mensagem de erro da API
    });
  }
};
