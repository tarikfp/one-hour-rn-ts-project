import * as React from 'react';
import {default as AppBottomBar} from './tabbar';

function RootNavigator() {
  // usually the authentication business logic lays down here..
  // but sake of this practice there wont be any authentication flow...
  // thus render tabbar directly

  return <AppBottomBar />;
}

export default RootNavigator;
