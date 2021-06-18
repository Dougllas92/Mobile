import styled from 'styled-components/native'
import { Dimensions, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const statusBar = `${Constants.statusBarHeight + 18}px`

import BackgroundConstellation from '../../../assets/backgrounds/background-constellation.svg'

const height = `${Dimensions.get('window').height * 1.5}px`

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.backgroundSecondary};
`

export const Header = styled.View`
  padding: 0px 20px;
  padding-top: ${statusBar};
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.background};
  justify-content: space-between;
  height: 220px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  overflow: hidden;
`;

export const Planet = styled.View`
  position: absolute;
  top: 10%;
  width: 100%;
  align-items: center;
`

export const Content = styled.ScrollView`
  padding: 0px 20px;
`

export const Separator = styled.View`
  margin: 10px 0px;
  background-color: ${({theme}) => theme.colors.background};
  opacity: 0.1;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
`

export const Block = styled.View``
export const BlockHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const BlockResume = styled.View``

export const BlockIcon = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Section = styled.TouchableOpacity`
  flex-direction: row;
`

export const SectionContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`

export const Description = styled.View`
  padding-left: 10px;
`

export const TextValue = styled.Text`
  font-size: ${({theme}) => theme.size.caption};
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.textSecondary};
  opacity: 0.75;
  text-align: justify;
`




export const Background = styled(BackgroundConstellation).attrs(() => ({
  height: height,
  width: height,
}))`
  position: absolute;
  right: -30%;
  top: -70%;
`

