import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, ImageBackground, Image, TouchableOpacity, Linking } from 'react-native';
import { Component } from 'react';
import { Transition, Transitioning } from 'react-native-reanimated';

const transition = (
    <Transition.Together>
        <Transition.In type='fade' durationMs={200} />
        <Transition.Change />
        <Transition.Out type='fade' durationMs={200} />
    </Transition.Together>
)

export default function Cartelera() {
    const ref = React.useRef();

    const DATA = [

        {
            id: "1",
            title: "Star Wars",
            releaseYear: "1977",
            poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSKTW3jUyO26OzUfoQnFRdIcH_9NgxuU2yzeFUMmJWqBCtPP9lF",
            trailer: "https://youtu.be/1g3_CFmnU7k",
        },
        {
            id: "2",
            title: "Back to the Future",
            releaseYear: "1985",
            poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR80666e4S2B6AgopyUP0aybHhpFGBNbWf8oYtNWlm0rQ_tf8gd",
            trailer: "https://youtu.be/qvsgGtivCgs",
        },
        {
            id: "3",
            title: "The Matrix",
            releaseYear: "1999",
            poster: "https://r3.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic3.abc.es%2Fmedia%2Fpeliculas%2F000%2F000%2F818%2Fmatrix-1.jpg&nuevoancho=690&medio=abc",
            trailer: "https://youtu.be/vKQi3bBA1y8",
        },
        {
            id: "4",
            title: "Inception",
            releaseYear: "2010",
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmZhlq0-YCcK0IQ6FSP82dIcSXB8i9Pd7j2iPDW66prHWaPNfu",
            trailer: "https://youtu.be/YoHD9XEInc0",
        },
        {
            id: "5",
            title: "Interstellar",
            releaseYear: "2014",
            poster: "https://www.ecartelera.com/carteles/3800/3851/003.jpg",
            trailer: "https://youtu.be/zSWdZVtXT7E",
        },

    ];

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [currentId, setCurrentid] = useState(null);

    useEffect(() => {
        fetch('https://reactnative.dev/movies.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);




    const renderItem = ({ item }) => {

        return (
            <TouchableOpacity
                style={styles.cardContainer}
                onPress={() => {
                    ref.current.animateNextTransition();
                    setCurrentid(item.id === currentId ? null : item.id)
                }}
                activeOpacity={0.9}>
                <View style={styles.card}>
                <View style={styles.cardtop}>
                    <ImageBackground style={styles.cardImageBackground}>
                        <Image style={styles.cardImage} source={{ uri: item.poster }} />
                    </ImageBackground>
                    <View style={styles.cardRight} >
                        <Text style={{ fontWeight: 'bold' }} >Nombre:</Text>
                        <Text>{item.title},{item.releaseYear}</Text>
                    </View>
                </View>
                {item.id === currentId && (
                    <View style={styles.cardButton} >
                        <TouchableOpacity style={styles.cardButton} onPress={() => Linking.openURL(item.trailer)} >
                            <Text style={styles.button} >Trailer</Text>
                        </TouchableOpacity>
                    </View>
                )}
                </View>

            </TouchableOpacity>
        );

    }



    return (
        <Transitioning.View
            ref={ref}
            transition={transition}>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={DATA}
                    keyExtractor={({ id }, index) => id}
                    renderItem={renderItem}
                />
            )}
        </Transitioning.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingTop:10,
    },
    cardContainer:{
        marginHorizontal:10,
        flexGrow:1
    },
    card: {
        flexGrow: 1,
        backgroundColor: 'white',
        borderRadius: 6,
        marginBottom: 10,
    },
    cardtop: {
        flexDirection: 'row',
        margin:10,
    },
    cardLeft: {
        flex: 1,

    },
    cardRight: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: '10%',
    },
    cardImageBackground: {
        width: 100,
        height: 120,
        borderRadius: 20,
        alignSelf: 'center',
    },
    cardImage: {
        width: 100,
        height: 120,
        borderRadius: 20,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: '#49B1E9'
    },
    cardButton: {
        paddingTop: 5,
        paddingBottom:10,
    },
    button: {
        alignSelf: 'center',
        textAlign: 'center',
        width: '60%',
        padding: 8,
        backgroundColor: '#49B1E9',
        borderRadius: 10,
        color: 'white',
        fontWeight: 'bold',
    }
});