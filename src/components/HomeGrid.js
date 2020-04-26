import React from 'react';
import { View , StyleSheet, FlatList, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';


export const HomeGrid = () => {

    onGridImagePressed = () => {
      console.warn("THis is imageAgain damn it!!");
      Actions.displayCardInformation();
    }
    return (
       
        <FlatList
          data={ homeGridData }
          renderItem={({item}) => (
            <TouchableOpacity   style = {{ backgroundColor: item.backgroundColor }} onPress={ this.onGridImagePressed }>
              <View style={styles.itemContainer}>            
                    <Text style = { styles.textStyle }>
                      {item.value}
                     </Text> 
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          numColumns={numColumns} />
          
      );
}

const homeGridData = [
    {id: '1', value: 'Bollywood Movies', backgroundColor: 'red'},
    {id: '2', value: 'Hollywood Movies', backgroundColor: 'blue'},
    {id: '3', value: 'Amazon Prime', backgroundColor: 'green'},
    {id: '4', value: 'Netflix', backgroundColor: 'red'},
    {id: '5', value: 'Zee5', backgroundColor: 'black'},
    {id: '6', value: 'Hotstar', backgroundColor: 'blue'}
  ];

const numColumns = 2;
const size = Dimensions.get('window').width/numColumns;
const styles = StyleSheet.create({
    itemContainer: {
      width: size,
      height: size,
      justifyContent: 'center', 
      alignItems: 'center',
      flexDirection: 'row',
      flex:1,
      flexWrap: 'wrap' 
    },
    item: {
      flex: 1,
      backgroundColor: 'lightblue',
    },
    textStyle : {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 3,
      flex:1
    }
  });