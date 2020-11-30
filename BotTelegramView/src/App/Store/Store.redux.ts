import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './Reducers/Index.reducer';

const { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ }:any = window;

const loggerMiddleware = createLogger();

const composeEnhancers = __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

export default store;