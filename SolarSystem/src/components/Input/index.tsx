import React from 'react'
import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components';

import { Search, TextInput, Wrapper } from './styles';

interface InputProps extends TextInputProps {
  iconActive?: boolean
} 

const Input = ({iconActive, ...rest} : InputProps) => {
  const theme = useTheme()
  return(
    <Wrapper>
      {iconActive ?
        <Search name='search' size={16} color={theme.colors.text}/>
        : null
      }
      <TextInput {...rest} />
    </Wrapper>
  )
}

export default Input;