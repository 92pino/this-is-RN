import React, {useState, useEffect, useCallback} from 'react';
import { Text, View, Button, StatusBar } from 'react-native';
import {NavigationContainer, useIsFocused, useNavigation, useNavigationState, useFocusEffect, useTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './Home'
import Settings from '../Settings/Settings'

const Tab = createBottomTabNavigator()

function HomeScreen({ navigation, route }) { 
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
export default HomeScreen;
