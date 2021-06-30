import React from 'react'
import { useTheme } from 'styled-components'

import { 
  Wrapper,
  Category,
  Button
} from './styles'

import { Text } from '../../global'
import SizedBox from '../SizedBox'

import Asteroid from '../../assets/icons/asteroids.svg'
import Galaxy from '../../assets/icons/galaxies.svg'
import Planet from '../../assets/icons/planets.svg'
import Star from '../../assets/icons/stars.svg'

interface CategoryProps {
  handleCategorySelected: (category: string) => void
}

const CategoryCard = ({ handleCategorySelected } : CategoryProps) : JSX.Element => {
  const { gradients } = useTheme()

  const categories = [
    {
      id: 'planeta', 
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
      id: 'sol', 
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
        <Button 
          activeOpacity={0.7}
          key={category.id} 
          onPress={() => handleCategorySelected(category.id)}>
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