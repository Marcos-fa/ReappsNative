import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainStackNavigator, request_ImgPicker, cartelera, headphones, movies, socials, directorio, maps, loginScreen, loginApp } from "./StackNavigator";
import DrawerContentStyle from './DrawerContent';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName='Home' drawerContent={props => <DrawerContentStyle {...props} />}>
            <Drawer.Screen name="Home" component={MainStackNavigator} />
            {/* <Drawer.Screen name="Request Y ImgPicker" component={request_ImgPicker} /> */}
            <Drawer.Screen name='Peliculas' component={cartelera} />
            <Drawer.Screen name='Directorio' component={directorio} />
            <Drawer.Screen name='Audifonos' component={headphones} />
            <Drawer.Screen name='Peliculas v2' component={movies} />
            <Drawer.Screen name='Social' component={socials} />
            <Drawer.Screen name='Maps' component={maps} />
            <Drawer.Screen name='Chat' component={loginScreen} />
            <Drawer.Screen name='Login' component={loginApp} />
        </Drawer.Navigator>
    );
}

export { DrawerNavigator };