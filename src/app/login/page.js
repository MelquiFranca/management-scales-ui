'use client'
import { useState } from 'react'
import FieldInput from '@/components/FieldInput'
import ViewContent from '@/components/ViewContent'
import ImageIcon from '../../../public/assets/icon.png'
import * as S from './style'
import Modal from '@/components/Modal'
import AlertMessage from '@/components/AlertMessage'
import ActionButtonsBlock from '@/components/ActionButtonsBlock'

export default function Page () {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [modalMessage, setModalMessage] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [modalAlertVisible, setModalAlertVisible] = useState(false)
  const [redirectTo, setRedirectTo] = useState(null)
  const handleLogin = async () => {
    setModalAlertVisible(true)  
    setModalAlertVisible(false)
  }
  return (<ViewContent>
    <Modal
      visible={modalVisible}
      setVisible={setModalVisible}
      redirectTo={redirectTo}
      navigation={navigation}
      message={modalMessage}
      title='Login'
    />
    <AlertMessage
      message='Aguarde enquanto validamos seu login...'
      title='Login'
      visible={modalAlertVisible}
      setVisible={setModalAlertVisible}
      activeActions={false}
      customizeStyle={{ height: '60%' }}
    />
    <S.Container>
      <S.Image src={ImageIcon} />
      <FieldInput
        iconName='user'
        label='Email'
        type='text'
        placeholderText='Insira seu email'
        setValue={setEmail}
        value={email}
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
        title='Fazer Login'
      />
    </S.Container>
  </ViewContent>)
}