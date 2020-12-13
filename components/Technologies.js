import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Home, RequestImagePicker, Cartelera, Directorio } from "../datos/technologies";

export default class Technologies extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    //console.log(this.props.navigation.state.routeName); 
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
        <FlatList
          data={Cartelera}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={({ item }) => (
            <Text style={{ paddingTop: 24 }} >{item.technology}</Text>
          )}
        />
      </View>
    );
  }
}
