import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import RootNavigator from '@navigators/RootNavigator';
import configureStore from '@store/configureStore';

import { config, i18next } from './i18n';
import { themes } from './styles';

const { store, persistor } = configureStore();

i18next.init(config);

export default function App() {
  return (
    <Provider {...{ store }}>
      <ThemeProvider theme={themes.defaultTheme}>
        <PersistGate loading={null} {...{ persistor }}>
          <SafeAreaProvider>
            <RootNavigator />
          </SafeAreaProvider>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  );
}
