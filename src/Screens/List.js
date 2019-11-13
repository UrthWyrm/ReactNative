//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const friends = [
    { name: 'Friend #1', age: 20, },
    { name: 'Friend #2', age: 45, },
    { name: 'Friend #3', age: 32, },
    { name: 'Friend #4', age: 27, },
    { name: 'Friend #5', age: 53, },
    { name: 'Friend #6', age: 30, },
];

// create a component
class List extends Component {
    render() {
        return (
            <FlatList 
                // horizontal = {true}
                // showsHorizontalScrollIndicator={false}
              keyExtractor = {(friend) => friend.name}
              data={friends}
               renderItem={({ item }) => {
                 return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
               }} 
            />
        );
    }
}


// define your styles
const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        borderWidth: 1,
        padding: 25
    }
});

//make this component available to the app
export default List;
