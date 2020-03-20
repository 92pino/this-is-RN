import React, {useCallback, useRef} from 'react';
import { Text, View, Button, ScrollView, Image, StatusBar } from 'react-native';
import {StackActions, useFocusEffect, useRoute, useScrollToTop, CommonActions} from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

function MyText() {
  const route = useRoute();

  console.log('@@@@ :', route);
  
  return <Text>{route.params.caption}</Text>
}

const ProfileScreen = ({ navigation, uesrId, MyBackButton }) => {  
  const ref = React.useRef(null);

  useScrollToTop(ref);
  
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <Text>Dark Screen</Text>
      <Button
        title="Next screen"
        onPress={() => navigation.navigate('Screen1')}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;