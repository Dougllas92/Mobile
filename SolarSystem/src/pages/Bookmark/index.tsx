import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FlatList } from 'react-native'

import { Wrapper } from './styles'

import { COLLECTION_BOOKMARK } from '../../config/storage'
import { PlanetDetailProps } from '../../interfaces'

import { SizedBox, PlanetCardSecondary, AppBackground } from '../../components'
import { Text } from '../../global'

const Bookmark: React.FC = () => {
  const [planets, setPlanets] = useState<PlanetDetailProps[]>([])

  async function loadPlanetBookmark() {
    const response = await AsyncStorage.getItem(COLLECTION_BOOKMARK)
    const storage: PlanetDetailProps[] = response ? JSON.parse(response) : []
    setPlanets(storage)
  }

  useEffect(() => {
    loadPlanetBookmark()
  },[])

  return( 
    <Wrapper>
      <AppBackground />

      <Text size='title'>Favoritos</Text>
      <SizedBox height={18} />

      <FlatList 
        data={planets}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <PlanetCardSecondary 
            data={item}
            handlePlanetSelect={() => {}}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Wrapper>
  )
}

export default Bookmark