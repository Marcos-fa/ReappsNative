import React, { useEffect } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const Mapa = (props) => {
  const _map = React.useRef(null);

  useEffect(() => {
    _map.current.animateToRegion(props.ubicacionInicial, 350);
  });

  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle}
        ref={_map}
        initialRegion={props.ubicacionInicial}

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