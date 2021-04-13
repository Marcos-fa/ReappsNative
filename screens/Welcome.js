import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text, Linking, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CreditsStyles from "../Styles/CreditsStyles";

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style='auto' hidden />
      <TouchableOpacity style={{ width: '100%', height: '100%' }} onPress={() => navigation.toggleDrawer()}>
        <Image style={styles.image} source={require('../assets/Welcome.jpg')} />
      </TouchableOpacity>
      {/* <TouchableOpacity style={{ ...CreditsStyles.creditsButton, position: 'absolute', bottom: 30, right: 30 }}
        onPress={() => Linking.openURL('https://create.piktochart.com/output/51495882-marcos-cv-english') } >
        <Text style={{ fontSize: 20, fontWeight: 'bold'}} >My CV</Text>
      </TouchableOpacity> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
