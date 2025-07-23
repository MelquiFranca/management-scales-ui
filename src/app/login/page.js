'use client'
import { useState } from 'react'
import FieldInput from '@/components/FieldInput'
import ViewContent from '@/components/ViewContent'
import ImageIcon from '../../../public/assets/icon.png'
import * as S from './style'
import AlertMessage from '@/components/AlertMessage'
import ActionButtonsBlock from '@/components/ActionButtonsBlock'
import { login } from '@/commons/api'
import { useRouter } from 'next/navigation'

export default function Page () {
  const initialLoggedPage = '/scales'
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [modalAlertVisible, setModalAlertVisible] = useState(false)
  const router = useRouter()
  const handleLogin = async () => {
    setModalAlertVisible(true)
    const token = await login(username, password)
    if (token.length) router.push(initialLoggedPage)
    else setModalAlertVisible(false)
  }
  return (<ViewContent>
    <AlertMessage
      message='Aguarde enquanto validamos seu login...'
      title='Login'
      visible={modalAlertVisible}
      setVisible={setModalAlertVisible}
      activeActions={false}
    />
    <S.Container>
      <S.Image src={ImageIcon.src} />
      <FieldInput
        iconName='user'
        label='Email'
        type='text'
        placeholderText='Insira seu username'
        setValue={setUsername}
        value={username}
      />
      <FieldInput
        iconName='eye-slash'
        type='password'
        label='Senha'
        placeholderText='Insira sua senha'
        setValue={setPassword}
        value={password}
      />
      <ActionButtonsBlock
        iconName='door-open'
        handleClick={handleLogin}
        title='Entrar'
      />
    </S.Container>
  </ViewContent>)
}