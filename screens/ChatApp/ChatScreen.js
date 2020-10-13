import React, { Component } from 'react';
import { Platform, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { GiftedChat } from "react-native-gifted-chat";
import Fire from '../../database/Fire';

export default class ChatScreen extends Component {
  state = {
    messages: []
  }

  get user() {
    console.log(this.props.route)
    return {
      _id: Fire.uid,
      name: this.props.route.params.name
    }
  }

  componentDidMount() {
    Fire.get(message =>
      this.setState(previous => ({
        messages: GiftedChat.append(previous.messages, message)
      }))
    );
  }

  componentWillUnmount() {
    Fire.off();
  }

  render() {
    const chat = <GiftedChat messages={this.state.messages} onSend={Fire.send} user={this.user} />;
    if (Platform.OS === 'android') {
      return (
        <KeyboardAvoidingView style={{ flex: 1 }} keyboardVerticalOffset={30} enabled >
          {chat}
        </KeyboardAvoidingView>
      );
    }
    return <SafeAreaView style={{ flex: 1 }}>{chat}</SafeAreaView>
  }
}