//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
const ColorCounter = ({ color, onIncrease, onDecrease }) => {
        return (
            <View>
               <Text>{color}</Text>
                <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
                <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
            </View>
        );
}

// define your styles
const styles = StyleSheet.create({
});

//make this component available to the app
export default ColorCounter;
