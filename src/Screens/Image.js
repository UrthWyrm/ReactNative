//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetails from '../Components/ImageDetails';

// create a component
class Image extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageDetails title="Forest" imageSource={require('../../assets/forest.jpg')} score={'10'} />
                <ImageDetails title="Beach" imageSource={require('../../assets/beach.jpg')} score={'10'} />
                <ImageDetails title="Mountain" imageSource={require('../../assets/mountain.jpg')} score={'10'} />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default Image;
