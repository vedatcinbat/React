import React from "react";
import { TextField, Button, Container } from "@mui/material";

const LoginForm: React.FC = () => {
  return (
    <Container maxWidth="md">
      <h1>Login</h1>
      <form>
        <TextField
          label="Email"
          type="email"
          required
          fullWidth
          sx={{
            marginBottom: 2,
            backgroundColor: "rgba(238, 238, 238, 0.8)",
            ":hover": {
              backgroundColor: "rgba(170, 170, 170, 0.9)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            },
          }}
        />
        <TextField label="Password" type="password" required fullWidth />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;
