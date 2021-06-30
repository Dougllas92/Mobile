import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import UserIdentification from '../pages/UserIdentification'
import Welcome from '../pages/Welcome'
import AppRoutes from './app.routes'

const { Navigator, Screen } = createStackNavigator()

const AuthRoutes: React.FC = () => {
  return(
    <Navigator
      headerMode='none'
    >
      <Screen name='Welcome' component={Welcome} />
      <Screen name='UserIdentification' component={UserIdentification} />
      <Screen name='AppRoutes' component={AppRoutes} />
    </Navigator>
  )
}

export default AuthRoutes