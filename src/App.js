import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import RootNavigator from './navigators/RootNavigator';
import configureStore from './store/configureStore';
import { i18next, config } from './i18n';

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
