import React, { useState, useEffect } from 'react';
import { Dimensions, Text, View, StyleSheet, StatusBar, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PieChart1 from './src/PieChart1';
import PieChart2 from './src/PieChart2';
import Donut from './src/Donut';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PieChart1" component={PieChart1} />
        <Stack.Screen name="PieChart2" component={PieChart2} />
        <Stack.Screen name="Donut" component={Donut} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
