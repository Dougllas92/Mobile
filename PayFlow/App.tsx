import React from 'react'
import { Lexend_600SemiBold } from '@expo-google-fonts/lexend'
import { Inter_400Regular } from '@expo-google-fonts/inter'
import { StatusBar } from 'expo-status-bar'
import AppLoading from 'expo-app-loading'
import { useFonts  } from 'expo-font' 

import { SignIn } from './src/pages/SignIn'

import { ThemeProvider } from 'styled-components'
import theme from './src/global/styles/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Lexend_600SemiBold,
    Inter_400Regular
  })

  if(!fontsLoaded)
    return <AppLoading />

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' translucent />
      <SignIn />
    </ThemeProvider>
  )
}
