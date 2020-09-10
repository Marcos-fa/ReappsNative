import React from 'react';
import { Button, TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {FontAwesome5} from '@expo/vector-icons';
const Drawer = createDrawerNavigator();

import Hello from '../screens/Hello';
import Request from '../screens/Request';
import HomeScreen from '../screens/Welcome';
import Fotos from '../screens/Fotos';
import Cartelera from '../screens/Cartelera';
import Headphones from '../screens/Headphones'

import { bugerMenu } from './DrawerNavigator';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name='Home' component={HomeScreen}
                options={({ navigation }) => ({
                    headerLeft: () =>
                        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                            <FontAwesome5 name='bars' size={24} color="#161924" />
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
                            <FontAwesome5 name='bars' size={24} color="#161924" />
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
                            <FontAwesome5 name='bars' size={24} color="#161924" />
                        </TouchableOpacity>,
                })}
            />
        </Stack.Navigator>
    );
}

const fotos = () => {
    return (
        <Stack.Navigator
            screenOptions={screenOptionStyle}>
            <Stack.Screen name='Fotos' component={Fotos}
                options={({ navigation }) => ({
                    headerLeft: () =>
                        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                            <FontAwesome5 name='bars' size={24} color="#161924" />
                        </TouchableOpacity>,
                })}
            />
        </Stack.Navigator>
    );
}

const cartelera = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle} >
            <Stack.Screen name='Cartelera' component={Cartelera}
            options={({navigation}) => ({
                headerLeft:() =>
                <TouchableOpacity onPress={() => navigation.toggleDrawer() }><FontAwesome5 name='bars' size={24} color="#161924" /></TouchableOpacity>
            })} />


        </Stack.Navigator>
    );
}

const headphones = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name='Headphones' component={Headphones}
            options={({navigation}) => ({
                headerLeft:() =>
                <TouchableOpacity onPress={() => navigation.toggleDrawer() }><FontAwesome5 name='bars' size={24} color="#161924" /></TouchableOpacity>
            })} />


        </Stack.Navigator>
    );
}

export { MainStackNavigator, hello, request, fotos, cartelera, headphones, };

const screenOptionStyle = {
    headerTitleStyle: {
        alignSelf: 'center',
    },
    titleStyle: {
    },
    headerStyle: {
        backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
    headerLeftContainerStyle: { paddingLeft: 10 },
    headerRight: () => <Text style={{ color: '#9AC4F8' }} >N</Text>
};
