import React, { Component } from 'react';
import { View , StyleSheet, FlatList, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';


export class HomeGrid extends Component {

    onGridImagePressed() 
    {
      Actions.searchTwoItems();
    }

    render(){
      return (
       <View style = {styles.parentViewStyle}>
          <FlatList
            data={ homeGridData }
            renderItem={({item}) => (
              <TouchableOpacity   style = {{ backgroundColor: item.backgroundColor, height:150}} onPress={ this.onGridImagePressed }>
                <View style={styles.itemContainer}>            
                      <Text style = { styles.textStyle }>
                        {item.value}
                      </Text> 
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            numColumns={numColumns} />
       </View>

          
      );
    }
  }

const homeGridData = [
    {id: '1', value: 'Movies', backgroundColor: '#D39576'},
    {id: '2', value: 'Seasons', backgroundColor: '#6DD0BF'},
    {id: '3', value: 'Web-Series', backgroundColor: '#A6D376'},
    {id: '4', value: 'Animations', backgroundColor: '#F05543'},
    {id: '5', value: 'OTT Platforms', backgroundColor: '#847776'},
    {id: '6', value: 'Companies', backgroundColor: '#586BB9'}
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
    },
    parentViewStyle:{
      flex:1
    }
  });