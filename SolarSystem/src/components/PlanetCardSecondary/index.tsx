import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { SvgFromUri } from 'react-native-svg'
import { Feather } from '@expo/vector-icons'

import { 
  Wrapper,
  Planet,
  CardInfo,
  Header,
  Body,
  Footer
 } from './styles';

 import { Text, Button } from '../../global';
import { SizedBox } from '..';
import { useTheme } from 'styled-components';

interface PlanetCardSecondary {
  data: {
    id: string
    name: string
    type: string
    image: string
    resume: string
  },
} 

const PlanetCardSecondary = ({ data } : PlanetCardSecondary) : JSX.Element => {
  const { colors } = useTheme()
  return(
    <Wrapper>
      <Planet>
        <SvgFromUri 
          uri={data.image} 
          height={180}
          width={180}
          style={{ top: -30, left: -40 }}
        />
      </Planet>
      <CardInfo>
        <SizedBox height={10} />
        <Header>
          <Text size='subtitle' bold>{data.name}</Text>
          <Button height={24}>
            <Feather name='bookmark' size={24} color={colors.textOpacity} />
          </Button>
        </Header>
        <Body>
          <Text 
            size='caption' 
            opacity={0.65}
            style={{ 
              textAlign: 'justify',
              paddingRight: 16 
            }}  
          >{`${data.resume.substr(0,69)} ...`}</Text>
        </Body>
        <SizedBox height={12} />
        <Footer>
          <Text size='caption'>Continue lendo</Text>
          <SizedBox width={8} />
          <Feather name='arrow-right' size={16} color={colors.secondary} />
        </Footer>
      </CardInfo>
    </Wrapper>
  )
}

export default PlanetCardSecondary;