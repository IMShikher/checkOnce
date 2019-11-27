import React, { Component } from 'react';
import { View, Image, YellowBox, Dimensions } from 'react-native';
import Starbar from './StarBar';
import InfoBar from './InfoBar';
import { db } from '../../../firebaseConfig'; 


const itemsRef = db.ref('movies/');

class CardInformation extends Component {

    state = {
        items: null,
        listData: null,
        lastKey: null
    };


    componentDidMount() {
        console.warn("ItemsRef "+itemsRef);
        itemsRef.on('value', ( snapshot ) => {
            var data = snapshot.val();
            this.setState({
                listData : snapshot.val(),
            });
            console.warn("ListDataIsHere "+this.state.listData);
            var keys = Object.keys(data);
            keys.forEach((key) => 
            { 
                this.setState({
                    lastKey: key
                });
                console.warn(data[key])
            });

            console.warn("LastKeyIsHere "+this.state.lastKey);
        });
    }

    render() {
        console.warn("ItemsRef1 "+itemsRef);
        return(
            <View style={ {flex: 1} }>
                <Image 
                    source = {require('./photos/photo3.jpg')}
                    style = { styles.imageStyle } />
                <Starbar query = {'StarCast'} Score = {4} />
                <InfoBar query = {'Whats new in content'} answer = {'The content is really good'} />    
            </View>
    );   
}
}
const styles = {
    imageStyle: {
        padding:5,
        flex:1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/2
    }

}
export default CardInformation;