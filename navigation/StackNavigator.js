import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import OpenDrawer from "./OpenDrawer";
// Screens
import Request_ImgPicker from '../screens/Request_ImgPicker';
import HomeScreen from '../screens/Welcome';
// import Fotos from '../screens/Fotos';
import Cartelera from '../screens/Cartelera';
import Headphones from '../screens/Headphones';
import Movies from '../screens/Movies';
import Socials from '../screens/Socials';
import Directorio from '../screens/Directorio';
import Maps from '../screens/Maps';
import ChatApp from "../screens/ChatApp/ChatScreen";
import LoginScreen from "../screens/ChatApp/LoginScreen";


const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{...screenOptionStyle, headerStyle: {  backgroundColor: "#984B3B", }, headerTintColor: "white",  }}>
            <Stack.Screen name='Home' component={HomeScreen}
                options={() => ({ headerLeft: () => <OpenDrawer  color={'white'} /> })} />
        </Stack.Navigator>
    );
}

const request_ImgPicker = () => {
    return (
        <Stack.Navigator
            screenOptions={screenOptionStyle}>
            <Stack.Screen name='Request y ImgPicker' component={Request_ImgPicker}
                options={() => ({ headerLeft: () => <OpenDrawer color={'black'} /> })} />
        </Stack.Navigator>
    );
}

const cartelera = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle} >
            <Stack.Screen name='Cartelera' component={Cartelera}
                options={() => ({ headerLeft: () => <OpenDrawer color={'black'} /> })} />
        </Stack.Navigator>
    );
}

const headphones = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name='Headphones' component={Headphones}
                options={() => ({ headerLeft: () => <OpenDrawer color={'black'} /> })} />
        </Stack.Navigator>
    );
}

const movies = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name='Movies' component={Movies}
                options={() => ({ headerLeft: () => <OpenDrawer color={'black'} /> })} />
        </Stack.Navigator>
    );
}

const socials = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name='Socials' component={Socials}
                options={() => ({ headerLeft: () => <OpenDrawer color={'black'} /> })} />
        </Stack.Navigator>
    );
}

const directorio = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle} >
            <Stack.Screen name='Directorio' component={Directorio}
                options={() => ({ headerLeft: () => <OpenDrawer color={'black'} /> })} />
        </Stack.Navigator>
    );
}

const maps = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle} >
            <Stack.Screen name='Maps' component={Maps}
                options={() => ({ headerLeft: () => <OpenDrawer color={'black'} /> })} />
        </Stack.Navigator>
    );
}
const loginScreen = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle} >
            <Stack.Screen name='Login' component={LoginScreen}
                options={() => ({ headerLeft: () => <OpenDrawer color={'black'} /> })} />
            <Stack.Screen name='Chat' component={ChatApp}
                options={() => ({ headerLeft: () => <OpenDrawer color={'black'} /> })} />
        </Stack.Navigator>
    );
}

export { MainStackNavigator, request_ImgPicker, cartelera, headphones, movies, socials, directorio, maps, loginScreen };

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
    headerStyle: {  backgroundColor: "#984B3B", },
    headerTintColor: "white",
    headerBackTitle: "Back",
    headerLeftContainerStyle: { paddingLeft: 10 },
    headerRight: () => <Text style={{ color: '#9AC4F8' }} > </Text>
};