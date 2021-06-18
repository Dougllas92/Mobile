import styled from 'styled-components/native'

export const Wrapper = styled.TouchableOpacity`
  position: relative;
  overflow: hidden;
  background-color: ${({theme}) => theme.colors.primary};
  margin-left: 20px;
  max-width: 140px;
  max-height: 180px;
  border-radius: ${({theme}) => theme.radius};
`

export const Footer = styled.View`
  bottom: 22px;
  flex-direction: row;
  padding: 0px 16px;
  align-items: center;
  justify-content: space-between;
`