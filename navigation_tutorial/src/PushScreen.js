import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Text, View, Button } from 'react-native';

const PushScreen = ({ route, navigation }) => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    console.log('@@@ :', route.params)
  }, [count])
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count" />
      )
    })
  }, [navigation, setCount])
  
  return (
    <View>
        <Text>PushScreen</Text>
        <Button
          title="Push Screen!"
          onPress={() => navigation.goBack()}
        />
        <Button
          title="Go back to First screen in stack"
          onPress={() => navigation.popToTop()}
        />
        <Button
          title="Update Title"
          onPress={() => navigation.setOptions({ title: 'Update' })}
        />
        <Text>Count : {count}</Text>
    </View>
  )
};

export default PushScreen;
