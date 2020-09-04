import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

export default function Request() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        fetch('https://reactnative.dev/movies.json')
            .then((response) => response.json())
            .then((json) => setData(json.movies))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={styles.movies}>
            <Text>Request View</Text>
            {isLoading ? <ActivityIndicator/>:(
                <FlatList
                    data={data}
                    keyExtractor = {({id}, index) =>id}
                    renderItem={({item}) =>(
                    <Text>{item.title},{item.releaseYear}</Text>
                    )}
                />
            )}
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
    movies: {
        flex: 1,
        padding: 24
    }
});
