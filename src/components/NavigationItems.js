import React, { Component } from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { Actions } from 'react-native-router-flux';

const menuButton = () => {
    return (
        <TouchableOpacity onPress={openDrawer} style={Dimensions.iconSmall.touchableObject}>
            <Icon name='three-bars' 
                size={24}
                color={"#ffffff"}/>
        </TouchableOpacity>
    )
}

const openDrawer = () => {
    Actions.refresh({ key: 'drawer', open: true })
}