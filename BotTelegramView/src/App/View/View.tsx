import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import Routes from '../Routes/Router.routes';
import PrivateRoutes from '../HOC/PrivateRoute.hoc';
import RedirectWithAuth from '../HOC/RedirectWithAuth.hoc';
import ModalController from '../HOC/ModalController.hoc';
import '../Styles/Base.style.css';
import { theme } from '../Config/Theme/Theme.config'
import LanguageProvider from '../HOC/LangProvider.hoc';
import Header from '../Components/Layout/Header/Header.container';
import { history } from '../Utils/History.utils';

const App = () => {
  const { publicRoutes, privateRoutes } = Routes

  return (
    <ThemeProvider theme={theme}>
      <ModalController>
        <LanguageProvider>
          <Header/>
          <BrowserRouter>
            <Router history={history}>
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
            </Router>
          </BrowserRouter>
        </LanguageProvider>
      </ModalController>
    </ThemeProvider>
  );
}

export default App;
