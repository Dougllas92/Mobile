import React, { useEffect, useRef } from 'react'
import { Dimensions } from 'react-native'
import { useRoute } from '@react-navigation/native'

import {  Wrapper, Screen, Page } from './styles'

import PlanetSearch from './PlanetSearch'
import PlanetDetail from './PlanetDetail'

interface SearchProps {
  search: string
  page: number
  planetId: number
}

const Search: React.FC = () => {
  const route = useRoute()
  const scrollRef = useRef()
  const { search, page, planetId } = route.params as SearchProps

  function pageDetail(pages: number) {
    const window = Math.round(Dimensions.get('window').width)
    //@ts-ignore
    scrollRef.current.scrollTo({
      x: pages * window,
      animated: false
    })
  }

  useEffect(() => {
    pageDetail(page)
  },[search, page, planetId])

  return(
    <Wrapper>
      <Screen
        //@ts-ignore
        ref={scrollRef}
        horizontal
        pagingEnabled
        scrollEnabled={false}
      >
        <Page>
          <PlanetSearch search={search} />
        </Page>
        <Page>
          <PlanetDetail planetId={planetId} />
        </Page>
      </Screen>
    </Wrapper>
  )
}

export default Search