/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
// import App from './src/App';
import {name as appName} from './app.json';
import Menu from './src/Menu'

YellowBox.ignoreWarnings([
    'componentWillReceiveProps is deprecated',
    'componentWillMount',
    'componentWillReceiveProps has been renamed',
    'Require cycle',
    'DrawerLayoutAndroid drawerPosition',
]);


AppRegistry.registerComponent(appName, () => Menu);

