import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import StackNavigator from './stack';
import ProfileNavigator from './ProfileNavigator';

const Drawer = createDrawerNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={StackNavigator} />
        <Drawer.Screen name="Profile" component={ProfileNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;