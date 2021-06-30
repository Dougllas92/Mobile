import styled from 'styled-components/native'

export const Wrapper = styled.Image`
  position: absolute;
  right: -30%;
  top: -30%;
  height: ${({theme}) => theme.size.background}px;
  width: ${({theme}) => theme.size.background}px;
`