import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'
import { TouchableOpacity } from 'react-native-gesture-handler';

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
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
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
                <Text style={{ fontSize: 40, textAlign: 'center' }} >Request View</Text>
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
                <TouchableOpacity onPress={() => _pickImage()} style={{ backgroundColor: 'white', borderRadius: 20, width:240, alignSelf:'center', margin:10}}>
                    <Text style={{padding:10, textAlign: 'center'}}> Touch to pick up a photo </Text>
                </TouchableOpacity >
                    {image && <Image style={styles.image} source={{ uri: image }} />}
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
    request: {
        flex: 1,
    },
    imageContainer: {
        flex: 1,
        backgroundColor:'gray'
    },
    image: {
        width: '100%',
        height: '100%',
    }
});
