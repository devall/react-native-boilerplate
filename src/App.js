import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigator from './navigators/RootNavigator';
import { i18next, config } from './i18n';

i18next.init(config);

export default function App() {
  return (
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  );
}
