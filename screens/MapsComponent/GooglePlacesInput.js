import React, { useState } from 'react';
import { GooglePlacesAutocomplete, Alert } from 'react-native-google-places-autocomplete';
import { View, StyleSheet, Text, Modal, TouchableHighlight, TextInput } from 'react-native';

const GooglePlacesInput = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [apiKey, setApiKey] = useState("");
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        props.notifyChange(details.geometry.location);
      }}
      query={{
        key: apiKey,
        language: 'es',
      }}
      //onFail={error => console.error(error)}
      onFail={() => setModalVisible(true)}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>It is necessary a Api Key for this function </Text>
            <TextInput style={styles.input}
              placeholder="Api Key"
              onChangeText={(key) => { setApiKey(key); }}
              value={apiKey}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "red" }}
                onPress={() => { setModalVisible(!modalVisible), setApiKey(""); }}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => { setModalVisible(!modalVisible); }}
              >
                <Text style={styles.textStyle}>Add</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    </GooglePlacesAutocomplete>
  );
};

export default GooglePlacesInput;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    width: '45%',
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    textAlign: "center"
  },
  input: {
    marginVertical: 22,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#bab7c3',
    borderRadius: 30,
    paddingHorizontal: 16,
    color: '#514E5a',
    fontWeight: "600"
  },
});