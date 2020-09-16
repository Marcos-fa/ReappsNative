import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

export default DrawerContentStyle = props => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/Coffe2.jpg')} />
            <DrawerContentScrollView  {...props}>
                <DrawerItemList style={{ flexGrow: 1 }} {...props} />
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5F5F5',
    },
    image: {
        width: '100%',
        height: '22%',
    },
})