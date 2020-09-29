import React, { useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const Mapa = (props) => {
  const [mapReady, setMapReady] = useState(false);
  const _map = React.useRef(null);


  useEffect(() => {
    {mapReady &&
      _map.current.animateToRegion(props.ubicacionInicial, 350);
      console.log('Effect ')
    }
  }, [props.ubicacionInicial]);

  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle}
        ref={_map}
        initialRegion={props.ubicacionInicial}
        onLayout={() => setMapReady(true)}

      // animateToCoordinate={this.props.ubicacionInicial}

      //onRegionChangeComplete={(reg) => this.props.onRegionChange(reg)}
      />
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
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Mapa;