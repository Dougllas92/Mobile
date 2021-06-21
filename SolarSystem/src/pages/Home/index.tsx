import React, { useState, useEffect} from 'react'
import { Alert, FlatList } from 'react-native'

import { 
  Wrapper,
  Background,
  Header,
  Geet,
  Geetings,
  Categories,
  Planets
} from './styles'

import { Text } from '../../global'
import { CategoryCard, GradientText, Input, PlanetCard, SizedBox } from '../../components'

import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'

import api from '../../services/api'
import { useNavigation } from '@react-navigation/native'

import { PlanetDetailProps } from '../../interfaces'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface PlanetProps {
    id: string
    name: string
    type: string
    image: string
    resume: string
}

const Home: React.FC = () => {
  const theme = useTheme()
  const navigation = useNavigation()

  const [planets, setPlanets] = useState<PlanetDetailProps[]>([])
  const [planetsFiltered, setPlanetFiltered] = useState<PlanetDetailProps[]>([])
  const [search, setsearch] = useState('')
  const [username, setUsername] = useState('')

  async function fetchPlanets() {
    try {
      const planet = await api.fetchPlanets()
      setPlanets(planet)
      setPlanetFiltered(planet)
    } catch(err) {
      Alert.alert('Erro ao buscar dados')
    }
  }

  async function handleCategorySelected(category: string) {
    if(category === 'galaxy')
      return setPlanetFiltered(planets)

    const filtered = planets.filter(planet =>
      planet.type.includes(category)  
    )

    setPlanetFiltered(filtered)
  }

  async function searchPlanet() {
    navigation.navigate('Search', { search, page: -1 })
  }

  async function handlePageDetail( planetId: number ) {
    navigation.navigate('Search', { page: 2, planetId })
  }

  async function loadingUser() {
    const user = await AsyncStorage.getItem('@solarsystem:user')

    setUsername(user || '')
  }

  useEffect(() => {
    loadingUser()
    fetchPlanets()
  }, [])

  return(
    <Wrapper>
      <Background />
      <Header>
        <Geet>
          <Geetings>
            <Text size='title' bold>Olá, </Text>
            
            <GradientText 
              style={{
                fontSize: 32,
                fontWeight: 'bold'
              }}
            >
              {username}
            </GradientText>
          </Geetings>
          <Feather name='settings' size={24} color={theme.colors.text} />
        </Geet>
        <Text>O que você vai aprender hoje?</Text>
        
        <SizedBox height={30} />
        <Input
          iconActive
          placeholderTextColor={theme.colors.textOpacity} 
          placeholder='Procure planetas, asteroides, estrelas...'
          
          onChangeText={(text) => setsearch(text)}
          value={search}
          onSubmitEditing={() => searchPlanet()}
        />
      </Header>

      <Categories>
        <Text>Categorias</Text>
        <SizedBox height={10} />
        <CategoryCard handleCategorySelected={handleCategorySelected}/>

        <SizedBox height={30} />
        <Text>Sistema Solar</Text>
      </Categories>
      <Planets>
        <FlatList 
          data={planetsFiltered}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlanetCard data={item} onPress={() => handlePageDetail(parseInt(item.id))} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </Planets>

    </Wrapper>
  )
}

export default Home