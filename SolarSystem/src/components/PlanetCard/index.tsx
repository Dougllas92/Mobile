import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { SvgFromUri } from 'react-native-svg'
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'

import { Footer, Wrapper } from './styles'

import { Text } from '../../global'

interface PlanetProps extends TouchableOpacityProps {
  data: {
    id: number
    name: string
    type: string
    image: string
    resume: string
  }
}

const PlanetCard = ({ data, ...props } : PlanetProps) : JSX.Element => {
  const { colors } = useTheme();

  return(
    //@ts-ignore
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