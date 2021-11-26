import React from 'react';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import { Routes } from './src/routes';
import { AuthProvider  } from './src/hooks/auth';

export default function App() {

  const [ fontsLoaded ] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }
  return (
    <AuthProvider>
      <Routes />   
    </AuthProvider>
    
  );
}
