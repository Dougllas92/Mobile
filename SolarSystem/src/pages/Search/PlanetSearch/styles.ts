import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

import BackgroundConstellation from '../../../assets/backgrounds/background-constellation.svg'

const height = `${Dimensions.get('window').height * 1.5}px`

export const Wrapper = styled.View`
  flex: 1;
  padding: 50px 20px 0px;
`;

export const Background = styled(BackgroundConstellation).attrs(() => ({
  height: height,
  width: height,
}))`
  position: absolute;
  right: -30%;
  top: -30%;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;