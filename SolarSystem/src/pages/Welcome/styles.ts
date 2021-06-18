import styled from 'styled-components/native'

import BackgroundSolarSystem from '../../assets/backgrounds/background-solar-system.svg'
import { LinearGradient } from 'expo-linear-gradient'

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  align-items: center;
  justify-content: center;
`

export const Background = styled(BackgroundSolarSystem)`
  position: absolute;
  right: -35%;
  top: -20%;
`

export const Text = styled.Text`
  color: ${({theme}) => theme.colors.text};
`

export const GroupButton = styled.View`
  position: absolute;
  bottom: 70px;
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
`