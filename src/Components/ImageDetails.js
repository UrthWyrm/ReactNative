//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const ImageDetails = props => {
    console.log(props);
        return (
            <View>
                <Image source={props.imageSource} />
                <Text>{props.title}</Text>
                <Text>Rating:{props.score}</Text>
            </View>
        );
    
}

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default ImageDetails;
