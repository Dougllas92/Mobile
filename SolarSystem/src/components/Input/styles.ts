import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

export const Wrapper = styled.View`
  height: 50px;
  width: 100%;
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: ${({theme}) => theme.radius};
  align-items: center;
  padding: 0px 20px;
`;

export const Search = styled(Feather)`
  padding-right: 16px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${({theme}) => theme.colors.text};
`;

