import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/core'
import { useTheme } from 'styled-components'
import { Alert } from 'react-native'

//styles
import { 
  Wrapper,
  Background,
  Content,
  Gradient
} from './styles'

//Image Background
import BGImg from '../../assets/backgrounds/solar-system.jpg'

import { COLLECTION_USERS } from '../../config/storage'

import { SizedBox, Input } from '../../components'
import { Button, Text } from '../../global'

const UserIdentification: React.FC = () => {
  const { colors } = useTheme()
  const navigation = useNavigation()
  const [name, setName] = useState('');

  async function navigateToApp() {
    if(!name)
      return Alert.alert('Me diz como podemos chamar você')

    try {
      await AsyncStorage.setItem(COLLECTION_USERS, name)
    } catch(err) {
      Alert.alert('Não foi possivel salvar seu nome')
    }

    navigation.navigate('AppRoutes')
  }
  
  return(
    <Wrapper>
      <Background source={BGImg}/>
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
          onPress={() => navigateToApp()}
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