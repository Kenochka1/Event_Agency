import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../Context/AuthContext";
import welcome from "../../Assets/images3/welcome.svg";
import back from "../../Assets/images3/backimage.jpg";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Shattyk
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function LoginLogout() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = useContext(authContext);

  const navigate = useNavigate();

  const signIn = () => {
    handleLogin();
    navigate("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <img src={welcome} alt="welcome" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Добро пожаловать!
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email адрес"
              name="email"
              autoComplete="email"
              helperText={emailError}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Введите пароль"
              type="password"
              id="password"
              helperText={passwordError}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Запомнить меня"
            />

            {hasAccount ? (
              <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={signIn}
              >
                Войти
              </Button>
            ) : (
              <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSignUp}
              >
                Войти
              </Button>
            )}

            <Grid container>
              <Grid item>
                {hasAccount ? (
                  <Link
                    onClick={() => setHasAccount(!hasAccount)}
                    href="#"
                    variant="body2"
                  >
                    {"Нету аккаунта? Зарегистрируйтесь"}
                  </Link>
                ) : (
                  <Link
                    onClick={() => setHasAccount(!hasAccount)}
                    href="#"
                    variant="body2"
                  >
                    {"Есть аккаунт? Войдите"}
                  </Link>
                )}
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
