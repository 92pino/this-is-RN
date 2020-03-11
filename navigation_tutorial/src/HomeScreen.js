import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';

const HomeScreen = ({ route, navigation }) => {
  const [text, setText] = useState('');
  useEffect(() => {
    setText(route.params?.test)
    if (route.params?.test) {

    }
  }, [route.params?.test])
  console.log(route.params)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Create Post"
        onPress={() => navigation.navigate('Create', { text: text })}
      />
      <Text style={{ margin: 10 }}>Post: {text}</Text>
      <Button 
        title="Go to Details"
        onPress={
          () => navigation.navigate('Details', {
            otherParam: 'Anything you want here',
          }
        )}
      />
    </View>
  )
};

export default HomeScreen;
