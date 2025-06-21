'use client'
import { useState, useEffect, useContext } from 'react'
import ViewContent from '@/components/ViewContent'
import AlertMessage from '@/components/AlertMessage'
import SeparatorContext from '@/components/SepatatorContext'
import DeleteButton from '@/components/DeleteButton'
import FieldInput from '@/components/FieldInput'
import FieldDate from '@/components/FieldDate'
import ActionButtonsBlock from '@/components/ActionButtonsBlock'
import * as S from './style'
import { DataProvider } from '@/contexts'
import { redirect } from 'next/navigation'
import { putMember } from '@/commons/api'

export default function HandleMembers ({ navigation, params }) {
  const { setMembers, members } = useContext(DataProvider)
  const [member, setMember] = useState({})
  const [modalAlertVisible, setModalAlertVisible] = useState(false)
  const [password, setPassword] = useState('')
  const [capturedImage, setCapturedImage] = useState(null)
  const [calendarVisible, setCalendarVisible] = useState(false)
  const [editable, setEditable] = useState(true)

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
    const result = await putMember(member._id, member)
    if(result.id) {
      const updatedMembers = new Map(members)
      updatedMembers.set(member._id, member)
      setMembers(updatedMembers)
    }
    redirect('/members')
  }
  const handleDelete = async () => {
    if(!params?.id) return
    // const result = postMember(member.id, member)
    // if(result.success) {
    //   await updateDateStorage({ service: MembersService, set: setMembersList, groupId })        
    // }
    setModalAlertVisible(false)
    // showModal(result)
  }
  useEffect(() => {
    const { id } = params || {}
    if (id && members.has(id)) {
      setMember(members.get(id))
      setEditable(true)
    }
  }, [params, members])
  // useEffect(() => {
  //   const photo = capturedImage?.base64 ? `data:image/jpeg;base64,${capturedImage?.base64}` : params?.photo
  //   setPhotoMember(photo)
  // }, [capturedImage])
  const handleUpdateField = (field, value) => {
    const updatedMember = { ...member }
    updatedMember[field] = value
    setMember(updatedMember)
  }
  return <ViewContent allDisplay={true}>
    {/* <Modal
      visible={modalVisible}
      setVisible={setModalVisible}
      redirectTo={redirectTo}
      navigation={navigation}
      message={modalMessage}
      title={modalTitle}
    /> */}
    <AlertMessage
      message='Deseja realmente excluir este Membro?'
      title='Confirmação'
      visible={modalAlertVisible}
      setVisible={setModalAlertVisible}
      handleConfirm={handleDelete}
    />
    <AlertMessage
      message='Deseja Salvar/Atualizar este Membro?'
      title='Confirmação'
      visible={modalAlertVisible}
      setVisible={setModalAlertVisible}
      handleConfirm={handleSave}
    />
    <SeparatorContext label='Dados do Membro'>
      {editable && <DeleteButton
        handleClick={() => setModalAlertVisible(true)}
        label='Excluir Membro'
      />}
    </SeparatorContext>
    <S.Container>
      <S.ImageEditor>
        <S.Photo source={member.photo} />
        <S.ImageButton onClick={handleClickCamera}>
          Cam
          {/* <Icons name='camera' size={photoMember ? 30 : 90} color={COLORS.primaryBorder} /> */}
        </S.ImageButton>
      </S.ImageEditor>
      <FieldInput
        placeholderText='Insira o nome...'
        label='Nome'
        iconName='user'
        editable={editable}
        setValue={(value) => handleUpdateField('name', value)}
        value={member?.name}
      />
      <FieldInput
        placeholderText='Insira o usuário...'
        label='Usuário'
        type='username'
        iconName='envelope'
        editable={editable}
        setValue={(value) => handleUpdateField('username', value)}
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
          handleDate={(value) => handleUpdateField('birthday', value.toISOString())}
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
          onChange={({ target: { value } }) => handleUpdateField('type', value)}
        >
          <S.Option label="Usuário" value='user'/>
          <S.Option label="Intermediário" value='controller'/>
          <S.Option label="Administrador" value='admin'/>
        </S.Select>
      </FieldInput>
    </S.Container>
    <ActionButtonsBlock
      handleClick={() => setModalAlertVisible(true)}
      title='Salvar Usuario'
    />
  </ViewContent>
}
