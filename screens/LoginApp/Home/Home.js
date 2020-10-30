import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('window');
import AsyncStorage from '@react-native-community/async-storage';

export class Home extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
    }

    componentDidMount = () => {
        AsyncStorage.getItem('userdata', (err, data) => {
            const Userdata = JSON.parse(data);
            this.setState({
                name: Userdata.name,
                email: Userdata.email,
                phone: Userdata.phone
            })
        });
    }

    render() {
        return (
            <ImageBackground style={{width:'100%', height:'100%'}} source={require('../../../assets/Coffe.jpg')} >
            <View style={styles.container} >
                
                <View style={styles.cardContainer} >
                    <View style={{}}>
                        <View style={styles.imgContainer} >
                            <ImageBackground style={styles.imgContainer} imageStyle={{ borderRadius: 50 }} source={require('../../../assets/LoginApp/angry-default-user.png')} >
                                <Image style={styles.imgContainer} source={require('../../../assets/LoginApp/default-user.png')} />
                            </ImageBackground>
                        </View>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'space-around' }} >
                        <Text style={styles.info} >Name: {this.state.name} </Text>
                        <Text style={styles.info} >Email: {this.state.email} </Text>
                        <Text style={styles.info} >Phone: {this.state.phone} </Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.cardButtons} onPress={() => this.props.navigation.navigate('LoginApp')} >
                    <Text style={styles.button}>Sign Out</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 15,
        backgroundColor: 'rgba(255,255,255,0.2)',
        
    },
    cardContainer: {
        padding: 30,
        borderRadius: 20,
        flexGrow: 1,
        borderWidth: 2,
        borderColor: 'cornflowerblue',
        backgroundColor: 'rgba(255,255,255,0.9)',
    },
    imgContainer: {
        alignSelf: 'center',
        borderRadius: 50,
        width: 100,
        height: 100,
    },
    cardButtons: {
        backgroundColor: 'white',
        alignSelf: 'center',
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
        backgroundColor: 'cornflowerblue',
    },
    info: { 
        fontSize: 20, 
        borderRadius:50, 
        padding: 15,
    }
});
