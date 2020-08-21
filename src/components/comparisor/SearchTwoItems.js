import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { db } from '../../../firebaseConfig'; 
import CompareTwoItems from './CompareTwoItems';
import Autocomplete from 'react-native-autocomplete-input';

const moviesRef = db.ref('movies/');

class SearchTwoItems extends Component
{


    constructor(props){
        super(props)
        this.state = ({
            moviesDataState:[],
            firstMovie:"",
            secondMovie:"",
            twoMovieObjects:[]
        });
    }
    updateFirstMovieName = (search) => 
    {
        this.setState({firstMovie:search})
    }

    updateSecondMovieName = (search) => 
    {
        this.setState({secondMovie:search})
    }

    onSubmit = () => {
        this.setState({twoMovieObjects: []}) // Empty the state first after everClick of Submit.
        var movie1 = this.state.firstMovie;
        var movie2 = this.state.secondMovie;
        var twoMovieObjects = []
        
        this.state.moviesDataState.map((item) => {
            if(item.movieName == movie1)
            {
                twoMovieObjects.push(item)
            }
            if(item.movieName == movie2)
            {
                twoMovieObjects.push(item)
            }
        });
        
        if(twoMovieObjects.length == 2)
        {
            this.setState({twoMovieObjects: twoMovieObjects})
        }
    }

    findFilm(query) {
        //method called everytime when we change the value of the input
        if (query === '') {
          //if the query is null then return blank
          return [];
        }
     
        const { moviesDataState } = this.state;
        //making a case insensitive regular expression to get similar value from the film json
        const regex = new RegExp(`${query.trim()}`, 'i');
        //return the filtered film array according the query from the input
        console.log("Hello")
        console.log(moviesDataState.filter(moviesDataState => moviesDataState.movieName.search(regex) >= 0))
        return moviesDataState.filter(moviesDataState => moviesDataState.movieName.search(regex) >= 0);
      }

    componentDidMount() {

        var moviesData = [];
        moviesRef.on('value', ( snapshot ) => {
            snapshot.forEach( (childSnapshot) => {
                moviesRef.child(childSnapshot.key).on('value', (childData) => {

                    const obj = {'movieComparison':childData.val().movieComparison, 'movieName':childData.val().movieName, 
                    'plotDescription':childData.val().plotDescription, 'plotRating': childData.val().plotRating};

                    moviesData.push(obj);

                })
            });
            this.setState({ moviesDataState: moviesData });
        }); 
    }

    render(){
        const { firstMovie } = this.state;
        const { secondMovie } = this.state;
        const suggestionForFirstMovie = this.findFilm(firstMovie);
        const suggestionForSecondMovie = this.findFilm(secondMovie);
        const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
        
        return(
            <View>
                <Autocomplete
                    autoCapitalize="none"
                    autoCorrect={false}
                    containerStyle={styles.autocompleteContainer}
                    //data to show in suggestion
                    data={suggestionForFirstMovie.length === 1 && comp(firstMovie, suggestionForFirstMovie[0].movieName) ? [] : suggestionForFirstMovie}
                    //default value if you want to set something in input
                    value = {firstMovie}
                    /*onchange of the text changing the state of the query which will trigger
                    the findFilm method to show the suggestions*/
                    onChangeText={text => this.setState({ firstMovie: text })}
                    placeholder="Enter the first title"
                    renderItem={({ item }) => (
                        //you can change the view you want to show in suggestion from here
                        <TouchableOpacity onPress={() => this.setState({ firstMovie: item.movieName })}>
                            <Text style={styles.itemText}>
                                {item.movieName}
                            </Text>
                            <View style = {styles.lineStyle} />
                        </TouchableOpacity>
                    )}
                />

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black', borderWidth: 1}} />
                    <View>
                        <Text style={{width: 50, textAlign: 'center'}}>VS</Text>
                    </View>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black', borderWidth: 1}} />
                </View>

                <Autocomplete
                    autoCapitalize="none"
                    autoCorrect={false}
                    containerStyle={styles.autocompleteContainer}
                    //data to show in suggestion
                    data={suggestionForSecondMovie.length === 1 && comp(secondMovie, suggestionForSecondMovie[0].movieName) ? [] : suggestionForSecondMovie}
                    //default value if you want to set something in input
                    value = {secondMovie}
                    /*onchange of the text changing the state of the query which will trigger
                    the findFilm method to show the suggestions*/
                    onChangeText={text => this.setState({ secondMovie: text })}
                    placeholder="Enter the second title"
                    renderItem={({ item }) => (
                        //you can change the view you want to show in suggestion from here
                        <TouchableOpacity onPress={() => this.setState({ secondMovie: item.movieName })}>
                            <View>
                                <Text style={styles.itemText}>
                                    {item.movieName}
                                </Text>
                                <View style = {styles.lineStyle} />
                            </View>
                        </TouchableOpacity>
                    )}
                />
                
                <TouchableOpacity style={ styles.submitButton } onPress = {this.onSubmit}>
                    <Text style = {styles.textStyle}>
                        SUBMIT
                    </Text>
                </TouchableOpacity>

                <View style = {styles.compareTwoItem}>
                    <CompareTwoItems  moviesDataState = {this.state.twoMovieObjects} />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        alignItems: 'center',
        backgroundColor: 'red',
        justifyContent: 'center',
        fontSize: 20,
        textAlign: 'center'
    },
    submitButton: {
        alignItems: 'center',
        backgroundColor: 'red',
        justifyContent: 'center',
        textAlign: 'center'
    },
    autocompleteContainer: {
        backgroundColor: '#ffffff',
        borderWidth: 0
    },
    lineStyle:{
        borderWidth: 0.1,
        borderColor:'#C0C0C0',
        margin:1,
   },
   compareTwoItem:{
       flex:1,
       marginTop:50

   }
})

const firstItem = [
    {
        title: 'plotDescription',
        content:'This is firstItem'
    }
];


const secondItem = {
    title: 'plotDescription',
    content:'This is secondItem'
};

export default SearchTwoItems;