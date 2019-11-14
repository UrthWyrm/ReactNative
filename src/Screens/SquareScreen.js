//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../Components/ColorCounter';


// create a component

const COLOR_INCREMENT = 10;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {
        // color === 'red', 'green', 'blue'
        // change === +15, -15
        switch (color) {
            case 'red':
            red + change > 255 || red + change < 0 ? null : setRed(red + change);
            return;
            case 'blue':
            blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
            return;
            case 'green':
            green + change > 255 || green + change < 0 ? null : setGreen(green + change);
            return;
        }
    };

    console.log(red);
    console.log(green);
    console.log(blue);


    return (
        <View>
            <ColorCounter onIncrease={() => setColor('red', COLOR_INCREMENT)} onDecrease={() => setColor('red' -1 * COLOR_INCREMENT)} color="Red" />
            <ColorCounter onIncrease={() => setColor('green', COLOR_INCREMENT)} onDecrease={() => setGreen('green' -1 * COLOR_INCREMENT)} color="Green" />
            <ColorCounter onIncrease={() => setColor('blue', COLOR_INCREMENT)} onDecrease={() => setBlue('blue' -1 * COLOR_INCREMENT)} color="Blue" />
            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
        </View>
    );
}

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default SquareScreen;
