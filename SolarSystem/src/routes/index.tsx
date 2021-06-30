import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'

import { COLLECTION_USERS } from '../config/storage'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'
import Load from '../components/Load'

const Routes: React.FC = () => {
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(true)

  async function loadUser() {
    const user = await AsyncStorage.getItem(COLLECTION_USERS)
    setUsername(user || '')
    setLoading(false)
  }

  useEffect(() => {
    loadUser()
  },[])

  if(loading)
    return <Load />

  return(
    <NavigationContainer>
      {!!username ? <AppRoutes /> : <AuthRoutes /> }
    </NavigationContainer>
  )
}

export default Routes