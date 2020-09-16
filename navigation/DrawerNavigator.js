import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { MainStackNavigator, request_ImgPicker, cartelera, headphones, movies, socials, directorio} from "./StackNavigator";
import DrawerContentStyle from './DrawerContent';
const Drawer = createDrawerNavigator();

const bugerMenu = () =>{
    // this.props.navigation.openDrawer
    this.props.navigation.navigate('DrawerOpen');
}

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator initialRouteName='Home' drawerContent={ props => <DrawerContentStyle {...props} />}>
            <Drawer.Screen name="Home" component={MainStackNavigator} />
            {/* <Drawer.Screen name="Hello" component={hello} /> */}
            <Drawer.Screen name="Request Y ImgPicker" component={request_ImgPicker} />
            {/* <Drawer.Screen name="Fotos" component={fotos} /> */}
            <Drawer.Screen name='Cartelera' component={cartelera} />
            <Drawer.Screen name='Directorio' component={directorio} />
            <Drawer.Screen name='Headphones' component={headphones} />
            <Drawer.Screen name='Movies' component={movies} />
            <Drawer.Screen name='Socials' component={socials} />
        </Drawer.Navigator>
    );
}

export {DrawerNavigator, bugerMenu};