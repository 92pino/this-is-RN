import React from 'react';
import { Text, View, Button } from 'react-native';

const DetailsScreen = ({ route, navigation }) => {
  console.log('@@@ :', route.params)
  const { itemId, count } = route.params;
  const { otherParam } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details', {itemId: Math.floor(Math.random() * 100)})}
      />
      <Button
        title="Go to Push Screen"
        onPress={() => 
          navigation.push('Push', {name: itemId})
        }
      />
    </View>
  )
};

export default DetailsScreen;
