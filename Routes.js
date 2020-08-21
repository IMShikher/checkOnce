import React from 'react';
import {TouchableOpacity, Text} from 'react-native'
import Icon from 'react-native-vector-icons/Octicons';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Home  from './src/components/Home.js';
import  AboutUs  from './src/components/AboutUs.js';
import CardInformation from './src/components/commonComponents/CardInformation.js';
import DisplayCardInformation from './src/components/DisplayCardInformation.js';
import SearchTwoItems from './src/components/comparisor/SearchTwoItems';
import { DrawerActions } from '@react-navigation/native';

const navBarButton = (navigation) => {
    return(
      <TouchableOpacity onPress={() => Actions.refresh({ key: 'home', open: true })}>
        <Icon 
            name='three-bars' 
            size={30} 
            color='#000' 
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />
      </TouchableOpacity>
    );
}

const Routes = (props) => {
    
    return(
    <Router renderLeftButton={navBarButton(props.navigation)}>

        <Scene key ="root">
            <Scene key = "home" title = "CheckOnce" component = { Home } initial = {true} />
            {/* <Scene key = "cardInformation" title = "Movie" component = { CardInformation } />
            <Scene key = "displayCardInformation" title = "MovieInfo" component = { DisplayCardInformation }  /> */}
            <Scene key = "searchTwoItems" title = "SearchTwoItems" component = { SearchTwoItems }   />
        </Scene>

    </Router>
    );
}
export default Routes;