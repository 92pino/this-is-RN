import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import FirstScreen from './Mask/FirstScreen';
import SecondScreen from './Mask/SecondScreen';
import ThirdScreen from './Mask/ThirdScreen';
import FourthScreen from './Mask/FourthScreen';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="100개이상" component={FirstScreen} />
      <Tab.Screen name="30개 이상 ~ 100개 미만" component={SecondScreen} />
      <Tab.Screen name="30개 미만" component={ThirdScreen} />
      <Tab.Screen name="품절" component={FourthScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
