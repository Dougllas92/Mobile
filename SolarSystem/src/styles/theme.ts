import { Dimensions } from "react-native"

export default {
  colors: {
    background: '#151515',
    backgroundSecondary: '#FFF',
    text: '#fff',
    textSecondary: '#151515',
    textOpacity: '#FFFFFF65',

    primary: '#333333',
    secondary: '#EF5F53'
  },

  gradients: {
    button: ['#EF5F53','#FA8F70'],
    blue: ['#5935FF','#47408E'],
    pink: ['#FF6CD9','#FF2184'],
    cyan: ['#01D4E4','#009DE0'],
    yellow: ['#F9C270','#FFAA2B']
  },

  fonts: {
    regular: 'Roboto_400Regular',
    bold: 'Roboto_700Bold'
  },

  size: {
    background: Math.round(Dimensions.get('window').height * 1.5),
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    title: '32px',
    subtitle: '26px',
    body: '16px',
    caption: '14px',
    small: '12px'
  },

  radius: '8px'
}