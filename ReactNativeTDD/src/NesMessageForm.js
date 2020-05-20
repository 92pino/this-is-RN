import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';

const NewMmessageForm = () => (
    <View>
      <Text>1234</Text>
      <TextInput testID="messageText" />
      <Button title="Send" tesstID="sendButton" />
    </View>
);

export default NewMmessageForm;
