import React from 'react'

import { Banner, Content, Wrapper, Title, Action } from './styles'

import { ButtonIcon } from '../../components/ButtonIcon'
import SizedBox from '../../components/SizedBox'

import BannerImg from '../../assets/banner.png'
import BgSvg from '../../assets/background.svg'
import LogoSvg from '../../assets/logo.svg'

import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import { useEffect } from 'react'

WebBrowser.maybeCompleteAuthSession()


export function SignIn(): JSX.Element {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '940495708000-sr35v0527kdqjfkvdnoce4kf9rmmradk.apps.googleusercontent.com'
  })

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;

      console.log(authentication)
      }
  },[response])

  return( 
    <Wrapper>
      <BgSvg />
      <Content>
        <Banner source={BannerImg} />
        <SizedBox height={10} />
        <LogoSvg />
        <SizedBox height={18} />
          <Title>
            Organize seus 
            boletos em um 
            só lugar
          </Title>

        <SizedBox height={20} />
        <Action>
          <ButtonIcon onPress={() => promptAsync()}/>
        </Action>
      </Content>
    </Wrapper>
  )
}
