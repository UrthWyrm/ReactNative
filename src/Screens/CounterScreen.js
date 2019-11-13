//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
const CounterScreen = () => {
    // todo: fix this
    const [counter, setCounter] = useState(0);
        return (
            <View>
                <Button style={styles.buttons} title="Increase" onPress={() => {
                    //Don't do this!
                    // counter++;
                    setCounter(counter + 1);
                }}
                />
                <Button style={styles.buttons} title="Decrease" onPress={() => {
                    // counter--;
                    setCounter(counter - 1);
                }}
                />
                <Text>Current Count: {counter}</Text>
            </View>
        );
    
}

// define your styles
const styles = StyleSheet.create({
    buttons: {
        margin: 15
    }
});

//make this component available to the app
export default CounterScreen;
