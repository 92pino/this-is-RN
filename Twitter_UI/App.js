/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import { applyMiddleware, createStore }from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux'

import rootReducer from './reducers';
import rootSaga from './sagas';
import RootNavigator from './src/RootNavigator';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
