import { FunctionComponent } from 'react';
import CodePush from 'react-native-code-push';

const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
};

export const CodePushConfig = (component: FunctionComponent) =>
  CodePush(codePushOptions)(component);
