import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/Welcome';
import Technologies from '../components/Technologies';
import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

const homeScreenTab = () => {
    return (
        <Tab.Navigator shifting={true} inactiveColor={'black'} activeColor={'#fff'} >
            <Tab.Screen name='Home' component={HomeScreen}
               activeColor = '#984B3B'
               options={{
                    tabBarLabel: 'Home',
                    tabBarColor:'#984B3B',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={"white"} backgroundColor={"blue"} size={26} />
                    ),
                }} />
            <Tab.Screen name='Tech Used' component={Technologies} 
                options={{
                    tabBarColor:'#984B3B',
                    tabBarIcon: ({ color }) => (
                    <FontAwesome5 name='bars' size={24} color={'#fff'} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export { homeScreenTab }; 