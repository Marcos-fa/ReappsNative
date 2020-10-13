import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get('window');

export default class LoginScreen extends Component {
  state = {
    name: ""
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circle} />
        <View style={{ marginTop: 64 }} >
          <Image source={require('../../assets/chat.png')} style={{ width: 100, height: 100, alignSelf: 'center' }} />
        </View>
        <View style={{ marginHorizontal: 32 }}>
          <Text style={styles.header}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="username"
            onChangeText={name => {
              this.setState({ name });
            }}
            value={this.state.name} />
          <View style={{ alignItems: 'flex-end', marginTop: 64 }}>
            <TouchableOpacity style={styles.continue} onPress={() => this.props.navigation.navigate('Chat', { name: this.state.name })}>
              <Ionicons name="md-arrow-round-forward" size={24} color='#fff' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F7',
  },
  circle: {
    width: width * 2,
    height: width * 2.5,
    borderRadius: width * 2 / 2,
    backgroundColor: '#fff',
    position: 'absolute',
    left: -(width),
    top: -(width)
  },
  header: {
    fontWeight: "800",
    fontSize: 30,
    color: '#514e5a',
    marginTop: 32
  },
  input: {
    marginTop: 32,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#bab7c3',
    borderRadius: 30,
    paddingHorizontal: 16,
    color: '#514E5a',
    fontWeight: "600"
  },
  continue: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: '#9075E3',
    alignItems: "center",
    justifyContent: 'center'
  }
});
