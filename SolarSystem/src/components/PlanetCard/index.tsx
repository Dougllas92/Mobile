import React from 'react'
import { SvgFromUri } from 'react-native-svg'
import { TouchableOpacityProps } from 'react-native'

import { Footer, Wrapper } from './styles'

import { Feather } from '@expo/vector-icons'
import { Text } from '../../global'
import { useTheme } from 'styled-components'

interface PlanetProps extends TouchableOpacityProps {
  data: {
    id: string
    name: string
    type: string
    image: string
    resume: string
  }
}

const PlanetCard = ({ data, ...props } : PlanetProps) : JSX.Element => {
  const { colors } = useTheme();

  return(
    <Wrapper key={data.id} {...props}>
      <SvgFromUri
        uri={data.image}
        height={164}
        width={164}
        style={{top: -40, left: -45}}
      />

      <Footer>
        <Text>{data.name}</Text>
        <Feather name='arrow-right' size={20} color={colors.secondary} />
      </Footer>
    </Wrapper>
  )
}

export default PlanetCard