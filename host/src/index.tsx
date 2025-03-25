import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from '../app.json';

// Initialize the app
AppRegistry.registerComponent(appName, () => App);
