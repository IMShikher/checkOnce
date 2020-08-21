import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { Router, Scene, Actions } from 'react-native-router-flux';

import Home from './components/Home';
import AboutUs from './components/AboutUs';
import CardInformation from './components/commonComponents/CardInformation';
import DisplayCardInformation from './components/DisplayCardInformation';
import SearchTwoItems from './components/comparisor/SearchTwoItems';
import Icon from 'react-native-vector-icons/Octicons';
import Routes from '../Routes';



const navBarButton = (navigation) => {
    return(
      <TouchableOpacity onPress={() => Actions.refresh({ key: 'aboutUs', open: true })}>
        <Icon 
            name='three-bars' 
            size={30} 
            color='#000' 
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />
      </TouchableOpacity>
    );  
}

function HomePage({ navigation }) {
  return (
    <Routes navigation = {navigation}/>
  );
}


function aboutUsPage({navigation}) {
  return (
    <Router renderLeftButton={navBarButton(navigation)}>
        <Scene key ="root">
            <Scene key = "aboutUs" title = "AboutUs"  component = { AboutUs } />
        </Scene>
    </Router>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="HomePage" component={HomePage} />
        <Drawer.Screen name="AboutUs" component={aboutUsPage} />
    </Drawer.Navigator>
  );
}

export default function NavigationDrawer() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
