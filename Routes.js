import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home  from './src/components/Home.js';
import  AboutUs  from './src/components/AboutUs.js';

const Routes = () => {
    return(
    <Router>

        <Scene key ="root">
            <Scene key = "home" title = "CheckOnce" component = { Home } initial = {true} />
            <Scene key = "aboutUs" title = "AboutUs"  component = { AboutUs } />
        </Scene>

    </Router>
    );
}
export default Routes;