import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native'

import { Header, Wrapper, Background } from './styles'

import { Text } from '../../../global'
import { SizedBox, Input } from '../../../components'
import { useTheme } from 'styled-components'

import { Feather } from '@expo/vector-icons'
import PlanetCardSecondary from '../../../components/PlanetCardSecondary'

import api from '../../../services/api'
import { useNavigation } from '@react-navigation/native'

import { PlanetDetailProps } from '../../../interfaces'

interface PlanetProps {
    id: string
    name: string
    type: string
    image: string
    resume: string
    searchTags: Array<string>
}

interface SearchProps {
  search: string
}

const PlanetSearch = ({ search } : SearchProps ): JSX.Element => {
  const navigation = useNavigation()
  const { colors } = useTheme()
  const [title, setTitle] = useState('Pesquisar')
  const [planets, setPlanets] = useState<PlanetDetailProps[]>([])
  const [planetsFiltered, setPlanetsFiltered] = useState<PlanetDetailProps[]>([])
  const [query, setQuery] = useState('')

  async function fetchPlanets() {
    try {
      const planet = await api.fetchPlanets()
      setPlanets(planet)
      setPlanetsFiltered(planet)
    } catch(err) {
      console.log('Erro')
    }    
  }

  function searchPlanet() {
    const filtered = planets.filter(planet =>
      planet.searchTags.toString().indexOf(search.toLocaleLowerCase()) >= 0
    )
    setPlanetsFiltered(filtered)
    setQuery(search)
  }

  function queryPlanet() {
    const filtered = planets.filter(planet =>
      planet.searchTags.toString().indexOf(query.toLocaleLowerCase()) >= 0
    )
    setPlanetsFiltered(filtered)
  }

  function navigateToPlanetDetail(planetId: number) {
    navigation.navigate('Search', { page: 2, planetId})
  }

  useEffect(() => {
    fetchPlanets()
  },[])

  useEffect(() => {
    searchPlanet()
  },[search])

  return(
    <Wrapper>
      <Background />
      <Header>
        <Feather name='arrow-left' size={24} color={colors.text} />
        <Feather name='settings' size={24} color={colors.text} />  
      </Header>
      <SizedBox height={20} />

      <Text size='title' bold>{title}</Text>
      <SizedBox height={30} />

      <Input 
        placeholderTextColor={colors.textOpacity}
        placeholder='Procure planetas, asteroides, estrelas...'

        onChangeText={(text) => setQuery(text)}
        onSubmitEditing={() => queryPlanet()}
        value={query}
      />
      <SizedBox height={20} />

      <FlatList 
        data={planetsFiltered}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <PlanetCardSecondary 
            data={item} 
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Wrapper>
  )
}

export default PlanetSearch;