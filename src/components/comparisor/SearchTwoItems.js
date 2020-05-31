import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import CompareTwoItems from './CompareTwoItems';

class SearchTwoItems extends Component
{
    state = {
        searchFirstItem:'',
        searchSecondItem:''
    };

    updateSearch = search => {
        this.setState({ searchFirstItem });
        this.setState({ searchSecondItem });

        console.warn("SearchFirstText: "+this.state.searchFirstItem);
        console.warn("SearchSecondText: "+this.state.searchSecondItem);
    };

    render(){
        const { searchFirstItem } = this.state;
        const { searchSecondItem } = this.state;

        return(
            <View>
                <SearchBar
                    placeholder="FirstItem..."
                    onChangeText={this.updateSearch}
                    value={searchFirstItem}
                />
                <Text style = {styles.textStyle}>
                    VS
                </Text>

                <SearchBar
                    placeholder="SecondItem..."
                    onChangeText={this.updateSearch}
                    value={searchSecondItem}
                />
                <TouchableOpacity style={ styles.submitButton }>
                    <Text style = {styles.textStyle}>
                        SUBMIT
                    </Text>
                </TouchableOpacity>

                <CompareTwoItems firstItem = {firstItem} secondItem = {secondItem} />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        alignItems: 'center',
        backgroundColor: 'red',
        justifyContent: 'center',
        fontSize: 20,
        textAlign: 'center'
    },
    submitButton: {
        alignItems: 'center',
        backgroundColor: 'red',
        justifyContent: 'center',
        textAlign: 'center'
    }
})

const firstItem = [
    {
        title: 'plotDescription',
        content:'This is firstItem'
    }
];


const secondItem = {
    title: 'plotDescription',
    content:'This is secondItem'
};

export default SearchTwoItems;