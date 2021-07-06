import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../pages/Home'
import { Scanner } from '../pages/Scanner'
import { Statement } from '../pages/Statement'

const { Navigator, Screen } = createBottomTabNavigator()

export function Routes(): JSX.Element {
  return( 
    <Navigator>
      <Screen name='Home' component={Home} />
      <Screen name='Scanner' component={Scanner} />
      <Screen name='Statement' component={Statement} />
    </Navigator>
  )
}
