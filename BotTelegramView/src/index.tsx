import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/View/View';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './App/Store/Store.redux';

const IuApp = () => (
  <>
    <Provider store={store}>
      <App/>
    </Provider>
  </>
);

ReactDOM.render(<IuApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
