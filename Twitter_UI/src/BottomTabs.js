import React from 'react';
import { Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from './HomeScreen';
import Message from './Message';
import Notifications from './Notifications';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="재고 현황" component={HomeScreen} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Messagess" component={Message} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
