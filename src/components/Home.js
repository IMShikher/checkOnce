import React, { Component } from 'react';
import { StyleSheet,  View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { HomeGrid } from './HomeGrid';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        images: [
            require('./commonComponents/photos/photo2.jpeg'),
            require('./commonComponents/photos/photo3.jpg'),
            require('./commonComponents/photos/photo4.jpg'),
            require('./commonComponents/photos/photo3.jpg'),
        ]
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <SliderBox
                    images= { this.state.images }
                    sliderBoxHeight={400}
                    onCurrentImagePressed={index =>
                        console.warn(`image ${index} pressed`)
                    }
                />
                <HomeGrid />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });