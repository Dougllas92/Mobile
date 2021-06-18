import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Category = styled(LinearGradient)`
  align-items: center;
  justify-content: center;
  border-radius: ${({theme}) => theme.radius};
  padding: 12px 0px;
`

export const Button = styled.TouchableOpacity`
  width: 22%;
`;