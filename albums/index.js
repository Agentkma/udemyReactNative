

//Import libraries to help create component
'use strict';
import React from 'react';
import {AppRegistry, View} from 'react-native';

//Import child components
import Header from './src/components/Header.js';
import AlbumList from './src/components/AlbumList.js';


//Create Root component
const App = ()=>(
        // If tag/component has no text inside / use self closing tag
            // headerText attribute = a prop named headerText...
            //this prop is passed to the child header.js component

            /*  root component style needs flex:1 when using ScrollView elsewhere */
        <View style={{flex:1}}>
            <Header headerText="Albums!" />
            <AlbumList />
        </View>

    );
//Render component to device ...string name must match direct/folder project name
    //only the root component (parent of ALL other components) uses AppRegistry
AppRegistry.registerComponent('albums', ()=> App);
