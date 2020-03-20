import React, {useState, useEffect, useCallback} from 'react';
import { TextInput, Text, View, Button } from 'react-native';
import {NavigationContainer, useFocusEffect, useRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = useState(route.params?.postText);

  useEffect(() => {
    if (route.params?.postText) {}
  }, [route.params?.postText])
  console.log(route)

  useFocusEffect(useCallback(() => {
    console.log('abcde')
  }), [])
  
  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white'}}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          navigation.navigate('Home', { post: postText })
        }}
      />
      <MyText />
    </>
  );
}

export default CreatePostScreen;
