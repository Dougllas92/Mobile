import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

//styles
import { 
  Wrapper,
  Background,
} from './styles'

import LottieView from 'lottie-react-native'
import { useTheme } from 'styled-components'

const Preload: React.FC = () => {
  const { size } = useTheme()  
  const height = size.height * 1.4
  const navigation = useNavigation();


  useEffect(() => {
    setTimeout(() => {
      async function fetchUsername() {
        const checkUser = await AsyncStorage.getItem('@solarsystem:user');

        if (checkUser !== null) {
          navigation.reset({ routes: [{ name: 'BottomTabs' }] });
        } else {
          navigation.reset({ routes: [{ name: 'Welcome' }] });
        }
      }
      fetchUsername();
    }, 1300)}, []);

  return(
    <Wrapper>
      <Background height={height} width={height} />
      <LottieView 
        source={require('../../assets/icons/load.json')} 
        autoPlay
        style={{ width: 200, height: 200}}
      />
    </Wrapper>
  )
}

export default Preload