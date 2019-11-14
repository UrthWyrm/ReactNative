//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

// create a component
const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    console.log(colors);

    return (
        <View>
            <Button title='Color' onPress={() => {
               setColors([...colors, randomRgb()])
            }}/>
            <FlatList
               keyExtractor={item => item}
               data={colors}
               renderItem={({ item }) => {
                   return (
                <View style={{ height: 100, width: 100, backgroundColor: randomRgb() }} />
                );
               }} />
        </View>
    );
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${blue}, ${green})`;
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default ColorScreen;
