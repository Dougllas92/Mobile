import React from 'react'

import { Wrapper } from './styles'

import constellationImg from '../../assets/backgrounds/constellation.jpg'

const AppBackground: React.FC = () => {
  return( 
    <Wrapper  source={constellationImg}/>
  )
}

export default AppBackground