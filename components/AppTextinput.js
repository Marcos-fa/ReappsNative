import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Dimensions} from 'react-native';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
const { width, height } = Dimensions.get('window');

export class AppTextinput extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <TextInput
          {...this.props}
          placeholder={this.props.name}
          style={styles.textInput}
          secureTextEntry={this.props.password}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    marginTop: (height * 0.01),
  },
  textInput: {
    backgroundColor: '#0001',
    width: (width * 0.85),
    height: (height * 0.08),
    borderRadius: (height * 0.1),
    paddingLeft: (height * 0.03),
  },
});
