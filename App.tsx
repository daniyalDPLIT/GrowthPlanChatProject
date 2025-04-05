/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StoreProvider } from './src/mobx/StoreProvider';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <StoreProvider>
        <AppNavigator />
      </StoreProvider>
    </SafeAreaProvider>
  );
};

export default App;
