import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Wrapper = styled.View`
  flex: 1;
  background-color: #FFF;
`

export const Content = styled.View`
  position: absolute;
  width: 100%;
  top: ${getStatusBarHeight() + 20}px;
  align-items: center;
  justify-content: space-between;
`

export const Banner = styled.Image``

export const Action = styled.View`
  padding: 0px 60px;
`

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.title600};
  color: ${({theme}) => theme.colors.heading};
  font-size: ${({theme}) => theme.size.heading32};
  padding: 0px 60px;
  text-align: center;
`

export const Button = styled.TouchableOpacity``
