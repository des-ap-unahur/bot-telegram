import React from 'react';
import { 
  Button,
  TextField,
  Typography,
  Container,
  CircularProgress
} from '@material-ui/core';
import { useStyles } from './Login.styles';
import { inputNames } from './Login.config';
import { LoginContentProps } from './Login.interface';


const LoginContent = ({ language, handleChange, username, password, handleLogin, fetching, errorMsg }: LoginContentProps) => {
  const { paper, submit, form, loader, loaderContainer, labelAlert } = useStyles();

  const onEnter = (event:any, callback: () => void) => event.key === 'Enter' && callback()

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
            onKeyDown={(e: any)=> onEnter(e, handleLogin)}
            value={password}
          />
          {(errorMsg) &&
            <Typography className={labelAlert} variant="subtitle1">
              {errorMsg}
            </Typography>
          }
          <Button
            fullWidth
            variant="contained"
            className={submit}
            disabled={fetching}
            onClick={handleLogin}
          >
            {language.signIn}
            {fetching && 
              <div className={loaderContainer}>
                <CircularProgress className={loader} size={35} />
              </div>
            }
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default LoginContent;