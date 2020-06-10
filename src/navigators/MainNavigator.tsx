import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens';

const MainStack = createStackNavigator();

const MainNavigator = () => {
  const defaultOptions = { headerTransparent: true };

  return (
    <MainStack.Navigator screenOptions={defaultOptions} initialRouteName="Home">
      <MainStack.Screen name="Home" component={HomeScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
