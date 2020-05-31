import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { PhotoSelectContainer, PhotoFilter } from '../containers';

const MainStack = createStackNavigator();

const MainNavigator = () => {
  const defaultOptions = { headerBackTitleVisible: false };

  return (
    <MainStack.Navigator
      screenOptions={defaultOptions}
      initialRouteName="PhotoSelect">
      <MainStack.Screen
        name="PhotoSelect"
        options={{ title: 'Выбрать фото' }}
        component={PhotoSelectContainer}
      />
      <MainStack.Screen
        name="PhotoFilter"
        options={defaultOptions}
        component={PhotoFilter}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
