import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
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

export const Planets = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`