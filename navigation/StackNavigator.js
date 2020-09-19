import React from 'react';
import { Button, TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {FontAwesome5} from '@expo/vector-icons';
// import Hello from '../screens/Hello';
import Request_ImgPicker from '../screens/Request_ImgPicker';
import HomeScreen from '../screens/Welcome';
// import Fotos from '../screens/Fotos';
import Cartelera from '../screens/Cartelera';
import Headphones from '../screens/Headphones';
import Movies from '../screens/Movies';
import Socials from '../screens/Socials';
import Directorio from '../screens/Directorio';
import Maps from '../screens/Maps';


const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={HomeHeaderStyle}>
            <Stack.Screen name='Home' component={HomeScreen}
                options={({ navigation }) => ({
                    headerLeft: () =>
                        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                            <FontAwesome5 name='bars' size={24} color="white" />
                        </TouchableOpacity>,
                })}
            />
        </Stack.Navigator>
    );
}

const request_ImgPicker = () => {
    return (
        <Stack.Navigator
            screenOptions={screenOptionStyle}>
            <Stack.Screen name='Request y ImgPicker' component={Request_ImgPicker}
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
                <TouchableOpacity onPress={() => navigation.toggleDrawer() }><FontAwesome5 name='bars' size={24} color="#49B1E9" /></TouchableOpacity>
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

const movies = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name='Movies' component={Movies}
            options={({navigation}) => ({
                headerLeft:() =>
                <TouchableOpacity onPress={() => navigation.toggleDrawer() }><FontAwesome5 name='bars' size={24} color="#161924" /></TouchableOpacity>
            })} />


        </Stack.Navigator>
    );
}

const socials = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name='Socials' component={Socials}
            options={({navigation}) => ({
                headerLeft:() =>
                <TouchableOpacity onPress={() => navigation.toggleDrawer() }><FontAwesome5 name='bars' size={24} color="#161924" /></TouchableOpacity>
            })} />


        </Stack.Navigator>
    );
}

const directorio = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle} >
            <Stack.Screen name='Directorio' component={Directorio}
            options={({navigation}) => ({
                headerLeft:() =>
                <TouchableOpacity onPress={() => navigation.toggleDrawer() }><FontAwesome5 name='bars' size={24} color="#161924" /></TouchableOpacity>
            })} />


        </Stack.Navigator>
    );
}

const maps = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle} >
            <Stack.Screen name='Maps' component={Maps}
            options={({navigation}) => ({
                headerLeft:() =>
                <TouchableOpacity onPress={() => navigation.toggleDrawer() }><FontAwesome5 name='bars' size={24} color="#161924" /></TouchableOpacity>
            })} />


        </Stack.Navigator>
    );
}

export { MainStackNavigator, request_ImgPicker, cartelera, headphones, movies, socials, directorio, maps };

const screenOptionStyle = {
    headerTitleStyle: {
        alignSelf: 'center',
    },
    titleStyle: {
    },
    headerStyle: {
        backgroundColor: "#fff",
    },
    headerTintColor: "black",
    headerBackTitle: "Back",
    headerLeftContainerStyle: { paddingLeft: 10 },
    headerRight: () => <Text style={{ color: '#9AC4F8' }} > </Text>
};

const HomeHeaderStyle = {
    headerTitleStyle: {
        alignSelf: 'center',
    },
    titleStyle: {
    },
    headerStyle: {
        backgroundColor: "#984B3B",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
    headerLeftContainerStyle: { paddingLeft: 10 },
    headerRight: () => <Text style={{ color: '#9AC4F8' }} > </Text>
};