//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
const ColorScreen = () => {
    return (
        <View>
            <Button title='Color' />
            <View style={{ height: 100, width: 100, backgroundColor: randomRgb() }} />
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
