import React from 'react';
import { Text, View, Button, SafeAreaView } from 'react-native';

const Home = ({ navigation }) => (
    <SafeAreaView>
        <Text>Home</Text>
        <Button
          title="버튼"
          // onPress={() => navigation.navigate('Details')}
          onPress={() => navigation.navigate('Profile')}
        />
        <Button
          title="팝업 열기"
          onPress={() => navigation.navigate('MyModal')}
        />
    </SafeAreaView>
);

export default Home;
