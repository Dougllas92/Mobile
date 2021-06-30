import React, { useState, useEffect } from 'react'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'
import { FlatList } from 'react-native'

import { Header, Wrapper } from './styles'

import { SizedBox, Input, PlanetCardSecondary, AppBackground } from '../../../components'
import { Text } from '../../../global'

import { PlanetDetailProps } from '../../../interfaces'
import api from '../../../services/api'

type SearchProps = {
  search: string
}

const PlanetSearch = ({ search } : SearchProps ): JSX.Element => {
  const navigation = useNavigation()
  const { colors } = useTheme()
  
  const [planetsFiltered, setPlanetsFiltered] = useState<PlanetDetailProps[]>([])
  const [planets, setPlanets] = useState<PlanetDetailProps[]>([])
  const [title, setTitle] = useState('Pesquisar')
  const [query, setQuery] = useState('')

  async function fetchPlanets() {
    try {
      const planet: PlanetDetailProps[] = await api.fetchPlanets()
      setPlanets(planet)
      
      if(!!search) {
        setQuery(search)
        const filtered = planet.filter(item => 
          item.searchTags.toString().indexOf(search.toLocaleLowerCase()) >= 0  
        )
        setPlanetsFiltered(filtered)
        setTitle('Resultado da busca')
      } else {
        setPlanetsFiltered(planet)
      }
    } catch(err) {
      console.log('Erro')
    }    
  }

  function queryFilter() {
    const filtered = planets.filter(planet =>
      planet.searchTags.toString().indexOf(query.toLocaleLowerCase()) >= 0
    )
    setPlanetsFiltered(filtered)
  }

  function navigateToPlanetDetail(planetId: number) {
    navigation.navigate('Search', { page: 2, planetId })
  }

  useEffect(() => {
    fetchPlanets()
  },[search])

  return(
    <Wrapper>
      <AppBackground />
      <Header>
        <BorderlessButton onPress={() => navigation.goBack()} >
          <Feather name='arrow-left' size={24} color={colors.text} />
        </BorderlessButton>
        <Feather name='settings' size={24} color={colors.text} />  
      </Header>
      <SizedBox height={20} />

      <Text size='title' bold>{title}</Text>
      <SizedBox height={30} />

      <Input 
        placeholderTextColor={colors.textOpacity}
        placeholder='Procure planetas, asteroides, estrelas...'

        onChangeText={(text) => setQuery(text)}
        onSubmitEditing={() => queryFilter()}
        value={query}
      />
      <SizedBox height={20} />

      <FlatList 
        data={planetsFiltered}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <PlanetCardSecondary 
            data={item}
            handlePlanetSelect={() => navigateToPlanetDetail(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Wrapper>
  )
}

export default PlanetSearch