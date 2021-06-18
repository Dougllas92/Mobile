import React from 'react'
import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components';

import { Search, TextInput, Wrapper } from './styles';

interface InputProps extends TextInputProps {} 

const Input = ({...rest} : InputProps) => {
  const theme = useTheme()
  return(
    <Wrapper>
      <Search name='search' size={16} color={theme.colors.text}/>
      <TextInput {...rest} />
    </Wrapper>
  )
}

export default Input;