import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

//styles
import { 
  Wrapper,
  Background,
  Content,
  Gradient
} from './styles'

//icons
import { Feather } from '@expo/vector-icons'

//Components, Global and theme
import { Button, Text } from '../../global'
import { SizedBox, Input } from '../../components'
import { useTheme } from 'styled-components'
import { useState } from 'react'

const UserIdentification: React.FC = () => {
  const { size, colors } = useTheme()
  const navigation = useNavigation()
  const [name, setName] = useState('');

  const height = size.height * 1.4

  async function navigateToBottomTabs() {
    if(!name)
      return Alert.alert('Me diz como podemos chamar você')

    try {
      await AsyncStorage.setItem('@solarsystem:user', name)
    } catch(err) {
      Alert.alert('Não foi possivel salvar seu nome')
    }

    navigation.navigate('BottomTabs')
  }
  
  return(
    <Wrapper>
      <Background height={height} width={height} />
      <Content>
        <Text size='subtitle' center> 
          Como podemos {'\n'}chamar você?
        </Text>
        <SizedBox height={60} />
        <Input
          textAlign='center' 
          placeholder='Digite um nome'
          placeholderTextColor={colors.textOpacity}

          onChangeText={(text) => setName(text)}
          value={name}
        />
        
        <SizedBox height={20} />
        <Button
          disabled={!!name ? false : true} 
          onPress={() => navigateToBottomTabs()}
        >
          <Gradient>
            <Text bold>Confirmar</Text>
          </Gradient>
        </Button>
      </Content>
    </Wrapper>
  )
}

export default UserIdentification