import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator } from 'react-native'
import Routes from './src/routes';
import { ThemeProvider } from 'styled-components'
import theme from './src/styles/theme';
import { NavigationContainer } from '@react-navigation/native';


import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if(!fontsLoaded)
    return <ActivityIndicator size='large' color='#fff' />

  return (

    <ThemeProvider theme={theme}>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
