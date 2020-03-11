import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

const CreatePostScreen = ({ navigation, route}) => {
  const [postText, setPostText] = useState('');
  useEffect(() => {
    setPostText(route.params?.text)
  }, [])
  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          navigation.navigate('Home', { test: postText })
        }}
      />
    </>
  );
};

export default CreatePostScreen;
