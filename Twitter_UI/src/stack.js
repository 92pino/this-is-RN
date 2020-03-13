import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabs from './BottomTabs';
// import { Details } from './details';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="FeedList"
    >
      <Stack.Screen
        name="동작구 Mask Api"
        component={BottomTabs}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
