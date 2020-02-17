import * as React from 'react';
import { Text, StatusBar, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

const Screen = ({ navigation }) => {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>
      <StatusBar barStyle="light-content" backgroundColor="#6a5ae" />
      <Text style={{ color: '#fff' }}>Light Screen</Text>
      <Button
        title="Next screen"
        onPress={() => navigation.navigate('Screen2')}
        color="#fff"
      />
    </SafeAreaView>
  );
};

const Screen2 = ({ navigation }) => {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <Text>Dark Screen</Text>
      <Button
        title="Next screen"
        onPress={() => navigation.navigate('Screen1')}
      />
    </SafeAreaView>
  );
}

export {
  Screen,
  Screen2
};