import React, { useState } from 'react';
import { Animated, StatusBar, View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import data from '../datos/dataStore';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
const LOGO_WIDTH = 220;
const LOGO_HEIGHT = 40;
const DOT_SIZE = 40;
const TICKER_HEIGHT = 40;
const CIRCLE_SIZE = width * 0.6;

const Item = ({ imageUri, heading, description, index, scrollX }) => {
    const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
    const inputRangeOpacity = [(index - 0.3) * width, index * width, (index + 0.3) * width];
    const scale = scrollX.interpolate({
        inputRange,
        outputRange: [0, 1, 0],
    });
    const translateXHeading = scrollX.interpolate({
        inputRange,
        outputRange: [width * 0.2, 0, -width * 0.2],
    });
    const translateXDescription = scrollX.interpolate({
        inputRange,
        outputRange: [width * 0.6, 0, -width * 0.6],
    });
    const opacity = scrollX.interpolate({
        inputRange: inputRangeOpacity,
        outputRange: [0, 1, 0],
    });

    return (
        <View style={styles.itemStyle} >
            <StatusBar style='auto' hidden />
            <Animated.Image
                source={imageUri}
                style={[
                    styles.imageStyle,
                    { transform: [{ scale: scale }] }
                ]}
            />
            <View style={styles.textContainer} >
                <Animated.Text style={[styles.heading, { opacity, transform: [{ translateX: translateXHeading }] }]} > {heading} </Animated.Text>
                <Animated.Text style={[styles.description, { opacity, transform: [{ translateX: translateXDescription }] }]} > {description} </Animated.Text>
            </View>

        </View>
    );
}

const Pagination = ({ scrollX }) => {
    const inputRange = [-width, 0, width];
    const translateX = scrollX.interpolate({
        inputRange,
        outputRange: [-DOT_SIZE, 0, DOT_SIZE],
    });
    return (
        <View style={styles.pagination} >
            <Animated.View
                style={[styles.paginationIndicator, { transform: [{ translateX }] }]} />
            {data.map((item) => {
                return (
                    <View key={item.key} style={styles.paginationDotContainer} >
                        <View style={[styles.paginationDot, { backgroundColor: item.color }]} />
                    </View>
                );
            })}

        </View>
    );
}

const Ticker = ({ scrollX }) => {
    const inputRange = [-width, 0, width]
    const translateY = scrollX.interpolate({
        inputRange,
        outputRange: [TICKER_HEIGHT, 0, -TICKER_HEIGHT],
    })
    return (
        <View style={styles.tickerContainer}>
            <Animated.View style={{ transform: [{ translateY }] }} >
                {data.map(({ type }, index) => {
                    return (<Text key={index} style={styles.tickerText} > {type} </Text>
                    );
                })}
            </Animated.View>
        </View>
    );
}

const Circle = ({ scrollX }) => {
    return (
        <View style={[StyleSheet.absoluteFillObject, styles.circleContainer]} >
            {data.map(({ color }, index) => {
                const inputRange = [(index - 0.55) * width, index * width, (index + 0.55) * width];
                const scale = scrollX.interpolate({
                    inputRange,
                    outputRange: [0, 1, 0],
                    extrapolate: 'clamp',
                });
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0, 0.2, 0],
                })
                return (
                    <Animated.View key={index} style={[styles.circle, { transform: [{ scale }], backgroundColor: color, opacity, }]} />
                );
            })}
        </View>
    );
}

export default function Headphone() {
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(true);
    const [currentId, setCurrentId] = useState(null);
    const scrollX = React.useRef(new Animated.Value(0)).current;

    return (
        <SafeAreaView style={styles.container} >
            <Circle scrollX={scrollX} />
            <Animated.FlatList
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={(item) => item.key}
                renderItem={({ item, index }) => (<Item  {...item} index={index} scrollX={scrollX} />)}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
            />
            <TouchableOpacity style={styles.burgerMenu} onPress={() => navigation.toggleDrawer()}><FontAwesome5 name='bars' size={24} color="#161924" /></TouchableOpacity>
            <Image source={require('../assets/headphones/ue_black_logo.png')} style={styles.logo} />
            <Pagination scrollX={scrollX} />
            <Ticker scrollX={scrollX} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    itemStyle: {
        width,
        height,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyle: {
        flex: 1,
        width: width * 0.75,
        height: height * 0.75,
        resizeMode: 'contain'
    },
    textContainer: {
        alignItems: 'flex-start',
        alignSelf: 'flex-end',
        flex: 0.5,
    },
    heading: {
        color: '#444',
        textTransform: 'uppercase',
        fontSize: 24,
        fontWeight: '800',
        letterSpacing: 2,
        marginBottom: 5,
    },
    description: {
        color: '#ccc',
        fontWeight: '600',
        textAlign: 'left',
        width: width * 0.75,
        marginRight: 10,
        fontSize: 16,
        lineHeight: 16 * 1.5,
    },
    logo: {
        opacity: 0.9,
        height: LOGO_HEIGHT,
        width: LOGO_WIDTH,
        resizeMode: 'contain',
        position: 'absolute',
        left: 10,
        bottom: 10,
        transform: [
            { translateX: -LOGO_WIDTH / 2 },
            { translateY: -LOGO_HEIGHT / 2 },
            { rotateZ: '-90deg' },
            { translateX: LOGO_WIDTH / 2 },
            { translateY: LOGO_HEIGHT / 2 }
        ]
    },
    pagination: {
        position: 'absolute',
        flexDirection: 'row',
        right: 20,
        bottom: 40,
        height: DOT_SIZE,
    },
    paginationDotContainer: {
        width: DOT_SIZE,
        justifyContent: 'center',
        alignItems: 'center',
    },
    paginationIndicator: {
        width: DOT_SIZE,
        height: DOT_SIZE,
        borderRadius: DOT_SIZE / 2,
        borderWidth: 2,
        borderColor: '#ddd',
        position: 'absolute',
    },
    paginationDot: {
        width: DOT_SIZE * 0.3,
        height: DOT_SIZE * 0.3,
        borderRadius: DOT_SIZE * 0.15,
    },
    tickerContainer: {
        position: 'absolute',
        top: 40,
        left: 20,
        overflow: 'hidden',
        height: TICKER_HEIGHT,
    },
    tickerText: {
        fontSize: TICKER_HEIGHT,
        lineHeight: TICKER_HEIGHT,
        textTransform: 'uppercase',
        fontWeight: 'bold',

    },
    circleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        position: 'absolute',
        top: '15%',
    },
    burgerMenu: {
        position: 'absolute',
        top: 40,
        right: 20,
    },
})