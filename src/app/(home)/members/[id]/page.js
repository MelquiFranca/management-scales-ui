'use client'
import { useState, useEffect, use } from 'react'
import ViewContent from '@/components/ViewContent'
import Modal from '@/components/Modal'
import AlertMessage from '@/components/AlertMessage'
import SeparatorContext from '@/components/SepatatorContext'
import DeleteButton from '@/components/DeleteButton'
import FieldInput from '@/components/FieldInput'
import FieldDate from '@/components/FieldDate'
import ActionButtonsBlock from '@/components/ActionButtonsBlock'
import * as S from './style'
import { DataProvider } from '@/contexts'
import { useContext } from 'react'
import { postMember } from '@/api'

export default function HandleMembers ({ navigation, params }) {
  const { setMembers, members } = useContext(DataProvider)
  const [member, setMember] = useState({})
  const [modalVisible, setModalVisible] = useState(false)
  const [modalAlertVisible, setModalAlertVisible] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const [modalTitle, setModalTitle] = useState('')
  const [redirectTo, setRedirectTo] = useState(null)
  const [password, setPassword] = useState('')
  const [capturedImage, setCapturedImage] = useState(null)
  const [calendarVisible, setCalendarVisible] = useState(false)
  const [editable, setEditable] = useState(true)

  const showModal = ({ message, title, success }) => {
    setModalAlertVisible(false)
    setModalMessage(message)
    setModalTitle(title)
    setModalVisible(true)
    setRedirectTo(success ? 'Membros' : null)
  }
  const handleClickCamera = async () => {
    const { canceled, assets: [image] } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      base64: true
    })
    if(!canceled) setCapturedImage(image)
  }
  const handleSave = async () => {
    const result = postMember(member.id, member)
    if(result.id) {
      const updatedMembers = new Map(members)
      updatedMembers.set(member._id, member)
      setMembers(updatedMembers)
    }
    showModal(result)
  }
  const handleDelete = async () => {
    if(!params?.id) return showModal({ 
      message: 'Nenhum membro informado',
      success: false,
      title: 'Erro'
    })
    // const result = postMember(member.id, member)
    // if(result.success) {
    //   await updateDateStorage({ service: MembersService, set: setMembersList, groupId })        
    // }
    setModalAlertVisible(false)
    // showModal(result)
  }
  useEffect(() => {
    if (params?.id && members.has(params.id)) {
      setMember(members.get(params.id))
      setEditable(true)
    }
  }, [])
  // useEffect(() => {
  //   const photo = capturedImage?.base64 ? `data:image/jpeg;base64,${capturedImage?.base64}` : params?.photo
  //   setPhotoMember(photo)
  // }, [capturedImage])
  const handleUpdate = (field, value) => {
    const updatedMember = { ...member }
    updatedMember[field] = value
    setMember(updatedMember)
  }
  return <ViewContent allDisplay>
    <Modal
      visible={modalVisible}
      setVisible={setModalVisible}
      redirectTo={redirectTo}
      navigation={navigation}
      message={modalMessage}
      title={modalTitle}
    />
    <AlertMessage
      message='Deseja realmente excluir este Membro?'
      title='Confirmação'
      visible={modalAlertVisible}
      setVisible={setModalAlertVisible}
      handleConfirm={handleDelete}
    />
    <SeparatorContext label='Dados do Membro'>
      {editable && <DeleteButton
        handleClick={() => setModalAlertVisible(true)}
        label='Excluir Membro'
      />}
    </SeparatorContext>
    <S.Container>
      <S.ImageEditor>
        {
          member?.photo && <S.Photo
            source={member.photo}
            contentFit='cover'
          />
        }
        <S.ImageButton onClick={handleClickCamera}>
          Imagem
          {/* <Icons name='camera' size={photoMember ? 30 : 90} color={COLORS.primaryBorder} /> */}
        </S.ImageButton>
      </S.ImageEditor>
      <FieldInput
        placeholderText='Insira o nome...'
        label='Nome'
        iconName='user'
        editable={editable}
        setValue={(value) => handleUpdate('name', value)}
        value={member?.name}
      />
      <FieldInput
        placeholderText='Insira o usuário...'
        label='Usuário'
        type='username'
        iconName='envelope'
        editable={editable}
        setValue={(value) => handleUpdate('username', value)}
        value={member?.username}
      />
      <FieldInput
        placeholderText='Insira a senha...'
        label='Senha'
        iconName='eye-slash'
        editable={editable}
        secureTextEntry={true}
        setValue={setPassword}
        value={password}
      />
      <FieldInput
        label='Data de Nascimento'
        iconName='calendar'
        editable={editable}
      >
        <FieldDate
          date={new Date(member?.birthday)}
          handleDate={(value) => handleUpdate('birthday', value.toISOString())}
          setVisible={setCalendarVisible}
          visible={calendarVisible}
        />
      </FieldInput>
      <FieldInput
        label='Tipo de Permissão'
        iconName='user-secret'
        editable={editable}
      >
        <S.Select
          value={member?.type}
          onChange={({ target: { value } }) => handleUpdate('type', value)}
        >
          <S.Option label="Usuário" value='user'/>
          <S.Option label="Intermediário" value='controller'/>
          <S.Option label="Administrador" value='admin'/>
        </S.Select>
      </FieldInput>
    </S.Container>
    <ActionButtonsBlock handleClick={handleSave} title='Salvar Usuario'/>
  </ViewContent>
}
