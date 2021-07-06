import styled from 'styled-components/native'

export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  height: 56px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.boxes};
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.stroke};
  border-radius: 5px;
`
export const Icon = styled.View`
  height: 100%;
  width: 56px;
  align-items: center;
  justify-content: center;
  border-right-width: 1px;
  border-color: ${({theme}) => theme.colors.stroke};
`
export const Content = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.text400};
  color: ${({theme}) => theme.colors.body};
  font-size: ${({theme}) => theme.size.text15};
`