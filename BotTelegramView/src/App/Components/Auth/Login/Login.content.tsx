import React from 'react';
import { 
  Button,
  TextField,
  Typography,
  Container
} from '@material-ui/core';
import { useStyles } from './Login.styles';
import { inputNames } from './Login.config';
import { LoginContentProps } from './Login.interface';


const LoginContent = ({language, handleChange, username, password, handleLogin}: LoginContentProps) => {
  const { paper, submit, form } = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={paper}>
        <Typography component="h1" variant="h5">
          {language.signIn}
        </Typography>
        <form className={form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id={inputNames.username}
            label={language.username}
            name={inputNames.username}
            autoComplete={inputNames.username}
            autoFocus
            onChange={handleChange}
            value={username}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name={inputNames.password}
            label={language.password}
            type={inputNames.password}
            id={inputNames.password}
            autoComplete="current-password"
            onChange={handleChange}
            value={password}
          />
          <Button
            fullWidth
            variant="contained"
            className={submit}
            onClick={handleLogin}
          >
            {language.signIn}
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default LoginContent;