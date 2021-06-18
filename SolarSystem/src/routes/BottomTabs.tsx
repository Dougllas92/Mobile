import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

const Tab = createMaterialBottomTabNavigator()
import { Feather } from '@expo/vector-icons'


import Home from '../pages/Home'
import Search from '../pages/Search'
import Bookmark from '../pages/Bookmark'
import Picture from '../pages/Picture'
import { useTheme } from 'styled-components'

const BottomTabs: React.FC = () => {
  const theme = useTheme();

  return(
    <Tab.Navigator
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
      <Tab.Screen
        name='Home' 
        component={Home} 
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name='home' color={color} size={24} /> 
          )
        }}
      />
      <Tab.Screen 
        name='Search' 
        component={Search} 
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name='search' color={color} size={24} />
          )
        }}
        initialParams={{ search: '', page: -1 }}
      />
      <Tab.Screen 
        name='Bookmark' 
        component={Bookmark} 
        options={{
          tabBarIcon:({ color }) => (
            <Feather name='bookmark' color={color} size={24} />
          )
        }}
      />
      <Tab.Screen 
        name='Picture' 
        component={Picture} 
        options={{
          tabBarIcon:({color}) => (
            <Feather name='image' color={color} size={24} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabs;