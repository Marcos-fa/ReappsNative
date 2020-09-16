import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'

export default function Request() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [image, setImage] = useState(null);



    const getPermissionAsync = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permisions to make this work!');
            }
        }
    };

    useEffect(() => {
        //getPermissionAsync();
        fetch('https://reactnative.dev/movies.json')
            .then((response) => response.json())
            .then((json) => setData(json.movies))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);


    const _pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                setImage(result.uri);
            }
            console.log(result);
        } catch (E) {
            console.log(E);
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.request} >
                <Text style={{ fontSize: 40, textAlign:'center' }} >Request View</Text>
                {isLoading ? <ActivityIndicator /> : (
                    <FlatList
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <Text style={{ textAlign: 'center', paddingTop: 24 }} >{item.title},{item.releaseYear}</Text>
                        )}
                    />
                )}
            </View>
            <View style={styles.imageContainer}>
                <Button title='Pick an image from camera roll' onPress={() => _pickImage()} />
                {image && <Image style={styles.image} source={{ uri: image }} />}
                {/* <Button title='Image Picker' onPress={() => this.OpenImagePicker()} />  */}
            </View>

        </View>
    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    request:{
      flex:1,  
    },
    imageContainer: {
        backgroundColor: 'gray',
        flex: 1,
    },
    image:{
        width: '100%',
        height: '100%',
    }
});
