import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { FontAwesome5 } from '@expo/vector-icons'
const { width, height } = Dimensions.get('window');

export class LoginWelcome extends Component {
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.imgContainer} >
                    <Image style={styles.img} source={require('../../../assets/Coffe2.jpg')} />
                </View>
                <View style={styles.loginContainer}>
                    <ImageBackground
                        style={styles.login}
                        resizeMode={'contain'}
                        source={require('../../../assets/login.png')}>
                        <Text style={styles.txt}>Register or Login</Text>
                    </ImageBackground>
                </View>
                <View style={styles.midleContainer}>
                    <View style={styles.emptyContainer}></View>
                    <TouchableOpacity style={styles.cardButtons} onPress={() => this.props.navigation.navigate('Sign In')} >
                        <Text style={styles.button}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardButtons} onPress={() => this.props.navigation.navigate('Sign Up')} >
                        <Text style={styles.button}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.bugerMenu} onPress={() => this.props.navigation.toggleDrawer()} ><FontAwesome5 name='bars' size={24} color='#161924' /></TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    imgContainer: {
        width: width,
        height: (height / 2),
    },
    img: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    loginContainer: {
        marginTop: -(height * 0.067),
        width: width,
        height: (height * 0.15)
    },
    login: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        color: 'black',
        fontSize: (height * 0.035),
        fontWeight: 'bold',
    },
    cardButtons: {
        backgroundColor: 'white',
        width: '50%',
        height: (height * 0.06),
        borderRadius: (height * 0.07),
        overflow: 'hidden',
        marginTop: (height * 0.02)
    },
    button: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',

        color: 'white',
        fontWeight: 'bold',
        fontSize: (height * 0.025),
        textAlign: 'center',
        padding: 8,
        backgroundColor: '#984B3B',
    },
    midleContainer: {
        width: '100%',
        height: (height * 0.4),
        alignItems: 'center',
    },
    emptyContainer: {
        height: '20%',
        width: width,
    },
    bugerMenu: {
        backgroundColor:'#fff',
        width:50,
        height:50,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        position: 'absolute',
        top: 40,
        right: 20,
    },
});