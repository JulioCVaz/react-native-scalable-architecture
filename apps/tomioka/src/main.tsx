import { FunctionComponent } from 'react';
import { AppRegistry } from 'react-native';
import CodePush from 'react-native-code-push';
import App from './app/App';

let codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
};

let TomiokaApp: () => FunctionComponent = () => CodePush(codePushOptions)(App);

AppRegistry.registerComponent('Tomioka', TomiokaApp);
