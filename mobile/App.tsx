import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';
import AppProvider from './src/utils';
import light from './src/themes/light';
import dracule from './src/themes/dracule';

import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}