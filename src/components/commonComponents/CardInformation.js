import React, { Component } from 'react';
import { View, Image, YellowBox, Dimensions } from 'react-native';
import Starbar from './StarBar';
import InfoBar from './InfoBar';

const CardInformation = (props) => {

    return(
        <View style={ {flex: 1} }>
                <Image 
                    source = {require('./photos/photo3.jpg')}
                    style = { styles.imageStyle } />
                <Starbar query = {'StarCast'} Score = {props.listItem.plotRating} />
                <InfoBar query = {'Whats new in content'} answer = {props.listItem.plotDescription} />    
        </View>

    );
};
const styles = {
    imageStyle: {   
        padding:5,
        resizeMode : 'stretch',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/2
    }

}
export default CardInformation;