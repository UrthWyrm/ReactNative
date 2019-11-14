//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

// create a component
const Home = ({ navigation }) => {
        return (
            <View>
                <Text style={styles.container}>Getting started with React Native!</Text>
                <Text style={styles.subHeaderStyle}>My name is { myName }</Text>
                <Button
                    onPress={() => navigation.navigate('List')} 
                    title="Go To List Demo"/>
                <Button
                    onPress={() => navigation.navigate('Image')} 
                    title="Go To Image Demo"/>
                <TouchableOpacity onPress={() => console.log('List Pressed')}>
                    <Text>Go To List Demo</Text>
                </TouchableOpacity>
                <Button
                    onPress={() => navigation.navigate('Counter')} 
                    title="Go To Counter"/>
                <Button
                    onPress={() => navigation.navigate('Color')} 
                    title="Go To Color"/>
                <Button
                    onPress={() => navigation.navigate('Square')} 
                    title="Go To Square"/>
            </View>
        );
    
}

// Define name
const myName = 'Carl';

// define your styles
const styles = StyleSheet.create({
    container: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

//make this component available to the app
export default Home;
