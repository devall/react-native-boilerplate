import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import RootNavigator from '@navigators/RootNavigator';
import configureStore from '@store/configureStore';
import theme from '@theme/default';

import { config, i18next } from './i18n';

const { store, persistor } = configureStore();

i18next.init(config);

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <RootNavigator />
          </SafeAreaProvider>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  );
}
