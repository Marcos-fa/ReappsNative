import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { AppTextinput } from '../../../components';
import AsyncStorage from '@react-native-community/async-storage';
var validator = require('email-validator');

export class SignUp extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmpassword: '',
    gender: '',
  };

  validate = () => {
    const {
      name,
      email,
      phone,
      password,
      confirmpassword,
    } = this.state;

    const emailCheck = validator.validate(this.state.email);
    if (emailCheck === true) {
      if (password !== '') {
        if (password.length > 8) {
          if (name !== '') {
            if (phone !== '') {
              if (confirmpassword !== '') {
                if (password === confirmpassword) {
                      const value = {
                        name: this.state.name,
                        email: this.state.email,
                        phone: this.state.phone,
                        password: this.state.password,
                        confirmpassword: this.state.confirmpassword,
                      };
                      AsyncStorage.setItem(
                        'userdata', JSON.stringify(value), () => {
                          this.props.navigation.navigate('Sign In');
                        }
                      )
                } else {
                  alert('Password and Cofirm password is not same');
                }
              } else {
                alert('Confirm password is Required');
              }
            } else {
              alert('Phone No is Required');
            }
          } else {
            alert('Name is Required');
          }
        } else {
          alert('Password should be of 8 Characters');
        }
      } else {
        alert('password is Required');
      }
    } else {
      alert("email is incorect")
    }

  }

  render() {
    return (
      <View style={styles.Container}>
        {/* top */}
        <KeyboardAwareScrollView>
          <View style={styles.topContainer}>
            <Text style={styles.gtxt}>Details</Text>

            <View style={styles.txtinputContainer}>
              <AppTextinput
                name={'Name'}
                onChangeText={(name) => this.setState({ name })}
              />
              <AppTextinput
                name={'Email'}
                onChangeText={(email) => this.setState({ email })}
              />
              <AppTextinput
                name={'Phone'}
                onChangeText={(phone) => this.setState({ phone })}
              />
              <AppTextinput
                name={'Password'}
                password={true}
                onChangeText={(password) => this.setState({ password })}
              />
              <AppTextinput
                name={'Confirm Password'}
                password={true}
                onChangeText={(confirmpassword) =>
                  this.setState({ confirmpassword })
                }
              />
            </View>
          </View>
          <View style={styles.midContainer}>
          </View>
          <View style={styles.btnview}>

            <TouchableOpacity style={styles.cardButtons} onPress={() => this.validate()} >
              <Text style={styles.button}>Sign Up</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', marginTop: (height * 0.02), justifyContent: 'space-around' }}>
              <View
                style={{
                  // backgroundColor: 'green',
                  width: '30%',
                  height: (height * 0.05),
                }}>
                <Text style={{ fontSize: (height * 0.02), color: 'black' }}>
                  Already a memeber ?
              </Text>
              </View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Sign In')}
                style={{
                  // backgroundColor: 'green',
                  height: (height * 0.05),
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: (height * 0.02),
                    fontWeight: 'bold',
                    color: '#984B3B',
                  }}>
                  Sign In
              </Text>
              </TouchableOpacity>
            </View>
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
  topContainer: {
    // backgroundColor: 'red',
    width: '100%',
    height: (height * 0.5),
  },
  midContainer: {
    // backgroundColor: 'yellow',
    width: '100%',
    height: (height * 0.2),
  },
  botmContainer: {
    // backgroundColor: 'tomato',
    width: '100%',
    height: (height * 0.3),
  },
  gtxt: {
    fontSize: (height * 0.025),
    fontWeight: 'bold',
    color: 'black',
    marginLeft: (height * 0.07),
    marginTop: (height * 0.01),
  },
  txtinputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    flexDirection: 'row',
    // backgroundColor: 'red',

    height: (height * 0.015),
  },
  img: {
    width: '50%',
    height: '100%',
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightColor: 'rgba(0,0,0,0.2)',
    borderRightWidth: (height * 0.01),
  },
  img2: {
    width: '50%',
    height: '100%',
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftColor: 'rgba(0,0,0,0.2)',
    borderLeftWidth: (height * 0.01),
  },
  imgs: {
    height: (height * 0.08),
    width: '100%',
    resizeMode: 'contain',
  },
  txtf: {
    fontSize: (height * 0.02),
    marginTop: (height * 0.015),
  },
  txtm: {
    color: '#000',
    fontSize: (height * 0.02),
    marginTop: (height * 0.015),
  },
  BotomContainerView: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  circle: {
    // backgroundColor: 'yellow',
    width: '10%',
    height: '20%',
    borderRadius: (height * 0.1),
    marginTop: (height * 0.03),
    marginLeft: (height * 0.02),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: (height * 0.01),
    borderColor: 'rgba(0,0,0,0.3)',
  },
  txta: {
    fontSize: (height * 0.02),
    // color: this.state.blood !== '' ? 'white' : 'black',
  },
  BottomContainerView: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    marginTop: -(height * 0.2),
    marginLeft: (height * 0.06),
    // justifyContent: 'center',
  },
  btnview: {
    // backgroundColor: 'red',
    width: '100%',
    height: (height * 0.2),
    alignItems: 'center',
    marginTop: -(height * 0.05),
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
});