import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import GooglePlacesInput from './MapsComponent/GooglePlacesInput';
import Mapa from './MapsComponent/Mapa';

export default function Maps() {
    const [region, setRegion] = useState(
        {
            latitude: 19.432806,
            longitude: -99.133159,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003,
        },
    );

    const getCoordsFromName = async (loc) => {
        updateState({
            latitude: loc.lat,
            longitude: loc.lng,
        })
    }

    function updateState(location) {
        setRegion({
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003,
        });
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, flexGrow: 1 }}>
                <Mapa
                    ubicacionInicial={region}
                />
            </View>
            <View style={{ position: 'absolute', left: 0, right: 0 }}>
                <GooglePlacesInput
                    notifyChange={(loc) => getCoordsFromName(loc)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});