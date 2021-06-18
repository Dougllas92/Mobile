import React from 'react'

import { 
  Wrapper,
  Category,
  Button
} from './styles'

import { Text } from '../../global'
import SizedBox from '../SizedBox'

import { useTheme } from 'styled-components'

import Planet from '../../assets/icons/planets.svg'
import Asteroid from '../../assets/icons/asteroids.svg'
import Star from '../../assets/icons/stars.svg'
import Galaxy from '../../assets/icons/galaxies.svg'

interface CategoryProps {
  handleCategorySelected: (category: string) => void
}

const CategoryCard = ({ handleCategorySelected } : CategoryProps) : JSX.Element => {
  const { gradients } = useTheme()

  const categories = [
    {
      id: 'planet', 
      name: 'Planetas', 
      color: gradients.blue, 
      icon: <Planet height={32} width={32} /> 
    },
    {
      id: 'asteroid', 
      name: 'Asteroides', 
      color: gradients.pink, 
      icon: <Asteroid height={32} width={32} />
    },
    {
      id: 'star', 
      name: 'Estrelas', 
      color: gradients.cyan, 
      icon: <Star height={32} width={32}/>
    },
    {
      id: 'galaxy', 
      name: 'Galáxias', 
      color: gradients.yellow, 
      icon: <Galaxy height={32} width={32}/>
    }
  ]

  return(
    <Wrapper>
      {categories.map(category =>(
        <Button key={category.id} onPress={() => handleCategorySelected(category.id)}>
          <Category colors={category.color}>
              {category.icon}

              <SizedBox height={4} />
              <Text size='caption'>{category.name}</Text>
          </Category>
        </Button>
      ))
      }
    </Wrapper>
  )
}

export default CategoryCard