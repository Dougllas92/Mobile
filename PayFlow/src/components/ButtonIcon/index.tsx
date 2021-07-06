import React from 'react'

import { Wrapper, Icon, Content, Title } from './styles'

import GoogleSvg from '../../assets/google.svg'
import { TouchableOpacityProps } from 'react-native'

export function ButtonIcon({...props}: TouchableOpacityProps): JSX.Element {
  return( 
    <Wrapper
      {...props}
    >
      <Icon>
        <GoogleSvg />
      </Icon>
      <Content>
        <Title>Entrar com o Google</Title>
      </Content>
    </Wrapper>
  )
}
