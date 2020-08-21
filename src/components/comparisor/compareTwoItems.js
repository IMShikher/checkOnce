import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import SimpleAccordion from 'react-native-simple-accordian';

const accordianData = 'This is sample Accordian Text....';

const sampleAccordianData = [
    {
      title: 'Accordian 1 ',
      content: accordianData
    },
    {
      title: 'Accordian 2',
      content: accordianData
    },
    {
      title: 'Accordian 3',
      content: accordianData
    }
  ];


class CompareTwoItems extends Component
{
    constructor(props){
        super(props)
        this.state = ({
            content:'',
            open: false,
        });
    }

    onChangeAccordian(section) {
        this.setState({ open: section });
     
      }

    renderHeader(section, i, isOpen) {
        return (
          <View style={{backgroundColor:'#ffffff',flexDirection:'row'}}>
            <Text style={[styles.headerText,{padding:10,textAlign:'left'}]}>{section.key}</Text>
          </View>
        );
      }

    renderContent(section, i, isOpen) {
      return (
        <View style={styles.content}>
          <Text>{section.value}</Text>
        </View>
      );
    }


    render(){

      var objectKeys = []
      this.props.moviesDataState.slice(0,1).map((item) => {
        for (const [key, value] of Object.entries(item)) {
          objectKeys.push(key)
        }
      })
      
      var sectionData = []
      var moviesData = this.props.moviesDataState;
      var fullData = objectKeys.map((item) => {

      var combineDataForItem = moviesData[0][item]+"\n"+moviesData[1][item]

      const obj = { 'key':item, 'value': combineDataForItem };
      sectionData.push(obj)
      })

      return(
        <ScrollView style={styles.scrollView}>
            <View>

                <SimpleAccordion
                    sections={sectionData}
                    renderHeader= {this.renderHeader}
                    renderContent={this.renderContent}
                    duration={1000}
                    touchableComponent={TouchableOpacity}
                    onChange={this.onChangeAccordian.bind(this)}
                    activeSection={this.state.open}
                />

            </View>
        </ScrollView>
        );
    }
}
export default CompareTwoItems;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor:'#2c2c2c'
      
    },
    headerText1:{
      color:'white',
      textAlign:'center',
      fontSize:22
     
    },
    headerTextView:{
      height:50,
      borderWidth:1,
      backgroundColor:'#383636',
      justifyContent:'center',
    },
    title: {
      textAlign: 'center',
      fontSize: 22,
      fontWeight: '300',
      marginBottom: 20,
      color:'#ffffff'
    },
    header:{
        flex:1
    },
    headerText: {
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '500',
    },
    content: {
      padding: 20,
      backgroundColor: '#ffffff'
    },
    TextStyle: {
 
      textAlign: 'left',
      fontSize: 20,
      textDecorationLine: 'underline',
       
      },
    scrollView: {
      marginHorizontal: 20
    }
  });
    