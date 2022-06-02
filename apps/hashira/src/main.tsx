import { FunctionComponent } from 'react';
import { AppRegistry } from 'react-native';
import { CodePushConfig } from '@react-native-scalable-architecture/codepush';

import App from './app/App';

let HashiraApp: () => FunctionComponent = () => CodePushConfig(App);

AppRegistry.registerComponent('Hashira', HashiraApp);
