import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/auth";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Box,
  Link as MuiLink,
} from "@mui/material";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      history.push("/home");

      if (response.data.message === "Login bem-sucedido") {
        dispatch(login(response.data.user));
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage("Erro ao verificar as credenciais");
      console.log(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ color: "#9F681F", fontWeight: "bold" }}
          >
            LOGIN
          </Typography>
          <br></br>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ width: 500 }}
            required
            InputProps={{
              startAdornment: <HiOutlineMail />,
            }}
          />
          <br></br>
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ width: 500 }}
            required
            InputProps={{
              startAdornment: <RiLockPasswordLine />,
            }}
          />
          {message && (
            <p
              style={{ color: "red", fontStyle: "italic", fontWeight: "bold" }}
            >
              {message}
            </p>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, width: 500 }}
          >
            Login
          </Button>
          <Box
            sx={{ mt: 2, color: "#9F681F", fontWeight: "bold" }}
            textAlign="center"
          >
            Ainda não possui conta?{" "}
            <MuiLink component={Link} to="/register">
              Cadastre-se agora
            </MuiLink>
          </Box>
        </Box>
      </form>
    </div>
  );
};

export default Login;
