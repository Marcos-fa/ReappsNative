import * as React from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList, Image, Dimensions, Animated, TouchableOpacity, Platform } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons'
import { getMovies } from '../datos/Movies/api';
import Genres from '../datos/Movies/Genres';
import Rating from '../datos/Movies/Rating';
import MaskedView from '@react-native-community/masked-view';
import { useNavigation } from '@react-navigation/native';

import Svg, { Rect } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { Extrapolate } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

const SPACING = 10;
const ITEM_SIZE = Platform.IS === 'ios' ? width * 0.72 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const BACKDROP_HEIGHT = height * 0.65;
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const Loading = () => (
    <View style={styles.loadingContainer}>
        <Text style={styles.paragraph}>Loading...</Text>
    </View>
);

const Backdrop = ({ movies, scrollX }) => {
    return <View style={{ height: height * 0.65, width, position: 'absolute' }}>
        <FlatList
            data={movies.reverse()}
            keyExtractor={(item) => item.key + '-backdrop'}
            removeClippedSubviews={false}
            contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
            renderItem={({ item, index }) => {
                if (!item.backdrop) {
                    return null;
                }
                const translateX = scrollX.interpolate({
                    inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
                    outputRange: [0, width],
                    // extrapolate:'clamp'
                });
                return (
                    <Animated.View
                        removeClippedSubviews={false}
                        style={{ position: 'absolute', width: translateX, height, overflow: 'hidden' }}
                    >
                        <Image
                            source={{ uri: item.backdrop }}
                            style={{
                                width,
                                height: BACKDROP_HEIGHT,
                                position: 'absolute'
                            }}
                        />
                    </Animated.View>
                );
            }}
        />
        <LinearGradient
            colors={['rgba(0, 0, 0, 0)', 'white']}
            style={{
                height: BACKDROP_HEIGHT,
                width,
                position: 'absolute',
                bottom: 0,
            }}
        />
    </View>
}

export default function Movies() {
    const navigation = useNavigation();
    const [movies, setMovies] = React.useState([]);
    const scrollX = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
        const fetchData = async () => {
            const movies = await getMovies();
            // Add empty items to create fake space
            // [empty_item, ...movies, empty_item]
            setMovies([{ key: 'empty-left' }, ...movies, { key: 'empty-right' }]);
        };

        if (movies.length === 0) {
            fetchData(movies);
        }
    }, [movies]);

    if (movies.length === 0) {
        return <Loading />;
    }
    return (
        <View style={styles.container}>
            <Backdrop movies={movies} scrollX={scrollX} />
            <StatusBar hidden />
            <Animated.FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ alignItems: 'center' }}
                snapToInterval={ITEM_SIZE}
                snapToAlignment='start'
                decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
                renderToHardwareTextureAndroid
                bounces={false}
                data={movies}
                keyExtractor={(item) => item.key.toString()}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
                scrollEventThrottle={16}
                renderItem={({ item, index }) => {
                    if (!item.poster) {
                        return <View style={{ width: EMPTY_ITEM_SIZE }} />;
                    }
                    const inputRange = [
                        (index - 2) * ITEM_SIZE,
                        (index - 1) * ITEM_SIZE,
                        index * ITEM_SIZE,
                    ];
                    const translateY = scrollX.interpolate({
                        inputRange,
                        outputRange: [100, 50, 100],
                        extrapolate: 'clamp',
                    });

                    return (
                        <View style={{ width: ITEM_SIZE }} >
                            <Animated.View style={{
                                marginHorizontal: SPACING,
                                padding: SPACING * 2,
                                alignItems: 'center',
                                backgroundColor: 'white',
                                borderRadius: 34,
                                transform: [{ translateY }],
                            }} >
                                <Image
                                    source={{ uri: item.poster }}
                                    {...console.log(item.poster)}
                                    style={styles.posterImage}
                                />
                                <Text style={{ fontSize: 24 }} numberOfLines={1}>{item.title}</Text>
                                <Rating rating={item.rating} />
                                <Genres genres={item.genres} />
                                <Text style={{ fontSize: 12 }} numberOfLines={3} > {item.description} </Text>
                            </Animated.View>

                        </View>
                    );

                }}

            />
            <TouchableOpacity style={styles.bugerMenu} onPress={() => navigation.toggleDrawer()} ><FontAwesome5 name='bars' size={24} color='#161924' /></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bugerMenu: {
        position: 'absolute',
        top: 40,
        right: 20,
    },
    posterImage: {
        width: '100%',
        height: ITEM_SIZE * 1.2,
        resizeMode: 'cover',
        borderRadius: 24,
        margin: 0,
        marginBottom: 10,
    },
});