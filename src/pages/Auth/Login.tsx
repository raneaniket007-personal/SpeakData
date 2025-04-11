import { useState } from "react";
import { TextField, Button, Container, Typography, Box, Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/slices/authSlice";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [inputError, setInputError] = useState<string | null>(null);
  
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const handleLogin = async () => {
    if (!username.trim() || !password.trim()) {
      setInputError("Both email and password are required.");
      return;
    }
    setInputError(null); // Clear previous errors

    const result = await dispatch(loginUser({ username, password }));
    if (loginUser.fulfilled.match(result)) {
      navigate("/");  // Redirect to home page after successful login
    }
  };

  return (
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" gap={2} mt={5}>
        <Typography variant="h5" textAlign="center">Login</Typography>
        {inputError && <Alert severity="error">{inputError}</Alert>}
        {error && <Alert severity="error">{error}</Alert>}
        <TextField 
          label="Email" 
          variant="outlined" 
          fullWidth 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <TextField 
          label="Password" 
          type="password" 
          variant="outlined" 
          fullWidth 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          onClick={handleLogin} 
          disabled={loading || !username.trim() || !password.trim()} // Disable button if inputs are empty
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
