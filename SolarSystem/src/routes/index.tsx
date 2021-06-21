import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from '../pages/Welcome'
import BottomTabs from './BottomTabs'
import UserIdentification from '../pages/UserIdentification'
import Preload from '../pages/Preload'

const Routes: React.FC = () => {
  const Stack = createStackNavigator()

  return(
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName='Preload'
    >
      <Stack.Screen name='Preload' component={Preload} />
      <Stack.Screen name='Welcome' component={Welcome} />
      <Stack.Screen name='UserIdentification' component={UserIdentification} />
      <Stack.Screen name='BottomTabs' component={BottomTabs} />
    </Stack.Navigator>
  )
}

export default Routes;