import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import LottieView from 'lottie-react-native'

const height = Math.round(Dimensions.get('window').height * 1.4)

export const Wrapper = styled.ImageBackground`
  position: absolute;
  right: -120px;
  height: ${height}px;
  width: ${height}px;
`

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Lottie = styled(LottieView)`
  width: 200px;
  height: 200px;
`
