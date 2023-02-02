import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';

import { Provider } from 'react-redux';
import store from './src/redux/store';
import AppRoutes from './src/routes';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isAppReady, setAppReady] = useState(false);

  async function _loadAssetsAsync() {
    await Font.loadAsync({
      regular: require('./src/assets/fonts/SF-Pro-Text-Regular.otf'),
      semibold: require('./src/assets/fonts/SF-Pro-Text-Semibold.otf'),
      bold: require('./src/assets/fonts/SF-Pro-Display-Bold.otf'),
    });
    setAppReady(true);
  }

  useEffect(() => {
    _loadAssetsAsync();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isAppReady) {
      await SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  if (!isAppReady) {
    return null;
  }

  return (
    <View style={{ flexGrow: 1 }} onLayout={onLayoutRootView}>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </View>
  );
}
