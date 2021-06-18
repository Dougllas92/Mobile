import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Welcome from '../pages/Welcome'
import BottomTabs from './BottomTabs'

const Routes: React.FC = () => {
  const Stack = createStackNavigator()

  return(
    <Stack.Navigator
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen name='Welcome' component={Welcome} />
      <Stack.Screen name='BottomTabs' component={BottomTabs} />
    </Stack.Navigator>
  )
}

export default Routes;