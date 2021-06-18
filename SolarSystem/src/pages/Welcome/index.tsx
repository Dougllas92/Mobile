import React from 'react'
import { useNavigation } from '@react-navigation/core'

//styles
import { 
  Wrapper,
  Background,
  GroupButton,
  Gradient
} from './styles'

//icons
import { Feather } from '@expo/vector-icons'

//Components, Global and theme
import { Button, Text } from '../../global'
import { SizedBox } from '../../components'
import { useTheme } from 'styled-components'

const Welcome: React.FC = () => {
  const { size } = useTheme()
  const navigation = useNavigation()

  const height = size.height * 1.4

  function navigateToBottomTabs() {
    navigation.navigate('BottomTabs')
  }
  
  return(
    <Wrapper>
      <Background height={height} width={height} />

      <Text opacity={0.50}>aperte o cinto</Text>
      <Text size='title' center bold> 
        Comece sua jornada {'\n'}pelo sistema solar.
      </Text>

      <GroupButton>
        <Text size='caption' center>Pronto para a decolagem?</Text>
        <SizedBox height={16} />
        <Button onPress={() => navigateToBottomTabs()}>
          <Gradient>
            <Text bold>Começar agora</Text>
            <SizedBox width={16} />
            <Feather name='arrow-right' size={20} color='#FFF' />
          </Gradient>
        </Button>
      </GroupButton>
    </Wrapper>
  )
}

export default Welcome