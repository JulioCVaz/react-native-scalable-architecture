import { FunctionComponent } from 'react';
import { AppRegistry } from 'react-native';
import { CodePushConfig } from '@react-native-scalable-architecture/codepush';

import App from './app/App';

let TomiokaApp: () => FunctionComponent = () => CodePushConfig(App);

AppRegistry.registerComponent('Tomioka', TomiokaApp);
