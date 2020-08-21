import React from 'react';
import { StyleSheet } from 'react-native';
import Routes from './Routes.js';
import NavigationDrawer from './src/NavigationDrawer'

export default function App() {
  return (
    // <Routes />
    <NavigationDrawer />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
