import React from 'react';
import { Text, View, StatusBar, SafeAreaView } from 'react-native';
import NewMessageForm from './src/NesMessageForm';

const App = () => (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <NewMessageForm />
        </View>
      </SafeAreaView>
    </>
);

export default App;
