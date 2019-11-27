import React from 'react';
import { View , StyleSheet, FlatList, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { db } from '../../firebaseConfig'; 

const itemsRef = db.ref('movies/');

export const HomeGrid = () => {

    onGridImagePressed = () => {
        console.warn("THis is imageAgain damn it!!");
        console.warn('HelloThisisFooBar', itemsRef);
    }
    return (
       
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity onPress={ this.onGridImagePressed }>
              <View style={styles.itemContainer}>            
                    <Image
                        style={{flex: 1, width: size, height: size, resizeMode : 'stretch' }}
                        source = {item.value}
                    />
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          numColumns={numColumns} />
          
      );
}

const data = [
    {id: 'a', value: require('../photos/photo3.jpg')},
    {id: 'b', value: require('../photos/photo2.jpeg')},
    {id: 'c', value: require('../photos/photo4.jpg')},
    {id: 'd', value: require('../photos/photo3.jpg')},
    {id: 'e', value: require('../photos/photo2.jpeg')},
    {id: 'f', value: require('../photos/photo4.jpg')}
  ];

const numColumns = 2;
const size = Dimensions.get('window').width/numColumns;
const styles = StyleSheet.create({
    itemContainer: {
      width: size,
      height: size,
    },
    item: {
      flex: 1,
      backgroundColor: 'lightblue',
    }
  });