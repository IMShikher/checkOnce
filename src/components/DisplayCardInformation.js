import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { db } from '../../firebaseConfig'; 
import CardInformation from './commonComponents/CardInformation';

const itemsRef = db.ref('movies/');

class DisplayCardInformation extends Component 
{

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

        });

        itemsRef.child("1").on('value', function(snapshot) {
            console.log("This the exact key bro "+snapshot.key);
            console.log("This the exact value bro "+snapshot.val());
            var movieComparison = snapshot.val().movieComparison;
            var movieName = snapshot.val().movieName;
            console.log("This the movieComparison again "+movieComparison);
            console.log("This the movieName again "+movieName);
            //console.log("This the movieComparison value bro "+movieComparison.val());
        });
    }


    render() {

        let lastListitem = {
            plotRating: '',
            plotDescription: ''
        };

        this.state.listDataFromDB.map((listDataItem) => {
            lastListitem = listDataItem;
        });  
        
        console.warn("Ye wala lastItem tha "+ lastListitem);
        return(
            <CardInformation listItem = {lastListitem} />
        );
    }     
}

export default DisplayCardInformation;