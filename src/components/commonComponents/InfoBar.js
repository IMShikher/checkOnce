import React from 'react';
import { View , Text } from 'react-native';

const InfoBar = (props) => {
    return (
        <View>
            <View>
                <Text>
                    {props.query}
                </Text>
            </View>

            <View>
                <Text>
                    { props.answer}
                </Text>
            </View>
        </View>
    );
}
export default InfoBar;