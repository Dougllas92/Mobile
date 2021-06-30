import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'

const { Navigator, Screen} = createMaterialBottomTabNavigator()

import Bookmark from '../pages/Bookmark'
import Picture from '../pages/Picture'
import Search from '../pages/Search'
import Home from '../pages/Home'


const AppRoutes: React.FC = () => {
  const theme = useTheme();

  return(
    <Navigator
      barStyle={{
        backgroundColor: theme.colors.primary,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        height: 70,
        justifyContent: 'center',
      }}
      style={{
        backgroundColor: theme.colors.background
      }}
    >
      <Screen
        name='Home' 
        component={Home} 
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name='home' color={color} size={24} /> 
          )
        }}
      />
      <Screen 
        name='Search' 
        component={Search} 
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name='search' color={color} size={24} />
          )
        }}
        initialParams={{ search: '', page: 1 }}
      />
      <Screen 
        name='Bookmark' 
        component={Bookmark} 
        options={{
          tabBarIcon:({ color }) => (
            <Feather name='bookmark' color={color} size={24} />
          )
        }}
      />
      <Screen 
        name='Picture' 
        component={Picture} 
        options={{
          tabBarIcon:({color}) => (
            <Feather name='image' color={color} size={24} />
          )
        }}
      />
    </Navigator>
  )
}

export default AppRoutes