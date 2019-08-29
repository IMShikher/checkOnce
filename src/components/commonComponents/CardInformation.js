import React from 'react';
import { View, Image } from 'react-native';
import Starbar from './StarBar';
import InfoBar from './InfoBar';


const CardInformation = () => {
    return(
        <View>
            <Image 
                source = {require('./photos/photo3.jpg')}
                style = {{ width:60, height: 60 }} />
            <Starbar query = {'StarCast'} Score = {4} />
            <InfoBar query = {'Whats new in content'} answer = {'The content is really good'} />    
        </View>
    );
}
export default CardInformation;