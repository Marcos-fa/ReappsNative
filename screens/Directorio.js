import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, ImageBackground, Image, TouchableOpacity, Linking } from 'react-native';
import data from '../datos/directorio';
import { Transition, Transitioning } from 'react-native-reanimated';

const transition = (
    <Transition.Together>
        <Transition.In type='fade' durationMs={200} />
        <Transition.Change />
        <Transition.Out type='fade' durationMs={200} />
    </Transition.Together>
)

export default function Directorio() {
    const ref = React.useRef();
    const [currentIndex, setCurrentIndex] = useState(null);
     const [isLoading, setLoading] = useState(true);
    // const [papa, setPapa] = useState({});

    useEffect(() => {
        fetch('https://reactnative.dev/movies.json')
            .then((response) => response.json())
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    const renderItem = ({ item }) => {
        //05b9b5
        return (
            <TouchableOpacity
                style={styles.cardContainer}
                onPress={() => {
                    ref.current.animateNextTransition();
                    setCurrentIndex(item.id === currentIndex ? null : item.id)
                }}
                activeOpacity={0.9}>
                <View style={styles.card}>
                    <View style={styles.cardtop}>
                        <ImageBackground style={styles.cardImageBackground}>
                            <Image style={styles.cardImage} source={{ uri: item.imagen }} />
                        </ImageBackground>
                        <View style={styles.cardRight} >
                            <Text style={{ fontWeight: 'bold' }} > {item.titulo} </Text>
                            <Text>{item.descripcion}</Text>
                        </View>
                    </View>
                    {item.id != "1" && item.id === currentIndex && (
                        <View style={styles.cardButton} >
                            <TouchableOpacity style={styles.cardButton} onPress={() => Linking.openURL('mailto:' + item.correo)} >
                                <Text style={styles.button}>Enviar Correo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cardButton} onPress={() => makeCall(item.telefono)} >
                                <Text style={styles.button}>Llamar </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    {item.id == "1" && item.id === currentIndex && (
                        <View style={styles.cardButtons} >
                            <TouchableOpacity style={styles.cardButtons} onPress={() => Linking.openURL(item.fblink)} >
                                <Text style={styles.CompanyButton}> {item.facebook} </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cardButtons} onPress={() => makeCall(item.twlink)} >
                                <Text style={styles.CompanyButton}>{item.twitter} </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cardButtons} onPress={() => makeCall(item.inlink)} >
                                <Text style={styles.CompanyButton}>{item.instagram} </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    {item.id != currentIndex &&(<Text style={{color:'gray', alignSelf:'flex-end', bottom:10, right:10, fontSize:13}} >Presiona para mas información</Text>)}
                </View>

            </TouchableOpacity>
        );

    }

    const makeCall = (telefono) => {
        if (Platform.OS === 'android') {
            telefono = 'tel:${' + telefono + '}';
        } else {
            telefono = 'telprompt:${' + telefono + '}';
        }
        return (
            Linking.openURL(telefono)
        );
    }

    return (
        <Transitioning.View
            ref={ref}
            transition={transition}>
                 {isLoading ? <ActivityIndicator /> : (
            <FlatList
                data={data}
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
        paddingTop: 10,
    },
    cardContainer: {
        marginHorizontal: 10,
        flexGrow: 1
    },
    card: {
        flexGrow: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10,
    },
    cardtop: {
        flexDirection: 'row',
        margin: 10,
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
        height: 100,
        borderRadius: 160,
        alignSelf: 'center',
    },
    cardImage: {
        width: 100,
        height: 100,
        borderRadius: 160,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: '#05b9b5'
    },
    cardButton: {
        paddingTop: 5,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        width: '65%',
        alignSelf: 'center',
        textAlign: 'center',
        padding: 8,
        backgroundColor: '#05b9b5',
        borderRadius: 10,
        color: 'white',
        fontWeight: 'bold',
    },
    cardButtons: {
        paddingTop: 5,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    CompanyButton: {
        width: '55%',
        alignSelf: 'center',
        textAlign: 'center',
        padding: 8,
        backgroundColor: '#05b9b5',
        borderRadius: 10,
        color: 'white',
        fontWeight: 'bold',
    }
});