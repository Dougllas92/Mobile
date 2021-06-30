import React, { useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { Alert, FlatList } from 'react-native'
import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'
import LottieView from 'lottie-react-native'

import { 
  Wrapper,
  Header,
  Geet,
  Geetings,
  Categories,
  Planets
} from './styles'

import LoadLottie from '../../assets/icons/load.json'

//Components
import { AppBackground, CategoryCard, GradientText, Input, PlanetCard, SizedBox } from '../../components'
import { Text, Button } from '../../global'

//Interface and Api
import { COLLECTION_USERS } from '../../config/storage'
import { PlanetDetailProps } from '../../interfaces'
import api from '../../services/api'
import Load from '../../components/Load'

const Home: React.FC = () => {
  const navigation = useNavigation()
  const theme = useTheme()

  const [planetsFiltered, setPlanetFiltered] = useState<PlanetDetailProps[]>([])
  const [planets, setPlanets] = useState<PlanetDetailProps[]>([])
  const [username, setUsername] = useState('')
  const [search, setsearch] = useState('') 
  const [loading, setLoading] = useState(true) 

  async function fetchPlanets() {
    try {
      const planet: PlanetDetailProps[] = await api.fetchPlanets()
      setPlanets(planet)
      setPlanetFiltered(planet)
    } catch(err) {
      Alert.alert('Erro ao buscar dados')
    } finally {
      setLoading(false)
    }
  }
  
  async function loadingUser() {
    const user = await AsyncStorage.getItem(COLLECTION_USERS)
    setUsername(user || '')
  }

  async function handleCategorySelected(category: string) {
    if(category === 'galaxy')
      return setPlanetFiltered(planets)

    const filtered: PlanetDetailProps[] = planets.filter(planet =>
      planet.searchTags.includes(category)  
    )

    if(category === 'planeta') {
      // @ts-ignore
      setPlanetFiltered(filtered.shift())
    }

    setPlanetFiltered(filtered)
  }

  async function searchPlanet() {
    navigation.navigate('Search', { search, page: 1 })
  }

  async function handlePageDetail( planetId: number ) {
    navigation.navigate('Search', { page: 2, planetId })
  }

  useEffect(() => {
    loadingUser()
    fetchPlanets()
  }, [])

  return(
    <Wrapper>
      <AppBackground />
      <Header>
        <Geet>
          <Geetings>
            <Text size='title' bold>Olá, </Text>
            
            <GradientText style={{ fontSize: 32, fontWeight: 'bold' }} >
              {username}
            </GradientText>
          </Geetings>
          <Button
            height={24} 
            activeOpacity={0.7}
          >
            <Feather name='settings' size={24} color={theme.colors.text} />
          </Button>
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
        {loading ?
          <LottieView source={LoadLottie} autoPlay style={{ width: 200, height: 200}} />
          :
          <FlatList 
            data={planetsFiltered}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <PlanetCard data={item} onPress={() => handlePageDetail(item.id)} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        }
      </Planets>

    </Wrapper>
  )
}

export default Home