import React from 'react';
import { ThemeProvider } from '@material-ui/core'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Routes from '../Routes/Router.routes';
import PrivateRoutes from '../HOC/PrivateRoute.hoc';
import RedirectWithAuth from '../HOC/RedirectWithAuth.hoc';
import ModalController from '../HOC/ModalController.hoc';
import '../Styles/Base.style.css';
import { theme } from '../Config/Theme/Theme.config'

const App = () => {
  const { publicRoutes, privateRoutes } = Routes

  return (
    <ThemeProvider theme={theme}>
      <ModalController>
        <BrowserRouter>
          <Switch>
            {
              publicRoutes.map((route, index) =>
                <Route key={index} {...route} />
              )
            }
            {
              privateRoutes.map(
                (route, index) =>
                <PrivateRoutes key={index} {...route} />
              )
            }
          <RedirectWithAuth/>
          </Switch>
        </BrowserRouter>
      </ModalController>
    </ThemeProvider>
  );
}

export default App;
