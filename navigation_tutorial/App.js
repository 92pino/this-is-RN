import React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './src/HomeScreen'
import DetailsScreen from './src/DetailsScreen'
import PushScreen from './src/PushScreen'
import CreatePostScreen from './src/CreatePostScreen'

const Stack = createStackNavigator()

const App = () => (
    <NavigationContainer>
        <Stack.Navigator 
            initialRouteName="Home" 
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerRight: () => {
                    return (
                        <Button 
                            title="Info"
                        />
                    )
                }
            }}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Overview'
                }}
            />
            <Stack.Screen name="Details" initialParams={{ itemId: 42 }} component={DetailsScreen} />
            <Stack.Screen name="Create" component={CreatePostScreen} />
            <Stack.Screen 
                name="Push" 
                component={PushScreen} 
                options={
                    ({ route, navigation }) => ({ 
                        title: route.params.name,
                        headerRight: () => (
                            <Button
                                fontWeight="bold"
                                title="Info"
                                color="#fff"
                                onPress={() => console.log(navigation) }
                            />
                        )
                    })
                }
            />
        </Stack.Navigator>
    </NavigationContainer>
);

export default App;
