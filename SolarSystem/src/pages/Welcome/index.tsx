import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { useTheme } from 'styled-components'

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

//Image Background
import BGImg from '../../assets/backgrounds/solar-system.jpg'

const Welcome: React.FC = () => {
  const { size } = useTheme()
  const navigation = useNavigation()

  const height = size.height

  function navigateToBottomTabs() {
    navigation.navigate('UserIdentification')
  }
  
  return(
    <Wrapper>
      <Background 
        source={BGImg} 
      />

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