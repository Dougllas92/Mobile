import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

import BackgroundSolarSystem from '../../assets/backgrounds/background-solar-system.svg'
import { LinearGradient } from 'expo-linear-gradient'

const height = Math.round(Dimensions.get('window').height * 1.4)

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  align-items: center;
  justify-content: center;
`

// export const Background = styled(BackgroundSolarSystem)`
//   position: absolute;
//   right: -120px;
// `
export const Background = styled.Image`
  position: absolute;
  right: -120px;
  height: ${height}px;
  width: ${height}px;
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