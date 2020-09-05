import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { MainStackNavigator, hello, request } from "./StackNavigator";

const Drawer = createDrawerNavigator();

const bugerMenu = () =>{
    // this.props.navigation.openDrawer
    this.props.navigation.navigate('DrawerOpen');
}

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={MainStackNavigator} />
            <Drawer.Screen name="Hello" component={hello} />
            <Drawer.Screen name="Request" component={request} />
        </Drawer.Navigator>
    );
}

export {DrawerNavigator, bugerMenu};