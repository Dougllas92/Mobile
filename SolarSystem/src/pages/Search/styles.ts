import styled from 'styled-components/native'
import { Dimensions } from 'react-native'


const pageHeight = `${Math.round(Dimensions.get('window').height)}px`
const widthPage = `${Math.round(Dimensions.get('window').width)}px`

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`


export const Screen = styled.ScrollView`
  flex: 1;
`;

export const Page = styled.View`
  height: ${pageHeight};
  width: ${widthPage};
`