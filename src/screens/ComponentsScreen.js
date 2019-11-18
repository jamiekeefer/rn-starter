import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {

    const greeting = "Another piece in the view as variable"
    return (
        <View>
            <Text style = {styles.textStyle}>This is the Components Screen</Text>
            <Text style = {styles.anotherStyle}>{greeting}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    anotherStyle: {
        fontSize: 25
    }    
});

export default ComponentsScreen;