import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainStackNavigator, request_ImgPicker, cartelera, headphones, movies, socials, directorio, maps, loginScreen} from "./StackNavigator";
import DrawerContentStyle from './DrawerContent';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator initialRouteName='Home' drawerContent={ props => <DrawerContentStyle {...props} />}>
            <Drawer.Screen name="Home" component={MainStackNavigator} />
            <Drawer.Screen name="Request Y ImgPicker" component={request_ImgPicker} />
            <Drawer.Screen name='Cartelera' component={cartelera} />
            <Drawer.Screen name='Directorio' component={directorio} />
            <Drawer.Screen name='Headphones' component={headphones} />
            <Drawer.Screen name='Movies' component={movies} />
            <Drawer.Screen name='Socials' component={socials} />
            <Drawer.Screen name='Maps' component={maps} />
            <Drawer.Screen name='Chat' component={loginScreen} />
        </Drawer.Navigator>
    );
}

export {DrawerNavigator};