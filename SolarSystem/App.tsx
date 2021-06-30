import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ActivityIndicator, LogBox } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import theme from './src/styles/theme'
import Routes from './src/routes'

LogBox.ignoreLogs(['Require cycle'])

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  if(!fontsLoaded)
    return <ActivityIndicator size='large' color='#fff' />

  return (

    <ThemeProvider theme={theme}>
      <StatusBar style='light'/>
        <Routes />
    </ThemeProvider>
  )
}
