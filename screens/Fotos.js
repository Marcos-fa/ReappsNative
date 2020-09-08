import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, Image, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
// import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'

// import ImagePicker from 'react-native-image-crop-picker';


export default class Fotos extends React.Component {
    state = {
        image: null,
    };

    // OpenImagePicker = () => {
    //     ImagePicker.openPicker({
    //         multiple: true,
    //         waitAnimationEnd: false,
    //         includeExif: true,
    //         forceJpg: true,
    //         maxFiles: 5,
    //         compressImageQuality: 0.8,
    //         mediaType:'photo'
    //     }).then(images => {
    //         images.map((item, index) => {
    //             console.log(JSON.stringify(item));
    //         })
    //     });
    // }

    render() {
        let { image } = this.state;
        return (
            <View style={styles.container}>
                <Text>Hello Wolrd!</Text>
                <Button title='Pick an image from camera roll' onPress={this._pickImage} />
                { image && <Image source={{uri: image }} style={{ width:200, height:200 }} /> }
                {/* <Button title='Image Picker' onPress={() => this.OpenImagePicker()} /> */}
                <StatusBar style="auto" />
            </View>
        );
    }

    componentDidMount(){
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Platform.OS !== 'web') {
            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permisions to make this work!');
            }
        }
    };

    _pickImage = async () => {
        try{
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4,3],
                quality: 1,
            });
            if (!result.cancelled) {
                this.setState({image: result.uri});
            }
            console.log(result);
        }catch(E){
            console.log(E);
        }
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
