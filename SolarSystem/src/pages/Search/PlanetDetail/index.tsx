import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { BorderlessButton } from 'react-native-gesture-handler'
import { ActivityIndicator, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'
import { SvgUri } from 'react-native-svg'

import { 
  Wrapper,
  Header,
  Background,
  Planet,
  Content,
  Block,
  BlockHeader,
  BlockIcon,
  BlockResume,
  Section,
  SectionContent,
  Description,
  Separator,
  TextValue
} from './styles'

import constellationImg from '../../../assets/backgrounds/constellation.jpg'

import { SizedBox } from '../../../components'
import { Text } from '../../../global'

import { COLLECTION_BOOKMARK } from '../../../config/storage'
import { PlanetDetailProps } from '../../../interfaces'
import api from '../../../services/api'

const width = Math.round((Dimensions.get('window').width) * 0.55)

type Planetprops = {
  planetId: number
}

const PlanetDetail = ({ planetId }: Planetprops): JSX.Element => {
  const { colors } = useTheme()
  const { goBack } = useNavigation()

  const [planet, setPlanet] = useState<PlanetDetailProps>({} as PlanetDetailProps)
  const [geographySection, setGeographySection] = useState(false)
  const [hydrologySection, setHydrologySection] = useState(false)
  const [featuresSection, setFeaturesSection] = useState(false)
  const [introSection, setIntroSection] = useState(false)

  if(planetId === undefined) 
    return <ActivityIndicator />

  async function handleAddPlanetBookmark(planet: PlanetDetailProps) {
    const response = await AsyncStorage.getItem(COLLECTION_BOOKMARK)
    const storage = response ? JSON.parse(response) : []
  
    const data = {
      ...planet,
      bookmark: true
    }
  
    await AsyncStorage.setItem(COLLECTION_BOOKMARK, 
      JSON.stringify([...storage, data]))
  }
  
  //Search planet API and convert array in object
  async function fetchPlanet() {
    const data = await api.searchPlanet(planetId)
    setPlanet(data)
  }

  useEffect(() => {
    fetchPlanet()
  }, [planetId])

  return(
    <Wrapper>
      <Header>
        <Background source={constellationImg} />
        <BorderlessButton onPress={() => goBack()}>
          <Feather name='arrow-left' size={24} color={colors.text} /> 
        </BorderlessButton>
        <Feather name='settings' size={24} color={colors.text} />
      </Header>
      <Planet>
        <SvgUri uri={planet.image} height={width} width={width} />
      </Planet>
      <SizedBox height={40} />
      <Content>
        <Block>
          <BlockHeader>
            <Text size='title' bold color='textSecondary'>{planet.name}</Text>
            <BlockIcon>
              <Feather name='bookmark' size={24} color={colors.textSecondary} />
              <SizedBox width={16} />
              <Feather name='share-2' size={24} color={colors.textSecondary} />
            </BlockIcon>
          </BlockHeader>
          <SizedBox height={24} />
          <BlockResume>
            <TextValue>{planet.resume?.substr(0, 74)}</TextValue>
          </BlockResume>
        </Block>


        <SizedBox height={30} />
        {/* Introdução */}
        <Block>
          <Section onPress={() => setIntroSection(!introSection)}>
            <Feather name={introSection ? 'chevron-right' : 'chevron-down'} size={24} color={colors.textSecondary} />
            <SizedBox width={10} />
            <Text bold color='textSecondary'>Introdução</Text>
          </Section>
          
          {!!introSection ?
            <Description>
              <TextValue>{planet.resume}</TextValue>
            </Description>
            : null
          }
        </Block>
        <Separator />
        {/* Características Físicas */}
        <Block>
          <Section onPress={() => setFeaturesSection(!featuresSection)}>
            <Feather name={featuresSection ? 'chevron-right' : 'chevron-down'} size={24} color={colors.textSecondary} />
            <SizedBox width={10} />
            <Text bold color='textSecondary'>Características Físicas</Text>
          </Section>
       
          {!!featuresSection ?
            <Description>
              <SizedBox height={10} />
              <SectionContent>
                <Text size='caption' color='textSecondary' bold>Distância média ao Sol:</Text>
                <TextValue> {planet.features.sunDistance}</TextValue>
              </SectionContent>
              <SectionContent>
                <Text size='caption' color='textSecondary' bold>Velocidade média orbital:</Text>
                <TextValue> {planet.features.orbitalSpeed}</TextValue>
              </SectionContent>
              <SectionContent>
                <Text size='caption' color='textSecondary' bold>Período orbital:</Text>
                <TextValue> {planet.features.orbitalPeriod}</TextValue>
              </SectionContent>
              <SectionContent>
                <Text size='caption' color='textSecondary' bold>Período de rotação:</Text>
                <TextValue> {planet.features.rotationDuration}</TextValue>
              </SectionContent>
              <SectionContent>
                <Text size='caption' color='textSecondary' bold>Diâmetro equatorial:</Text>
                <TextValue> {planet.features.Diameter}</TextValue>
              </SectionContent>
              <SectionContent>
                <Text size='caption' color='textSecondary' bold>Quantidade de satélites</Text>
                <TextValue> {planet.features.satellites.number}</TextValue>
              </SectionContent>
            </Description>
            : null
          }
        </Block>
        <Separator />
        {/* Hidrologia */}
        <Block>
          <Section onPress={() => setHydrologySection(!hydrologySection)}>
            <Feather name={hydrologySection ? 'chevron-right' : 'chevron-down'} size={24} color={colors.textSecondary} />
            <SizedBox width={10} />
            <Text bold color='textSecondary'>Hidrologia</Text>
          </Section>
          
          {!!hydrologySection ?
            <Description>
              <TextValue>{planet.resume}</TextValue>
            </Description>
            : null
          }
        </Block>
        <Separator />
        {/* Geografia */}
        <Block>
          <Section onPress={() => setGeographySection(!geographySection)}>
            <Feather name={geographySection ? 'chevron-right' : 'chevron-down'} size={24} color={colors.textSecondary} />
            <SizedBox width={10} />
            <Text bold color='textSecondary'>Geografia</Text>
          </Section>
          
          {!!geographySection ?
            <Description>
              <TextValue>{planet.resume}</TextValue>
            </Description>
            : null
          }
        </Block>
      </Content>
    </Wrapper>
  )
}

export default PlanetDetail