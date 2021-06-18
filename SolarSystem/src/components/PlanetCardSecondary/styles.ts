import styled from 'styled-components/native'

export const Wrapper = styled.View`
  width: 100%;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.primary};
  flex-direction: row;
  margin-bottom: 10px;
`
export const Planet = styled.View`
  flex: 1;
  position: relative;
  overflow: hidden;
  border-top-left-radius: 8px;
`;

export const CardInfo = styled.View`
  flex: 1;
  margin: 0px 10px;
`
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const Body = styled.View``;

export const Footer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;