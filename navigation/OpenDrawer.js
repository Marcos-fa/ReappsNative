import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function OpenDrawer() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={{paddingLeft: 10}} onPress={() => navigation.toggleDrawer()} >
            <FontAwesome5 name='bars' size={24} color="black" />
        </TouchableOpacity>
    );
}