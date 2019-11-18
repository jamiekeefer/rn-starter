import React from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native'


const ListScreen = () => {
    const friends = [
        {name: 'Friend 1', age: 10}, // could create key here in stead of key Extractor
        {name: 'Friend 2', age: 20}, // example: {name: 'Friend 2', key: '2'}
        {name: 'Friend 3', age: 30},
        {name: 'Friend 4', age: 40},
        {name: 'Friend 5', age: 50},
        {name: 'Friend 6', age: 60},
        {name: 'Friend 7', age: 70},
        {name: 'Friend 8', age: 80},
        {name: 'Friend 9', age: 90},
        {name: 'Friend 10', age: 100}
    ]

    return (
        <FlatList
        //horizontal={true}
        //showsHorizontalScrollIndicator={false}
        keyExtractor={(friends) => friends.name }
            data= {friends} 
            renderItem ={({item}) => {
                // element === {item: 'Friend 1' }, index: 0 }
                // item.name === Friend 1
                return <Text style={styles.textStyle}>{item.name} - Age: {item.age}</Text>;
            }}
            
        />
    )
}; 

const styles = StyleSheet.create ({
    textStyle: {
        marginVertical: 20
    }

});

export default ListScreen