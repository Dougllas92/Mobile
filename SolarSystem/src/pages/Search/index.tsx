import React from 'react'
import { useRoute } from '@react-navigation/native'

import {  Wrapper } from './styles'

import PlanetSearch from './PlanetSearch'
import PlanetDetail from './PlanetDetail'

interface SearchProps {
  search: string
  page: number
  planetId: number
}

const Search: React.FC = () => {
  const route = useRoute()
  const { search, page, planetId } = route.params as SearchProps

  return(
    <Wrapper>
      {(page === 1) 
        ? <PlanetSearch search={search} />
        : <PlanetDetail planetId={planetId} />
      }      
    </Wrapper>
  )
}

export default Search