import React from 'react';
import {Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './Home/HomeScreen';
import DetailsScreen from './Detail/DetailsScreen';
import CreatePostScreen from './CreatePostScreen';
import ProfileScreen from './ProfileScreen';

const Stack = createStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default StackScreen;
