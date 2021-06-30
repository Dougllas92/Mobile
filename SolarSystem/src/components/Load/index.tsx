import React from 'react'

import { Wrapper, Content, Lottie } from './styles'

import solarSystemImg from '../../assets/backgrounds/solar-system.jpg'
import LoadLottie from '../../assets/icons/load.json'

const Load: React.FC = () => {
  return( 
    <Content>
      <Wrapper source={solarSystemImg} />
        <Lottie source={LoadLottie} autoPlay />
    </Content>
  )
}

export default Load