import styled from 'styled-components/native'
import theme from '../styles/theme';

interface TextProps {
  size?: 'title' | 'subtitle' | 'caption' | 'small'
  bold?: boolean
  opacity?: number
  center?: boolean
  color?: 'text' | 'textSecondary'
}

interface ButtonProps {
  color?: 'primary' | 'secondary'
  row?: boolean
  height?: Number
}

export const Text = styled.Text<TextProps>`
  color: ${(props) => props.color && props.theme.colors[props.color] || props.theme.colors.text};
  font-size: ${(props) => props.size && props.theme.size[props.size] || props.theme.size.body};
  font-family: ${(props) => props.bold ? props.theme.fonts.bold : props.theme.fonts.regular};
  opacity: ${(props) => props.opacity || 1};
  text-align: ${(props) => props.center ? 'center' : 'auto'};
`

export const Button = styled.TouchableOpacity<ButtonProps>`
    height: ${(props) => !!props.height ? `${props.height}px` : '56px'};
    background-color: ${(props) => props.color && props.theme.colors[props.color] || 'transparent'};
    border-radius: ${({theme}) => theme.radius};
    align-items: center;
    justify-content: center;
    ${(props) => props.row ? `flex-direction: row;` : ''};
`

