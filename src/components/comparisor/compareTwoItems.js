import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';


export default class CompareTwoItems extends Component {

    state = {
        listDataFromDB: [],
        lastKey: null
    };

    
    componentDidMount() 
    {
        console.warn("ItemsRef "+itemsRef);
        itemsRef.on('value', ( snapshot ) => {
            var data = snapshot.val();
            this.setState({
                listDataFromDB : snapshot.val(),
            });
            console.warn("ListDataIsHere "+this.state.listDataFromDB);
            var keys = Object.keys(data);
            keys.forEach((key) => 
            { 
                this.setState({
                    lastKey: key
                });
                console.warn("This is great"+data[key])
            });

            console.warn("LastKeyIsHere "+this.state.lastKey);
        });
    }

    render(props)
    {
        const items= [];
        for (const [index, value] of this.state.listDataFromDB.entries()) {
            items.push(<li key={index}>{value}</li>)
          }
        return(
            <View>
                {items}
            </View>
        );
    }
}