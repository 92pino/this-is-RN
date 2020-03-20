import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens'
import produce from 'immer';

import StackScreen from './src/Home/HomeScreen';
import ModalScreen from './src/ModalScreen';

enableScreens();

const baseState = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

const nextState = produce(baseState, draft => {
  draft.push({ id: 3, name: "C" });
  draft[0].name = "A+";
  draft[0]
});

console.log(baseState, nextState);

const Root = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Root.Navigator mode="modal">
        <Root.Screen name="Stack" component={StackScreen} />
        <Root.Screen name="MyModal" component={ModalScreen} options={{
          headerShown: false
        }} />
      </Root.Navigator>
    </NavigationContainer>
  );
}

export default App;