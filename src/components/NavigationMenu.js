import React, { Component } from 'react';
import {View, Text, ScrollView} from 'react-native';

export default function  NavigationMenu()
{
    console.log("Here");
        return(
            <ScrollView scrollsToTop={false}>
                <View >
                    <Text>Your name</Text>
                </View>
            </ScrollView>
        );
}