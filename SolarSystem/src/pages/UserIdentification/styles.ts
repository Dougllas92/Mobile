import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  align-items: center;
  justify-content: center;
`

export const Background = styled.Image`
  position: absolute;
  right: -150px;
  height: ${({theme}) => theme.size.background}px;
  width: ${({theme}) => theme.size.background}px;
`

export const Content = styled.View`
  width: 60%;
`

export const Gradient = styled(LinearGradient).attrs(({theme}) => ({
  colors: theme.gradients.button,
  start: { x: 0, y:1 },
  end: { x: 1, y:0 }
}))`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0px 32px;
  border-radius: 8px;
  flex-direction: row;
  width: 100%;
`