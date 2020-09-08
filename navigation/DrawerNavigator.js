import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { MainStackNavigator, hello, request, fotos, cartelera } from "./StackNavigator";

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
            <Drawer.Screen name="Fotos" component={fotos} />
            <Drawer.Screen name='Cartelera' component={cartelera} />
        </Drawer.Navigator>
    );
}

export {DrawerNavigator, bugerMenu};