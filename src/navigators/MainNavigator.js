import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeContainer } from '../containers';

const MainStack = createStackNavigator();

const MainNavigator = () => {
  const defaultOptions = { headerTransparent: true };

  return (
    <MainStack.Navigator screenOptions={defaultOptions} initialRouteName="Home">
      <MainStack.Screen name="Home" component={HomeContainer} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
