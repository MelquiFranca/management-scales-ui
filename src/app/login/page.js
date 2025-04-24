'use client'
import { useState, useEffect } from 'react'
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
  const [modalTitle, setModalTitle] = useState('')
  const [redirectTo, setRedirectTo] = useState(null)
  // const { setItem } = useAsyncStorage('@loggedMember')
  // const { setLoggedMember } = useContext(HandleLoadLoggedMembersContext)
  useEffect(() => {
    // subscription()
  }, [])
  const showModal = ({ message, title, success }) => {
    setModalMessage(message)
    setModalTitle(title)
    setModalVisible(true)
    setRedirectTo(success ? 'Escalas' : null)
  }
  const handleLogin = async () => {
    setModalAlertVisible(true)
    // const result = await MembersService.validateLogin({ email, password })
    // if(result.success) {
    //   setItem(JSON.stringify(result.data))
    //   setLoggedMember(result.data)
    //   setModalAlertVisible(false)
    //   setTimeout(() => navigation.navigate('Main'), 200)
    //   return
    // }
    // showModal(result)
    setModalAlertVisible(false)
  }
  return (<ViewContent>
    <Modal
      visible={modalVisible}
      setVisible={setModalVisible}
      redirectTo={redirectTo}
      navigation={navigation}
      message={modalMessage}
      title={modalTitle}
    />
    <AlertMessage
      message='Aguarde enquanto validamos seu login...'
      title={modalTitle}
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