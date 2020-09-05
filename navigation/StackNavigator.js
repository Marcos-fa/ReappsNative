import React from 'react';
import { Button, TouchableOpacity, Text, FontAwesome5 } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import Hello from '../screens/Hello';
import Request from '../screens/Request';
import HomeScreen from '../screens/Welcome';

import { bugerMenu } from './DrawerNavigator';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name='Home' component={HomeScreen}
                options={({ navigation }) => ({
                    headerLeft: () =>
                        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                            <Text>Menu</Text>
                        </TouchableOpacity>,
                })}
            />
        </Stack.Navigator>
    );
}

const hello = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name='Hello' component={Hello} 
                options={({ navigation }) => ({
                    headerLeft: () =>
                        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                            <Text>Menu</Text>
                        </TouchableOpacity>,
                })}
            />
        </Stack.Navigator>
    );
}

const request = () => {
    return (
        <Stack.Navigator
            screenOptions={screenOptionStyle}>
            <Stack.Screen name='Request' component={Request} 
                options={({ navigation }) => ({
                    headerLeft: () =>
                        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                            <Text>Menu</Text>
                        </TouchableOpacity>,
                })}
            />
        </Stack.Navigator>
    );
}

export { MainStackNavigator, hello, request };

const screenOptionStyle = {
    headerTitleStyle:{
        alignSelf:'center',
    },    
    titleStyle: {
      },
    headerStyle: {
        backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
    headerLeftContainerStyle: { paddingLeft: 10 },
    headerRight: () => <Text style={{color:'#9AC4F8'}} >N</Text>
};
