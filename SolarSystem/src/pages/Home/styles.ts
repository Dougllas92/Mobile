import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import BackgroundConstellation from '../../assets/backgrounds/background-constellation.svg'
import Constants from 'expo-constants'

const height = Dimensions.get('window').height * 1.5

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`
export const Background = styled(BackgroundConstellation).attrs(() => ({
  height: height,
  width: height
}))`
  position: absolute;
  right: -30%;
  top: -30%;
`

export const Header = styled.View`
  padding: 40px 20px 30px;
`
export const Geet = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const Geetings = styled.View`
  flex-direction: row;
`
export const Categories = styled.View`
  padding: 0px 20px 10px;
`

export const Planets = styled.View``