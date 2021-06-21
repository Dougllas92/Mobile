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