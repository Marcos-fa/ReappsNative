import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native';
const { width, height } = Dimensions.get('window');
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { AppTextinput } from '../../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class SignIn extends Component {
    state = { email: '', password: '' };

    validata = () => {
        const { email, password } = this.state;
        if (email !== '') {
            if (password !== '') {
              AsyncStorage.getItem('userdata', (err, data) => {
                const Userdata = JSON.parse(data);
                if (Userdata !== null) {
                  if (email === Userdata.email) {
                    if (password === Userdata.password) {
                      this.props.navigation.replace('Home');
                    } else {
                      alert('Password is wrong');
                    }
                  } else {
                    alert('Invalid email');
                  }
                } else {
                  console.warn('no data');
                }
              });
            } else {
              alert('Password is Required');
            }
          } else {
            alert('Email is Required');
          }
    }

    render() {
        return (
            <View style={styles.Container}>
                <KeyboardAwareScrollView>
                    {/* top */}
                    <View style={styles.bgContainer}>
                        <AppTextinput
                            name={'Email'}
                            onChangeText={(email) => this.setState({ email })}
                        />
                        <AppTextinput
                            name={'Password'}
                            password={true}
                            onChangeText={(password) => this.setState({ password })}
                        />
                        <TouchableOpacity style={styles.ftxtContainer}>
                            <Text style={styles.ftxt}>Forgot Password ?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardButtons} onPress={() => this.validata()} >
                            <Text style={styles.button}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    {/* bottom */}
                    <View style={styles.bottomContainer}>
                        <View style={styles.BtoomContainer}>
                            <Text style={styles.atxt}>Don't have an Account? </Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('Sign Up');
                            }}
                            style={styles.SContainer}>
                            <Text style={styles.stxt}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
    },
    bgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: h('10%'),
        // backgroundColor: 'red',
        width: width,
        height: (height * 0.7),
    },
    ftxtContainer: {
        marginRight: (height * 0.27),
        marginTop: (height * 0.02),
    },
    ftxt: {
        color: '#984B3B',
        fontSize: (height * 0.022),
    },
    bottomContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    BtoomContainer: {
        // backgroundColor: 'gold',
        height: (height * 0.07),
        width: '35%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    SContainer: {
        // backgroundColor: 'green',
        height: (height * 0.07),
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    atxt: {
        color: 'black',
        fontSize: (height * 0.02),
    },
    stxt: {
        color: '#984B3B',
        fontSize: (height * 0.02),
        fontWeight: 'bold',
    },
    cardButtons: {
        backgroundColor:'white',
        width: '50%',
        height: (height * 0.06),
        borderRadius: (height * 0.07),
        overflow: 'hidden',
        marginTop: (height * 0.02)
    },
    button: {
        width: '100%',
        height: '100%',
        justifyContent:'center',
        alignItems: 'center',
        
        color: 'white',
        fontWeight: 'bold',
        fontSize: (height * 0.025),
        textAlign: 'center',
        padding: 8,
        backgroundColor: '#984B3B',
    },
});

