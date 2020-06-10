import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { SplashScreen} from '../screens';
import MainNavigator from './MainNavigator';

const RootNavigator = () => {
  const isLoggedIn = true;
  const appLoading = false;

  if (appLoading) {
    return <SplashContainer />;
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainNavigator /> : <MainNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
