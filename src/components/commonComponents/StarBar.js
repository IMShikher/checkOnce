import React from 'react';
import { View , Text } from 'react-native';
import Star from 'react-native-star-view';

const StarBar = (props) => {
    return (
        <View>
            <View>
                <Text>
                    { props.query }
                </Text>
            </View>

            <View>
                <Star score={ props.Score } style={starStyle} />
            </View>
        </View>
    );
}

const starStyle = {
    width: 100,
    height: 20,
    marginBottom: 20,
  };


export default StarBar;