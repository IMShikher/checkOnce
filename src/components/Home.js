import React, { Component } from 'react';
import { StyleSheet,  View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { HomeGrid } from './HomeGrid';
import CardSection from './commonComponents/CardSection';
import CardInformation from './commonComponents/CardInformation';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        images: [
        'https://source.unsplash.com/1024x768/?nature',
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree'
        ]
        };
    }

    render() {
        return (
            <View style={styles.container} onLayout={this.onLayout}>
                <SliderBox
                    images={this.state.images}
                    sliderBoxHeight={200}
                    onCurrentImagePressed={index =>
                        console.warn(`image ${index} pressed`)
                    }
                />
                <HomeGrid />
                <CardSection>
                    <CardInformation />
                </CardSection>
            </View>
        );
      }
}
const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });