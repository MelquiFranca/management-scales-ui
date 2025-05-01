'use client'
import { useState } from 'react'
import ViewContent from '@/components/ViewContent'
import Modal from '@/components/Modal'
import AlertMessage from '@/components/AlertMessage'
import SeparatorContext from '@/components/SepatatorContext'
import DeleteButton from '@/components/DeleteButton'
import FieldInput from '@/components/FieldInput'
import FieldDate from '@/components/FieldDate'
import ActionButtonsBlock from '@/components/ActionButtonsBlock'
import * as S from './style'

export default function HandleMembers ({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false)
  const [modalAlertVisible, setModalAlertVisible] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const [modalTitle, setModalTitle] = useState('')
  const [redirectTo, setRedirectTo] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [typePermission, setTypePermission] = useState(false)
  const [capturedImage, setCapturedImage] = useState(null)
  const [photoMember, setPhotoMember] = useState(null)
  const [birthday, setBirthday] = useState(new Date())
  const [calendarVisible, setCalendarVisible] = useState(false)
  const [editable, setEditable] = useState(false)
  // const { loggedMember: { groupId, _id: updatedSponsor } } = useContext(HandleLoadLoggedMembersContext)
  // const { setItem: setMembersList } = useAsyncStorage('@members')

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
    const result = await MembersService.create({
      _id: params?._id,
      email,
      name,
      password,
      type: typePermission,
      groupId,
      birthday,
      photo: photoMember,
      updatedSponsor
    })
    if(result?.success) {
      await updateDateStorage({ service: MembersService, set: setMembersList, groupId })
    }
    showModal(result)
  }
  const handleDelete = async () => {
    if(!params?._id) return showModal({ 
      message: 'Nenhum membro informado',
      success: false,
      title: 'Erro'
    })
    const result = await MembersService.deleteItem(params._id)
    if(result.success) {
      await updateDateStorage({ service: MembersService, set: setMembersList, groupId })        
    }
    setModalAlertVisible(false)
    showModal(result)
  }
  // useEffect(() => {
  //   if(params?._id) {
  //     const photo = capturedImage?.base64 ? `data:image/jpeg;base64,${capturedImage?.base64}` : params?.photo
  //     setEditable(!!params._id)
  //     setName(params?.name)
  //     setEmail(params?.email)
  //     setTypePermission(!!params?.type)
  //     const dateBirthday = params?.birthday ? new Date(params?.birthday.toString()) : new Date()
  //     // dateDb.setDate(dateDb.getDate() +1)
  //     setBirthday(dateBirthday)
  //     setPhotoMember(photo)
  //   }
  // }, [])
  // useEffect(() => {
  //   const photo = capturedImage?.base64 ? `data:image/jpeg;base64,${capturedImage?.base64}` : params?.photo
  //   setPhotoMember(photo)
  // }, [capturedImage])
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
          photoMember && <S.Photo
            source={photoMember}
            contentFit='cover'
          />
        }
        <S.ImageButton onPress={handleClickCamera}>
          Imagem
          {/* <Icons name='camera' size={photoMember ? 30 : 90} color={COLORS.primaryBorder} /> */}
        </S.ImageButton>
      </S.ImageEditor>
      <FieldInput
        placeholderText='Insira o nome...'
        label='Nome'
        iconName='user'
        setValue={setName}
        value={name}
      />
      <FieldInput
        placeholderText='Insira o email...'
        label='Email'
        type='email'
        iconName='envelope'
        setValue={setEmail}
        value={email}
      />
      <FieldInput
        placeholderText='Insira a senha...'
        label='Senha'
        iconName='eye-slash'
        secureTextEntry={true}
        setValue={setPassword}
        value={password}
      />
      <FieldInput
        label='Data de Nascimento'
        iconName='calendar'
        >
          <FieldDate
            date={birthday}
            handleDate={setBirthday}
            setVisible={setCalendarVisible}
            visible={calendarVisible}
          />
      </FieldInput>
      <FieldInput
        label='Tipo de Permissão'
        iconName='user-secret'
      >
        <S.Select
          value={typePermission}
          onChange={setTypePermission}
        >
          <S.Option label="Usuário" value={false}/>
          <S.Option label="Administrador" value={true}/>
        </S.Select>
      </FieldInput>
    </S.Container>
    <ActionButtonsBlock handleClick={handleSave} title='Salvar Usuario'/>
  </ViewContent>
}
