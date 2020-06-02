import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import { config, i18next } from './i18n';
import RootNavigator from './navigators/RootNavigator';
import configureStore from './store/configureStore';

const { store, persistor } = configureStore();

i18next.init(config);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <RootNavigator />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
